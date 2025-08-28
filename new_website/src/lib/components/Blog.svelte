<script lang="ts">
  const blogPosts = [
    {
      title: "Amazon Bedrock Flows: Building Complex AI Workflows Without Code",
      excerpt: "Amazon Bedrock Flows has gone GA, bringing visual workflow orchestration to generative AI. Learn how this no-code solution enables developers to build sophisticated AI applications with enhanced safety and traceability.",
      date: "December 28, 2024", 
      readTime: "15 min read",
      category: "AWS",
      image: "🔧",
      link: "/blog/bedrock-flows"
    },
    {
      title: "How I created my own Flutter app to study for AWS Certifications",
      excerpt: "In this blog, I show how I built a custom \"Study Buddy\" app in Flutter to help me learn AWS content on the go. You will see how I track scores, display explanations, and even allow \"Endless Mode\" for long study sessions.",
      date: "November 10, 2024",
      readTime: "5 min read",
      category: "Flutter",
      image: "📱",
      link: "/blog/aws-study-buddy"
    },
    {
      title: "How to Optimize Your AI Costs with Intelligent Prompt Routing and Prompt Caching",
      excerpt: "In this blog, I explore how you can optimize your AI costs using Intelligent Prompt Routing and Prompt Caching. By combining these two features, you can reduce your AI costs and speed up your responses.",
      date: "November 10, 2024",
      readTime: "8 min read",
      category: "AI/ML",
      image: "🤖",
      link: "/blog/ai-cost-optimization"
    },
    {
      title: "How I built MergeMate: a Serverless Code Review Assistant",
      excerpt: "In this blog, I walk you through how our team built a serverless code review assistant using AWS Bedrock and GitLab. You will see how we tackled the challenges of code reviews at scale.",
      date: "December 15, 2024",
      readTime: "12 min read",
      category: "DevOps",
      image: "🔍",
      link: "/blog/mergemate"
    },
    {
      title: "How I Created a Fully Automated YouTube Channel with OpenAI",
      excerpt: "In this blog, I walk you through the process of creating a fully automated YouTube channel using OpenAI's tools and some Python scripts. From generating content to uploading videos, everything is automated.",
      date: "August 29, 2024",
      readTime: "10 min read",
      category: "Automation",
      image: "🎥",
      link: "/blog/youtube-automation"
    }
  ];
</script>

<section id="blog" class="py-20 bg-white">
  <div class="section-container">
    <div class="text-center mb-16">
      <h2 class="text-4xl lg:text-5xl font-bold gradient-text mb-4">Latest Blog Posts</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Sharing my experiences, learnings, and insights from building software solutions
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      {#each blogPosts as post, index}
        <article class="card p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer" style="animation-delay: {index * 100}ms;">
          <!-- Category and Icon -->
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <div class="text-2xl">{post.image}</div>
          </div>

          <!-- Post Info -->
          <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {post.title}
          </h3>
          
          <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <!-- Meta Info -->
          <div class="flex items-center justify-between text-sm text-gray-500">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          <!-- Read More -->
          <div class="mt-4 pt-4 border-t border-gray-100">
            <a 
              href={post.link}
              class="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
            >
              Read More →
            </a>
          </div>
        </article>
      {/each}
    </div>

    <!-- View All Posts Button -->
    <div class="text-center mt-12">
      <button type="button" class="btn-primary" disabled>
        View All Posts
      </button>
    </div>
  </div>
</section>