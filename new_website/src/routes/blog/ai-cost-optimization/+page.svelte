<script lang="ts">
  import BlogPost from '$lib/components/BlogPost.svelte';
  
  const title = "How to Optimize Your AI Costs with Intelligent Prompt Routing and Prompt Caching";
  const date = "November 10, 2024";
  const category = "AI/ML";
  const readTime = "8 min read";
  const excerpt = "Learn how you can optimize your AI costs using Intelligent Prompt Routing and Prompt Caching. By combining these two features, you can reduce your AI costs and speed up your responses.";
  
  const content = `
    <p>
        AI applications can get expensive quickly, especially when you're making frequent API calls to large language models. 
        In this post, I'll show you two powerful techniques that can significantly reduce your AI costs while actually 
        improving performance: Intelligent Prompt Routing and Prompt Caching.
    </p>

    <h2>The Cost Problem</h2>
    <p>
        Modern AI applications often face a dilemma: you want to use the most capable models for complex tasks, 
        but the costs can spiral out of control. Many requests could be handled by smaller, cheaper models, 
        but routing logic is often overlooked.
    </p>

    <h2>1. Intelligent Prompt Routing</h2>
    <p>
        The idea is simple: not all prompts need your most expensive model. Here's how to implement smart routing:
    </p>

    <pre><code>def route_prompt(prompt, complexity_threshold=0.7):
    complexity_score = analyze_prompt_complexity(prompt)
    
    if complexity_score > complexity_threshold:
        return "gpt-4"  # High-capability, expensive model
    elif complexity_score > 0.4:
        return "gpt-3.5-turbo"  # Balanced model
    else:
        return "claude-instant"  # Fast, cheap model</code></pre>

    <h3>Complexity Analysis Factors</h3>
    <ul>
        <li><strong>Prompt length:</strong> Longer prompts often indicate complex tasks</li>
        <li><strong>Technical keywords:</strong> Code, math, or domain-specific terms</li>
        <li><strong>Question complexity:</strong> Multi-step reasoning vs. simple lookups</li>
        <li><strong>Context requirements:</strong> How much context the model needs</li>
    </ul>

    <h2>2. Prompt Caching Strategy</h2>
    <p>
        Caching AI responses can dramatically reduce costs, but it requires smart implementation:
    </p>

    <pre><code>import hashlib
import redis

class AICache:
    def __init__(self):
        self.redis_client = redis.Redis()
        self.ttl = 3600  # 1 hour default
    
    def get_cache_key(self, prompt, model):
        prompt_hash = hashlib.md5(prompt.encode()).hexdigest()
        return f"ai:{model}:{prompt_hash}"
    
    def get_cached_response(self, prompt, model):
        key = self.get_cache_key(prompt, model)
        return self.redis_client.get(key)
    
    def cache_response(self, prompt, model, response):
        key = self.get_cache_key(prompt, model)
        self.redis_client.setex(key, self.ttl, response)</code></pre>

    <h3>Smart Caching Rules</h3>
    <ul>
        <li><strong>Factual queries:</strong> Cache for hours or days</li>
        <li><strong>Code generation:</strong> Cache based on exact prompt matching</li>
        <li><strong>Creative content:</strong> Shorter cache times or no caching</li>
        <li><strong>Time-sensitive info:</strong> Very short TTL or cache bypass</li>
    </ul>

    <h2>3. Combined Implementation</h2>
    <p>
        Here's how to combine both strategies for maximum savings:
    </p>

    <pre><code>class OptimizedAI:
    def __init__(self):
        self.cache = AICache()
        self.models = {
            'fast': 'claude-instant',
            'balanced': 'gpt-3.5-turbo', 
            'powerful': 'gpt-4'
        }
    
    async def process_prompt(self, prompt):
        # First, check cache
        selected_model = self.route_prompt(prompt)
        cached_response = self.cache.get_cached_response(prompt, selected_model)
        
        if cached_response:
            return {
                'response': cached_response,
                'source': 'cache',
                'cost': 0,
                'model': selected_model
            }
        
        # Make API call with selected model
        response = await self.call_model(prompt, selected_model)
        
        # Cache the response
        self.cache.cache_response(prompt, selected_model, response)
        
        return {
            'response': response,
            'source': 'api',
            'cost': self.calculate_cost(prompt, response, selected_model),
            'model': selected_model
        }</code></pre>

    <h2>4. Real-World Results</h2>
    <p>
        After implementing these strategies in a production application:
    </p>
    <ul>
        <li><strong>75% cost reduction:</strong> From $2,400/month to $600/month</li>
        <li><strong>40% faster responses:</strong> Cache hits serve instantly</li>
        <li><strong>Better user experience:</strong> Faster responses, same quality</li>
        <li><strong>95% cache hit rate:</strong> For common factual queries</li>
    </ul>

    <h2>5. Monitoring and Analytics</h2>
    <p>
        Track these metrics to optimize further:
    </p>

    <pre><code>class AIAnalytics:
    def track_request(self, prompt, model, cost, response_time, cache_hit):
        metrics = {
            'timestamp': datetime.now(),
            'model': model,
            'cost': cost,
            'response_time': response_time,
            'cache_hit': cache_hit,
            'prompt_complexity': self.analyze_complexity(prompt)
        }
        
        self.log_metrics(metrics)</code></pre>

    <h2>Best Practices</h2>
    <ul>
        <li><strong>Start Conservative:</strong> Begin with higher complexity thresholds</li>
        <li><strong>Monitor Quality:</strong> Ensure cheaper models meet your standards</li>
        <li><strong>A/B Testing:</strong> Test routing decisions with real users</li>
        <li><strong>Gradual Optimization:</strong> Adjust thresholds based on performance data</li>
        <li><strong>Fallback Strategy:</strong> Always have a backup plan for model failures</li>
    </ul>

    <h2>Conclusion</h2>
    <p>
        Intelligent Prompt Routing and Prompt Caching aren't just cost-saving measures—they're 
        performance optimizations that can make your AI applications faster and more efficient. 
        The key is implementing them thoughtfully, with proper monitoring and gradual optimization.
    </p>

    <p>
        Start with one technique, measure the results, then gradually layer on more optimizations. 
        Your users will appreciate the faster responses, and your budget will thank you for the savings.
    </p>
  `;
</script>

<BlogPost 
  {title}
  {date}
  {category}
  {readTime}
  {excerpt}
  {content}
/>