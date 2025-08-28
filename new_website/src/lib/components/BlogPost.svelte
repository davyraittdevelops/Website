<script lang="ts">
  export let title: string;
  export let date: string;
  export let category: string;
  export let readTime: string;
  export let excerpt: string;
  export let content: string;
</script>

<div class="min-h-screen bg-gray-50 py-16">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Back Button -->
    <div class="mb-8">
      <a 
        href="/#blog" 
        class="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </a>
    </div>

    <!-- Article Header -->
    <header class="mb-12">
      <div class="mb-6">
        <span class="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
          {category}
        </span>
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {title}
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed mb-6">
          {excerpt}
        </p>
        <div class="flex items-center text-gray-500 text-sm">
          <span>Published {date}</span>
          <span class="mx-2">•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </header>

    <!-- Article Content -->
    <article class="bg-white rounded-xl shadow-lg p-8 lg:p-12">
      <div class="prose prose-lg max-w-none">
        {@html content}
      </div>
    </article>

    <!-- Navigation -->
    <div class="mt-12 text-center">
      <a 
        href="/#blog" 
        class="btn-primary"
      >
        View All Posts
      </a>
    </div>
  </div>
</div>

<style>
  :global(.prose) {
    @apply text-gray-700 leading-relaxed;
  }
  
  :global(.prose h1) {
    @apply text-3xl font-bold text-gray-900 mb-6 mt-8;
  }
  
  :global(.prose h2) {
    @apply text-2xl font-bold text-gray-900 mb-4 mt-8;
  }
  
  :global(.prose h3) {
    @apply text-xl font-semibold text-gray-900 mb-4 mt-6;
  }
  
  :global(.prose h4) {
    @apply text-lg font-semibold text-gray-900 mb-3 mt-6;
  }
  
  :global(.prose p) {
    @apply mb-6 text-gray-700 leading-relaxed;
  }
  
  :global(.prose a) {
    @apply text-primary-600 hover:text-primary-700 underline;
  }
  
  :global(.prose ul) {
    @apply mb-6 ml-6 list-disc;
  }
  
  :global(.prose ol) {
    @apply mb-6 ml-6 list-decimal;
  }
  
  :global(.prose li) {
    @apply mb-2;
  }
  
  :global(.prose code) {
    @apply bg-gray-100 text-primary-600 px-2 py-1 rounded text-sm font-mono;
  }
  
  :global(.prose pre) {
    @apply bg-gray-900 text-white p-6 rounded-lg overflow-x-auto mb-6;
  }
  
  :global(.prose pre code) {
    @apply bg-transparent text-white p-0;
  }
  
  :global(.prose blockquote) {
    @apply border-l-4 border-primary-500 pl-6 italic text-gray-600 mb-6;
  }
  
  :global(.prose img) {
    @apply rounded-lg shadow-lg mx-auto;
  }
</style>