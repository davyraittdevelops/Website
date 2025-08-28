<script lang="ts">
  import { onMount } from 'svelte';
  
  let heroRef: HTMLElement;
  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    
    if (heroRef) observer.observe(heroRef);
    
    return () => observer.disconnect();
  });
</script>

<section id="about" class="min-h-screen flex items-center relative overflow-hidden" bind:this={heroRef}>
  <!-- Background decoration -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-subtle"></div>
    <div class="absolute bottom-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-subtle" style="animation-delay: 1s;"></div>
  </div>

  <div class="section-container">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Content -->
      <div class="space-y-8 {isVisible ? 'animate-slide-in' : 'opacity-0'}">
        <div>
          <h1 class="text-5xl lg:text-7xl font-bold mb-4">
            <span class="gradient-text">CodingDone</span><br>
            <span class="text-gray-900">Raitt</span>
          </h1>
          <p class="text-xl lg:text-2xl text-gray-600 mb-6">
            Cloud & DevOps Engineer
          </p>
          <p class="text-lg text-gray-700 leading-relaxed max-w-2xl">
            I'm a software engineer who builds cloud-native apps on AWS. I work with mobile development (Android, Flutter, React Native), backend development (Python, TypeScript), and DevOps stuff like CI/CD pipelines and monitoring.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4">
          <a href="#projects" class="btn-primary">
            View My Work
          </a>
          <a 
            href="#contact" 
            class="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>

      </div>

      <!-- Profile Avatar -->
      <div class="relative {isVisible ? 'animate-fade-in' : 'opacity-0'}" style="animation-delay: 0.3s;">
        <div class="relative w-80 h-80 mx-auto">
          <!-- Rotating border -->
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 animate-spin" style="animation-duration: 8s;"></div>
          <div class="absolute inset-2 rounded-full bg-gray-50"></div>
          <!-- Person emoji avatar -->
          <div class="absolute inset-4 rounded-full bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
            <span class="text-9xl">👨‍💻</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>