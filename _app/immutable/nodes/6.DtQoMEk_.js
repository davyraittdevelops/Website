import"../chunks/DsnmJJEf.js";import"../chunks/DoEP1VJ-.js";import{B as t}from"../chunks/BY3dOzEW.js";function m(e){t(e,{title:"How I built MergeMate: a Serverless Code Review Assistant",date:"December 15, 2024",category:"DevOps",readTime:"12 min read",excerpt:"Walk through how our team built a serverless code review assistant using AWS Bedrock and GitLab. See how we tackled the challenges of code reviews at scale and turned them into a streamlined, automated process.",content:`
    <p>
        Code reviews are essential for maintaining code quality, but they can become a bottleneck as teams grow. 
        Our team built MergeMate, a serverless code review assistant that uses AWS Bedrock to provide intelligent, 
        automated code review feedback integrated directly into GitLab merge requests.
    </p>

    <h2>The Problem</h2>
    <p>
        Our development team was facing several challenges with code reviews:
    </p>
    <ul>
        <li>Inconsistent review quality across different reviewers</li>
        <li>Long wait times for senior developers to review junior code</li>
        <li>Repetitive feedback on common issues (style, best practices)</li>
        <li>Difficulty maintaining coding standards across multiple projects</li>
    </ul>

    <h2>Architecture Overview</h2>
    <p>
        MergeMate uses a serverless architecture built on AWS:
    </p>

    <pre><code>GitLab Webhook → API Gateway → Lambda Function → Bedrock → GitLab API
                                      ↓
                               S3 (Code Context) ← DynamoDB (Review History)</code></pre>

    <h3>Key Components</h3>
    <ul>
        <li><strong>GitLab Webhooks:</strong> Trigger reviews on merge request creation</li>
        <li><strong>AWS Lambda:</strong> Process webhook events and coordinate reviews</li>
        <li><strong>Amazon Bedrock:</strong> Generate intelligent code review comments</li>
        <li><strong>S3:</strong> Store code context and diff information</li>
        <li><strong>DynamoDB:</strong> Track review history and learning patterns</li>
    </ul>

    <h2>Implementation Deep Dive</h2>

    <h3>1. Webhook Processing</h3>
    <pre><code>import json
import boto3

def lambda_handler(event, context):
    # Parse GitLab webhook
    webhook_data = json.loads(event['body'])
    
    if webhook_data.get('object_kind') != 'merge_request':
        return {'statusCode': 200, 'body': 'Not a merge request'}
    
    mr_data = webhook_data['object_attributes']
    project_id = webhook_data['project']['id']
    mr_iid = mr_data['iid']
    
    # Queue review job
    process_merge_request(project_id, mr_iid)
    
    return {'statusCode': 200, 'body': 'Review queued'}</code></pre>

    <h3>2. Code Analysis</h3>
    <pre><code>def analyze_code_changes(project_id, mr_iid):
    # Get diff from GitLab API
    gitlab = gitlab_client()
    mr = gitlab.projects.get(project_id).mergerequests.get(mr_iid)
    changes = mr.changes()
    
    analysis_context = {
        'files_changed': len(changes['changes']),
        'additions': 0,
        'deletions': 0,
        'code_snippets': []
    }
    
    for change in changes['changes']:
        if change['new_file'] or change['deleted_file']:
            continue
            
        # Analyze each chunk of changes
        diff_content = change['diff']
        analysis_context['code_snippets'].append({
            'file': change['new_path'],
            'diff': diff_content,
            'language': detect_language(change['new_path'])
        })
    
    return analysis_context</code></pre>

    <h3>3. AI-Powered Review Generation</h3>
    <pre><code>def generate_review_comments(analysis_context):
    bedrock = boto3.client('bedrock-runtime')
    
    prompt = f"""
    You are an experienced software engineer reviewing code changes.
    Analyze the following code diff and provide constructive feedback.
    
    Focus on:
    - Code quality and best practices
    - Security vulnerabilities
    - Performance considerations
    - Maintainability issues
    
    Code changes:
    {format_code_context(analysis_context)}
    
    Provide specific, actionable feedback with line numbers where applicable.
    """
    
    response = bedrock.invoke_model(
        modelId='anthropic.claude-3-sonnet-20240229-v1:0',
        contentType='application/json',
        accept='application/json',
        body=json.dumps({
            'anthropic_version': 'bedrock-2023-05-31',
            'max_tokens': 2000,
            'messages': [{'role': 'user', 'content': prompt}]
        })
    )
    
    return parse_ai_response(response)</code></pre>

    <h2>Smart Comment Filtering</h2>
    <p>
        Not every AI suggestion is valuable. We implemented filtering to ensure quality:
    </p>

    <pre><code>def filter_comments(comments, context):
    filtered = []
    
    for comment in comments:
        # Skip if similar comment exists in history
        if is_duplicate_comment(comment, context['mr_history']):
            continue
            
        # Skip trivial style issues if project has auto-formatting
        if has_auto_formatting(context['project']) and is_style_comment(comment):
            continue
            
        # Prioritize security and performance issues
        comment['priority'] = calculate_priority(comment)
        filtered.append(comment)
    
    # Only post top priority comments to avoid noise
    return sorted(filtered, key=lambda x: x['priority'], reverse=True)[:5]</code></pre>

    <h2>GitLab Integration</h2>
    <pre><code>def post_review_comments(project_id, mr_iid, comments):
    gitlab = gitlab_client()
    mr = gitlab.projects.get(project_id).mergerequests.get(mr_iid)
    
    for comment in comments:
        # Create threaded discussion on specific lines
        mr.discussions.create({
            'body': format_comment(comment),
            'position': {
                'position_type': 'text',
                'new_path': comment['file_path'],
                'new_line': comment['line_number']
            }
        })
    
    # Add summary comment
    summary = generate_review_summary(comments)
    mr.notes.create({'body': summary})</code></pre>

    <h2>Continuous Learning</h2>
    <p>
        MergeMate learns from developer interactions:
    </p>

    <pre><code>def track_comment_feedback(comment_id, feedback_type):
    # Store in DynamoDB for learning
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('mergemate-feedback')
    
    table.put_item(Item={
        'comment_id': comment_id,
        'feedback': feedback_type,  # 'helpful', 'not_helpful', 'resolved'
        'timestamp': int(time.time()),
        'project_context': get_project_context()
    })
    
    # Update AI model preferences
    update_review_patterns(feedback_type)</code></pre>

    <h2>Results and Metrics</h2>
    <p>After 3 months of using MergeMate:</p>
    <ul>
        <li><strong>60% faster reviews:</strong> First-pass automated feedback reduces human review time</li>
        <li><strong>40% fewer defects:</strong> Catches common issues before human review</li>
        <li><strong>85% developer satisfaction:</strong> Helpful, actionable feedback</li>
        <li><strong>$2,400/month cost:</strong> Much cheaper than additional senior developers</li>
    </ul>

    <h2>Key Learnings</h2>
    <ul>
        <li><strong>Context is crucial:</strong> Providing full file context, not just diffs, improves review quality</li>
        <li><strong>Less is more:</strong> Limiting comments to top 5 issues prevents notification fatigue</li>
        <li><strong>Learning loop:</strong> Tracking developer feedback continuously improves the system</li>
        <li><strong>Integration matters:</strong> Seamless GitLab integration encourages adoption</li>
    </ul>

    <h2>Future Enhancements</h2>
    <p>We're working on:</p>
    <ul>
        <li>Custom rule sets per project or team</li>
        <li>Integration with static analysis tools</li>
        <li>Automated fix suggestions for common issues</li>
        <li>Performance impact analysis for larger changes</li>
    </ul>

    <h2>Conclusion</h2>
    <p>
        MergeMate has transformed our code review process from a bottleneck into an accelerator. 
        By combining AI capabilities with smart filtering and continuous learning, we've created 
        a tool that genuinely helps developers write better code faster.
    </p>

    <p>
        The serverless architecture keeps costs low while scaling with our team's needs. 
        Most importantly, developers actually enjoy using it—which is the ultimate measure 
        of success for any developer tool.
    </p>
  `})}export{m as component};
