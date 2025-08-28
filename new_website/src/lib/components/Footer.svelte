<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-900 text-white py-12">
  <div class="section-container">
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Brand -->
      <div class="space-y-4">
        <h3 class="text-2xl font-bold gradient-text">CodingDoneRaitt</h3>
        <p class="text-gray-400 leading-relaxed">
          Cloud & DevOps Engineer passionate about building scalable, modern solutions. 
          Currently helping companies leverage the power of AWS and cloud-native technologies.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="space-y-4">
        <h4 class="text-lg font-semibold">Quick Links</h4>
        <div class="space-y-2">
          <a href="#about" class="block text-gray-400 hover:text-white transition-colors duration-200">About</a>
          <a href="#experience" class="block text-gray-400 hover:text-white transition-colors duration-200">Experience</a>
          <a href="#projects" class="block text-gray-400 hover:text-white transition-colors duration-200">Projects</a>
          <a href="#blog" class="block text-gray-400 hover:text-white transition-colors duration-200">Blog</a>
          <a href="#contact" class="block text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="space-y-4">
        <h4 class="text-lg font-semibold">Let's Connect</h4>
        <div class="space-y-2">
          <p class="text-gray-400">
            <span class="font-medium">Email:</span> codingdoneraitt@gmail.com
          </p>
          <p class="text-gray-400">
            <span class="font-medium">Status:</span> Available for freelance projects
          </p>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-800 mt-8 pt-8">
      <div class="text-center text-gray-400">
        <p>&copy; {currentYear} CodingDoneRaitt. Built with SvelteKit and Tailwind CSS.</p>
      </div>
    </div>
  </div>
</footer>