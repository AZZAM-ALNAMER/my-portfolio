export const profileData = {
  name: "Azzam Hesham Al-Sarari",
  title: "AI Engineer",
  headline: "Building intelligent systems — LLMs · Agentic AI · Computer Vision",
  summary:
    "AI Engineer with hands-on experience building production-ready systems across the full AI stack — from LLM fine-tuning and agentic pipeline design to computer vision and RAG architecture. Delivered multiple end-to-end projects spanning multi-agent orchestration, semantic search, and generative AI integration. Strong foundation in mathematics, system design, and applying AI to real-world optimization problems. I speak Arabic (native), English (fluent), and Turkish (conversational).",
  email: "azamo77.alsarari@gmail.com",
  location: "Ankara, Turkey",
  availability: "AI Engineer · Ankara, Turkey",
  preferredRoles: ["LLMs", "Agentic AI", "Computer Vision"],
  profileImage: {
    src: "/personal-image.jpeg",
    alt: "Azzam Hesham Al-Sarari",
  },
  contactLinks: [
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/azzam-alsarari-908b94346/?isSelfProfile=true",
    },
    {
      id: "github",
      label: "GitHub",
      url: "http://github.com/AZZAM-ALNAMER",
    },
    {
      id: "email",
      label: "azamo77.alsarari@gmail.com",
      url: "mailto:azamo77.alsarari@gmail.com",
    },
  ],
  cvUrl: "/azzam-hesham-al-sarari-cv.pdf",
  skills: [
    {
      category: "AI Engineering & Generative AI",
      items: [
        "Python",
        "LLMs & RAG Architectures",
        "LangGraph",
        "LangChain",
        "Agno",
        "Model Fine-Tuning (LoRA, QLoRA, Unsloth)",
        "Prompt Engineering",
        "Vector Databases & Semantic Search",
        "Ollama (Local LLMs)",
        "Gemini API",
        "OpenAI API",
      ],
      icon: "HiSparkles",
    },
    {
      category: "Agentic & Multi-Agent Systems",
      items: [
        "Agentic AI Design",
        "Multi-Agent Orchestration",
        "Stateful Graph Design",
        "Tool-Augmented LLM Pipelines",
        "Jury Agent Patterns",
      ],
      icon: "HiLightningBolt",
    },
    {
      category: "Computer Vision & NLP",
      items: [
        "YOLOv8",
        "3D SAM",
        "Google Vertex AI",
        "Image Segmentation",
        "NER",
        "Tokenization & Embeddings",
        "Text Classification",
        "Sentiment Analysis",
        "Information Extraction",
      ],
      icon: "HiEye",
    },
    {
      category: "Full-Stack & Data Engineering",
      items: [
        "React",
        "Vite",
        "TypeScript",
        "FastAPI",
        "Django",
        "REST APIs",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "KNIME",
        "PostgreSQL",
        "Supabase (pgvector)",
      ],
      icon: "HiDatabase",
    },
    {
      category: "Deployment & Project Delivery",
      items: [
        "Docker",
        "Hugging Face Spaces",
        "Render",
        "Netlify",
        "Google Cloud",
        "Git & GitHub",
        "Agile / Scrum",
        "Jira",
      ],
      icon: "HiGlobe",
    },
  ],
  experiences: [
    {
      role: "AI Engineer Intern",
      company: "flyrank.ai",
      period: "July 2026 – Present",
      details: [
        "Working on AI-powered systems and LLM integrations in a fast-paced startup environment.",
      ],
      stack: ["AI Engineering", "LLM Integrations"],
    },
    {
      role: "AI Engineer & Researcher",
      company: "BLC İletişim ve Güvenlik Sistemleri",
      period: "May 2025 – 2026",
      details: [
        "Developed AI-driven solutions for complex optimization and resource allocation problems.",
        "Fine-tuned and evaluated LLM-based approaches.",
        "Applied research in LLM mathematical reasoning for VM/resource allocation tasks.",
        "Collaborated with cross-functional teams to translate technical requirements into production AI implementations.",
      ],
      stack: ["LLMs", "Optimization", "Resource Allocation", "AI Research"],
    },
  ],
  projects: [
    {
      slug: "virtual-dressing-system-vds-v2",
      name: "Virtual Dressing System (VDS V2)",
      role: "Professional Project · BLC İletişim",
      period: "2026 · 3 months",
      focus:
        "A full-stack web application that acts as a smart virtual fitting room. Users upload their photos to automatically get body measurements, skin tone analysis, and clothing size recommendations. The system generates a personalized 3D avatar and allows users to virtually try on clothes using AI.",
      description:
        "AI-powered virtual fitting room that generates a personalized 3D avatar from a single user photo — combining body measurement, skin tone detection, 3D reconstruction, and photorealistic try-on in one unified pipeline.",
      impact: "Personalized 3D avatars · AI virtual try-on · Body measurements",
      achievements: [
        "Developed a dynamic React and Tailwind web app with interactive 3D body avatars using Three.js.",
        "Engineered a high-performance FastAPI backend deployed via Docker on Hugging Face Spaces GPU infrastructure.",
        "Integrated AI tools (YOLOv8, Vertex AI, Ollama, SAM 3D Body) for virtual try-on, body measurements, and clothing recommendations.",
        "Trained a custom CNN for skin-tone classification feeding into the LLM recommendation pipeline.",
        "Optimized data pipelines with parallel processing for fast load times during heavy AI computations.",
      ],
      stack: [
        "Python",
        "FastAPI",
        "YOLOv8",
        "3D SAM",
        "Ollama",
        "Vertex AI",
        "React",
        "Tailwind",
        "Three.js",
        "Docker",
        "Hugging Face Spaces",
      ],
      links: [
        {
          label: "Live Demo",
          url: "https://ammar-m-ai.netlify.app/projects/virtual-dressing-system-vds",
        },
        {
          label: "GitHub",
          url: "https://github.com/AMMMMMMAR/ai-dresser",
        },
      ],
      images: [
        { label: "How It Works", src: "/projects/vds-1.png" },
        { label: "Body Measurement Feature", src: "/projects/vds-2.png" },
        { label: "Skin Tone Feature", src: "/projects/vds-3.png" },
        { label: "Recommendation Engine", src: "/projects/vds-4.png" },
        { label: "SAM 3D Body Feature", src: "/projects/vds-5.png" },
        { label: "Virtual Try-On Feature", src: "/projects/vds-6.png" },
        { label: "3D Body Avatar Result", src: "/projects/vds-7.png" },
        { label: "Virtual Dressing Room Before", src: "/projects/vds-8.png" },
        { label: "Virtual Dressing Room After", src: "/projects/vds-9.png" },
      ],
    },
    {
      slug: "matchi-ai-job-matcher",
      name: "Matchi — AI Job Matcher",
      role: "Graduation Capstone · OSTIM Technical University",
      period: "2026 · 3 months",
      focus:
        "A smart job matching system that helps people find the best jobs for their skills. Instead of just matching exact words, it uses AI to deeply understand a CV and compare it to job descriptions. It gives users helpful feedback including match percentage, skill strengths, and what they should learn next.",
      description:
        "RAG-based semantic job-matching platform that fetches real job listings via external APIs and matches them against candidate CVs using Gemini embeddings and Supabase pgvector — delivering ranked match percentages and skill-gap breakdowns.",
      impact: "RAG semantic matching · Gemini embeddings · Skill-gap analysis",
      achievements: [
        "Built a RAG pipeline using Gemini embeddings and Supabase pgvector to retrieve and rank the closest job matches.",
        "Connected to external job APIs to continuously pull real up-to-date listings into the matching pipeline.",
        "Designed structured prompts grounding Gemini's output into accurate match percentages and skill-gap breakdowns.",
        "Built FastAPI backend focused on retrieval accuracy and consistent structured output.",
        "Delivered with full academic thesis, UML documentation, and presentation video.",
      ],
      stack: [
        "Python",
        "FastAPI",
        "RAG",
        "Supabase pgvector",
        "Gemini API",
        "React",
        "Vite",
        "Netlify",
      ],
      links: [
        {
          label: "Live Demo",
          url: "https://matchicv.netlify.app/",
        },
        {
          label: "GitHub",
          url: "https://github.com/AZZAM-ALNAMER/cv-job-matcher",
        },
      ],
      images: [
        {
          label: "CV Analysis and Job Matching",
          src: "/projects/matchi-1.png",
        },
        {
          label: "CV Gap and Recommendation Studies",
          src: "/projects/matchi-2.png",
        },
      ],
    },
  ],
  achievements: [
    "Built end-to-end AI projects across agentic systems, semantic search, and generative AI.",
    "Applied LLM-based mathematical reasoning to real-world VM and resource allocation problems.",
  ],
  certifications: [
    {
      name: "Introduction to LLMs in Python",
      issuer: "DataCamp",
      year: "January 2025",
      detail: "Introduction to working with large language models in Python.",
    },
    {
      name: "Exploratory Data Analysis in Python",
      issuer: "DataCamp",
      year: "January 2024",
      detail: "Exploratory data analysis techniques using Python.",
    },
  ],
  education: {
    degree: "Bachelor's Degree in Software Engineering",
    institution: "OSTIM Technical University",
    specialization: "Ankara, Turkey · GPA: 3.50 / 4.00",
    graduation: "Graduated",
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Turkish", level: "Conversational" },
  ],
  preferences: [
    "Open to Remote Roles",
    "Open to Relocation",
    "AI Research & Open Source Contributor",
  ],
  services: [
    {
      title: "LLM and Agentic AI Systems",
      description:
        "Designing LLM-powered applications, retrieval pipelines, and multi-agent systems for practical use cases.",
      icon: "HiSparkles",
      image: "/assets/chatbot.png",
    },
    {
      title: "Computer Vision Applications",
      description:
        "Building computer vision solutions for image understanding, segmentation, and AI-powered user experiences.",
      icon: "HiEye",
      image: "/assets/computer-vision-banner.png",
    },
  ],
};
