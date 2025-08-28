<script lang="ts">
  const experiences = [
    {
      title: "Medior Cloud / DevOps Engineer",
      company: "Large Energy Company",
      period: "Feb 2024 - Present",
      description: "I work as a Cloud Engineer at a large European energy company, one of the region's largest energy providers. My role involves designing and managing scalable AWS cloud solutions, supporting other DevOps teams in leveraging the cloud.",
      skills: ["Terraform", "AWS CDK", "Amazon Web Services", "Python", "TypeScript"],
      icon: "☁️"
    },
    {
      title: "Freelance Software Developer",
      company: "Self-employed",
      period: "Jan 2024 - Present",
      description: "I enjoy learning new things and improving my skills as a developer by working on freelance projects for clients around the world. My projects vary widely, including apps for finance and public opinion, as well as cloud services and AI tools.",
      skills: ["FlutterFlow", "Project Management", "React Native", "ASP.NET", "C#"],
      icon: "💻"
    },
    {
      title: "Software Engineer",
      company: "Software Development Company",
      period: "Dec 2021 - Feb 2024",
      description: "Developed integrations with CRM systems and telephony platforms. Migrated on-premise apps to Azure, automating building, linting, SAST, testing, and deployment with CI/CD pipelines.",
      skills: ["Jest", "JavaScript", "Microsoft Azure", "Node.js", "OpenAI", "C#"],
      icon: "⚙️"
    },
    {
      title: "Graduate Software Engineer",
      company: "Healthcare Technology Company",
      period: "Feb 2023 - Jul 2023",
      description: "Implemented a mirror OLAP infrastructure for data analysts to use for historical queries, reducing impact on production. Developed a prototype Data Lake with AWS S3, Lake Formation, and Glue.",
      skills: ["AWS Lambda", "PostgreSQL", "Data Lakes", "AWS CDK", "TypeScript", "Python"],
      icon: "🏥"
    }
  ];
</script>

<section id="experience" class="py-20 bg-white">
  <div class="section-container">
    <div class="text-center mb-16">
      <h2 class="text-4xl lg:text-5xl font-bold gradient-text mb-4">Experience</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        My journey through various roles in cloud engineering, software development, and DevOps
      </p>
    </div>

    <div class="space-y-8">
      {#each experiences as exp, index}
        <div class="card p-8 hover:scale-[1.02] transition-transform duration-300" style="animation-delay: {index * 100}ms;">
          <div class="grid md:grid-cols-4 gap-6">
            <!-- Icon and Period -->
            <div class="md:col-span-1">
              <div class="text-4xl mb-4">{exp.icon}</div>
              <p class="text-primary-600 font-semibold text-sm">{exp.period}</p>
            </div>

            <!-- Content -->
            <div class="md:col-span-3">
              <div class="mb-4">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                <p class="text-lg text-primary-600 font-medium">{exp.company}</p>
              </div>
              
              <p class="text-gray-700 leading-relaxed mb-6">
                {exp.description}
              </p>

              <!-- Skills -->
              <div class="flex flex-wrap gap-2">
                {#each exp.skills as skill}
                  <span class="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>