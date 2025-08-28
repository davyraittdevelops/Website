<script lang="ts">
  import { onMount } from 'svelte';
  
  let scrollY = 0;
  let isMenuOpen = false;

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  onMount(() => {
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="fixed top-0 w-full z-50 transition-all duration-300 {scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}">
  <div class="section-container">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="#top" class="text-2xl font-bold gradient-text">
        CodingDoneRaitt
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-8">
        {#each navItems as item}
          <a 
            href={item.href}
            class="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
          >
            {item.label}
          </a>
        {/each}
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        on:click={() => isMenuOpen = !isMenuOpen}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if !isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if isMenuOpen}
      <div class="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg animate-slide-in">
        {#each navItems as item}
          <a 
            href={item.href}
            class="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200 font-medium"
            on:click={() => isMenuOpen = false}
          >
            {item.label}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</nav>