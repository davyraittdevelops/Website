<script lang="ts">
  let expandedProject: number | null = null;

  const toggleProject = (index: number) => {
    expandedProject = expandedProject === index ? null : index;
  };

  const projects = [
    {
      title: "PRIME Mobile App",
      description: "Created for a financial services company specializing in commercial real estate financing. The app helps index, photograph, and review potential properties.",
      fullDescription: "Created for a financial services company specializing in commercial real estate financing. The PRIME app helps index, photograph, and review potential properties. Developed in FlutterFlow for Android, it connects with an MS SQL Server for data management. Users can log in, select properties via dropdown or QR code, and submit reviews using speech-to-text. The app works offline, syncing data once online, and offers tabs for Property Selection, New Reviews, and Submission.",
      tech: ["FlutterFlow", "MS SQL Server", "Android", "Offline Sync"],
      category: "Mobile Development",
      image: "🏢",
      video: "/assets/videos/freelancingProject5Video.mp4"
    },
    {
      title: "Public Opinion Collection App",
      description: "Originally a native Android application converted to FlutterFlow. Designed for use on Samsung Galaxy Tablets in kiosk mode, placed in public areas for recording opinions.",
      fullDescription: "Originally a native Android application, this project involved converting it to a FlutterFlow app. Designed for use on Samsung Galaxy Tablets in kiosk mode, this app is placed in public areas for people to record their opinions on various topics. It integrates AI transcription services and language models to create summaries and quotes. The app features a start screen with a question prompt, a tutorial on how it works, a recording interface, a loading and thank you page, and a summary page that displays the AI-generated summary and quote with an option to regenerate the quote.",
      tech: ["FlutterFlow", "AI Integration", "Kiosk Mode", "Real-time Processing"],
      category: "AI & Mobile",
      image: "🗣️",
      video: "/assets/videos/freelancingProject2Video.mp4"
    },
    {
      title: "Photo Backup Mobile App",
      description: "React Native app that allows users to back up photos and videos to S3-compatible storage providers. Features multi-disk backup, encryption, and hashing functionalities.",
      fullDescription: "This React Native (Expo) app allows users to back up photos and videos to S3-compatible storage providers like AWS S3, Storj, and Wasabi. The app features multi-disk backup, encryption, and hashing functionalities. Key functionalities include connecting to storage disks, reading the device's photo library, checking for previously uploaded photos via hashing, encrypting and uploading new photos, and generating encrypted previews. The user interface has three tabs: 'Disks' for managing storage disks, 'Uploads' for tracking ongoing uploads, and 'Browse' for viewing uploaded items in a grid format.",
      tech: ["React Native", "AWS S3", "Encryption", "TypeScript"],
      category: "Cloud Storage",
      image: "📱",
      video: "/assets/videos/freelancingProject3Video.mp4"
    },
    {
      title: "Fittest - Calisthenics Training Platform",
      description: "Comprehensive fitness platform connecting personal trainers with clients. Ecosystem consists of WordPress subscription website, Angular admin dashboard, and React Native mobile app.",
      fullDescription: "Developed a comprehensive fitness platform connecting personal trainers with their clients, focusing on calisthenics training. The ecosystem consists of a WordPress-based subscription website, an Angular admin dashboard, and a React Native mobile app. Trainers can create and manage workout programs through the dashboard, while clients use the mobile app to access workouts, track progress, and interact with trainers. The platform features real-time progress tracking, workout resumption capabilities, and integrated chat functionality. Key technical achievements include implementing complex many-to-many relationships for workout management, continuous data synchronization for uninterrupted user experience, and seamless integration between the web and mobile components.",
      tech: ["React Native", "Angular", "WordPress", "Real-time Sync"],
      category: "Full-Stack Platform",
      image: "💪"
    },
    {
      title: "Position Size Calculator",
      description: "Developed for forex traders to calculate risk in the forex market. Unlike web-based solutions, this app offers convenient mobile access for determining position sizes.",
      fullDescription: "Developed upon a client's request, this app is designed for forex traders to calculate their risk in the forex market. Unlike the existing web-based solutions, this app offers a more convenient and accessible way to determine position sizes. Tailored to meet the specific needs of traders, it simplifies risk management by providing a user-friendly interface for calculating the appropriate position size based on account balance, risk percentage, and stop loss. The app includes advanced features for different trading scenarios and risk management strategies.",
      tech: ["Mobile Development", "Financial Calculations", "Risk Management"],
      category: "Finance",
      image: "📊",
      video: "/assets/videos/freelancingProject1Video.mp4"
    },
    {
      title: "AI ChatGPT Whisper App",
      description: "FlutterFlow app that integrates with ChatGPT API and Whisper. Users can record questions, get transcriptions, receive AI responses, and have them spoken back.",
      fullDescription: "Created in FlutterFlow, this app is a straightforward yet innovative project that integrates with the ChatGPT API and Whisper. The app allows users to record a question using a record button, which then changes to a stop button during the recording. Once the recording is stopped, the app transcribes the audio and displays the text on the screen. This question is then sent to ChatGPT, and the response is received and spoken back to the user using Whisper. The response is also displayed in text form below a play button. The project was designed to be user-friendly and intuitive, focusing on the seamless integration of voice recording, transcription, and AI-powered responses.",
      tech: ["FlutterFlow", "ChatGPT API", "Voice Recognition", "Text-to-Speech"],
      category: "AI Integration",
      image: "🤖",
      video: "/assets/videos/freelancingProject4Video.mp4"
    }
  ];
</script>

<section id="projects" class="py-20 bg-gray-50">
  <div class="section-container">
    <div class="text-center mb-16">
      <h2 class="text-4xl lg:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        A selection of applications I've built for clients around the world, showcasing expertise in mobile, cloud, and AI technologies
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project, index}
        <div class="card p-6 group hover:scale-105 transition-all duration-300" style="animation-delay: {index * 150}ms;">
          <!-- Project Icon -->
          <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {project.image}
          </div>

          <!-- Category -->
          <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            {project.category}
          </span>

          <!-- Project Info -->
          <h3 class="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            {expandedProject === index ? project.fullDescription : project.description}
          </p>

          <!-- Video (when expanded) -->
          {#if expandedProject === index && project.video}
            <div class="mb-6">
              <video 
                controls
                class="w-full max-w-md mx-auto rounded-lg shadow-lg"
                style="height: auto;"
              >
                <source src={project.video} type="video/mp4">
                <track kind="captions" src="" label="English" default>
                Your browser does not support the video tag.
              </video>
            </div>
          {/if}

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-4">
            {#each project.tech as tech}
              <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                {tech}
              </span>
            {/each}
          </div>

          <!-- Action Button -->
          <div class="mt-auto">
            <button 
              class="w-full bg-primary-50 hover:bg-primary-100 text-primary-700 py-2 rounded-lg font-medium transition-colors duration-200"
              on:click={() => toggleProject(index)}
            >
              {expandedProject === index ? 'Show Less' : 'Learn More'}
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>