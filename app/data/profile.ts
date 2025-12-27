export const profileData = {
  name: "Mohamed Khaled Ghareeb",
  title: "AI & Machine Learning Engineer",
  headline: "AI & Machine Learning Engineer | Generative AI Specialist",
  summary:
    "AI and Machine Learning Engineer specializing in Generative AI, NLP, and Computer Vision. Experienced with Large Language Models, Retrieval-Augmented Generation, and MLOps practices that keep production-grade systems fast, reliable, and secure.",
  email: "mohamed.khaled.ai01@gmail.com",
  location: "Egypt",
  availability: "Available July 2025 (post-graduation)",
  preferredRoles: [
    "Machine Learning Engineer",
    "AI Engineer",
    "Generative AI Engineer",
    "NLP Engineer",
  ],
  profileImage: {
    src: "/profile.jpg",
    alt: "Mohamed Khaled Ghareeb",
  },
  contactLinks: [
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/in/mohamed-khaled-ai",
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/ghreeb1",
    },
    {
      id: "discord",
      label: "Discord",
      url: "https://discordapp.com/users/1355151904459456656",
    },
  ],
  skills: [
    {
      category: "Programming & Data",
      items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      icon: "HiCode",
    },
    {
      category: "Machine Learning",
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "CNN/RNN/LSTM",
        "Transformers",
        "Transfer Learning",
      ],
      icon: "HiLightningBolt",
    },
    {
      category: "Generative AI & LLMs",
      items: [
        "OpenAI API",
        "Hugging Face",
        "LangChain",
        "FAISS",
        "RAG Architecture",
        "Prompt Engineering",
        "Fine-tuning",
      ],
      icon: "HiSparkles",
    },
    {
      category: "Computer Vision",
      items: [
        "OpenCV",
        "Object Detection",
        "Image Classification",
        "Medical Imaging",
        "ResNet-50",
      ],
      icon: "HiEye",
    },
    {
      category: "Backend & MLOps",
      items: [
        "FastAPI",
        "Django",
        "Streamlit",
        "Docker",
        "AWS EC2",
        "CI/CD",
        "PostgreSQL",
        "SQLite",
      ],
      icon: "HiDatabase",
    },
    {
      category: "Web & Product",
      items: ["REST APIs", "JWT auth", "HTML", "CSS"],
      icon: "HiGlobe",
    },
  ],
  experiences: [
    {
      role: "AI Engineer (Graduation Project)",
      company: "Memorixal – Healthcare Assistant Platform",
      period: "Jan 2025 – Present",
      details: [
        "Architected an intelligent healthcare monitoring platform with real-time patient tracking and AI-driven insights.",
        "Built a LangChain and Gemini-powered narrative engine supporting multilingual (EN/AR) patient interactions.",
        "Implemented real-time updates using FastAPI and WebSockets, ensuring seamless data flow.",
        "Developed a HIPAA-compliant architecture with automated medical report generation (PDF/Excel).",
        "Deployed scalable microservices using Docker and AWS infrastructure.",
      ],
      stack: ["FastAPI", "LangChain", "Gemini API", "WebSockets", "Docker", "AWS"],
    },
    {
      role: "Freelance AI & Software Developer",
      company: "ITIDA – Gigs Program (Round 19)",
      period: "Oct 2025 – Dec 2025",
      details: [
        "Completed a 3-month grant (Oct 15 – Dec 15) and successfully delivered 10 freelance gigs.",
        "Applied AI and software development skills in real-world projects with focus on performance and reliability.",
      ],
      stack: ["AI Development", "Software Development", "Freelancing"],
    },
    {
      role: "Freelance Machine Learning Engineer",
      company: "Mental Health Guidance Chatbot",
      period: "Sep 2024 – Dec 2024",
      details: [
        "Developed a web-based mental health support system focused on predictive guidance and empathetic interaction.",
        "Performed extensive Exploratory Data Analysis (EDA) to identify mental health trends and user patterns.",
        "Integrated a Machine Learning model using Scikit-learn for predicting health trends based on user surveys.",
        "Built a user-friendly interface using Flask and interactive visualization tools.",
      ],
      stack: ["Scikit-learn", "Flask", "Pandas", "Matplotlib", "NLP"],
    },
    {
      role: "Freelance AI Developer",
      company: "RAG Personas Chat System",
      period: "Jun 2024 – Aug 2024",
      details: [
        "Engineered a modular chat system allowing users to interact with AI personas possessing niche document knowledge.",
        "Implemented a dynamic context enrichment system using LangChain and FAISS for vector retrieval.",
        "Integrated Google Gemini API for personality-driven dialogues and information extraction.",
        "Built a scalable backend with FastAPI to handle high-concurrency persona interactions.",
      ],
      stack: ["FastAPI", "FAISS", "LangChain", "Google Gemini API"],
    },
    {
      role: "Freelance Computer Vision Engineer",
      company: "Medical Imaging Diagnostic Systems",
      period: "Mar 2024 – Jun 2024",
      details: [
        "Developed production-grade Computer Vision systems for medical diagnosis, including eye disease and pneumonia detection.",
        "Engineered deep learning architectures using PyTorch and Keras/TensorFlow for high-accuracy image classification.",
        "Built functional web portals for medical professionals to upload scans and receive automated diagnostic assistance.",
        "Applied transfer learning and data augmentation to optimize model performance on limited medical datasets.",
      ],
      stack: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "Flask"],
    },
  ],
  projects: [
    {
      slug: "al-maktabah-al-shamilah-rag-system",
      name: "Al-Maktabah Al-Shamilah RAG System",
      role: "AI/ML Engineer",
      period: "2025",
      focus:
        "A professional Arabic-first search system combining ChromaDB (178k documents) and Hadith_db (34k hadiths) with semantic embeddings (multilingual-e5-small) and AI-powered responses (gpt-oss:120B).",
      impact: "Arabic-first RAG · 210k+ Documents · Semantic Search · gpt-oss:120B",
      achievements: [
        "Combined ChromaDB (178k documents) and Hadith_db (34k hadiths) for hybrid search capabilities.",
        "Implemented semantic embeddings using multilingual-e5-small for highly accurate Arabic retrieval.",
        "Integrated gpt-oss:120B for generating intelligent, context-aware AI responses.",
        "Built with React and FastAPI to ensure a robust, scalable backend and frontend with full Arabic support.",
      ],
      stack: ["React", "FastAPI", "ChromaDB", "Hadith_db", "NLP", "RAG", "Semantic Search", "Arabic AI"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/Al-Maktabah-Al-Shamilah-RAG-System",
        },
      ],
      images: [
        { label: "Semantic Search & AI Chat Interface", src: "/img/ui/maktabah-1.png" },
        { label: "Hadith Retrieval using Semantic Search", src: "/img/ui/maktabah-2.png" },
        { label: "AI-Powered Contextual Response Generation", src: "/img/ui/maktabah-3.png" },
        { label: "Semantic Search Results with High Relevance", src: "/img/ui/maktabah-4.png" },
        { label: "Bilingual UI with Full Arabic Language Support", src: "/img/ui/maktabah-5.png" },
        { label: "Comprehensive Document Database Overview", src: "/img/ui/maktabah-6.png" },
      ],
    },
    {
      slug: "memorixal-healthcare-assistant",
      name: "AI Healthcare Assistant — Memorixal",
      role: "AI/ML Engineer",
      period: "2025–Present",
      focus:
        "An enterprise-grade healthcare monitoring platform featuring real-time patient tracking, AI-driven insights, and automated report generation.",
      impact: "HIPAA-compliant Architecture · Real-time Monitoring · LangChain · Gemini API",
      achievements: [
        "Architected an intelligent healthcare platform with real-time updates using WebSockets.",
        "Implemented a RAG-based narrative engine for patient support supporting English and Arabic.",
        "Automated medical report generation in PDF and Excel formats, improving administrative efficiency.",
        "Built with FastAPI and deployed as scalable microservices using Docker and AWS EC2.",
      ],
      stack: ["FastAPI", "WebSockets", "LangChain", "Gemini API", "RAG", "Docker", "AWS"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/Memorixal-Healthcare-Assistant",
        },
      ],
      images: [
        { label: "Healthcare Intelligence Dashboard", src: "/img/ui/memorixal-1.png" },
        { label: "Comprehensive Patient Information Management", src: "/img/ui/memorixal-2.png" },
        { label: "Analytical Data Visualization Hub", src: "/img/ui/memorixal-3.png" },
        { label: "Secure Digital Medical Records Library", src: "/img/ui/memorixal-4.png" },
        { label: "AI-Driven Clinical Consultation Module", src: "/img/ui/memorixal-5.png" },
        { label: "Automated Patient Scheduling System", src: "/img/ui/memorixal-6.png" },
        { label: "Detailed Medical Reports and Analytics", src: "/img/ui/memorixal-7.png" },
        { label: "Advanced System Configuration Console", src: "/img/ui/memorixal-8.png" },
        { label: "Role-Based User Access Management", src: "/img/ui/memorixal-9.png" },
        { label: "Project-Wide Real-time Notifications Hub", src: "/img/ui/memorixal-10.png" },
      ],
    },
    {
      slug: "tabyin-legal-assistant",
      name: "Tabyin - Intelligent Legal Assistant",
      role: "Full Stack AI Engineer",
      period: "2024–Present",
      focus:
        "An intelligent legal assistant chatbot providing information about Saudi laws, featuring fully offline voice capabilities for maximum privacy and speed.",
      impact: "Offline Voice · Google Gemini AI · Faster-Whisper · Multilingual",
      achievements: [
        "Integrated Google Gemini AI for deep legal text understanding and contextual responses.",
        "Implemented fully offline Speech-to-Text using Faster-Whisper to ensure data privacy.",
        "Added Text-to-Speech support via gTTS for enhanced user accessibility.",
        "Engineered a multilingual interface supporting Arabic, English, and Hindi.",
      ],
      stack: ["Python", "Flask", "Google Gemini AI", "Faster-Whisper", "gTTS"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/tabyin",
        },
      ],
      images: [
        { label: "Interactive Legal Assistant Main Deck", src: "/img/ui/tabyin-1.png" },
        { label: "AI Law Chat Interface with Context Awareness", src: "/img/ui/tabyin-2.png" },
        { label: "Detailed Case Law & Document Analysis", src: "/img/ui/tabyin-3.png" },
        { label: "Advanced Legal Search & Discovery Features", src: "/img/ui/tabyin-4.png" },
        { label: "Semantic Search Results for Legal Queries", src: "/img/ui/tabyin-5.png" },
        { label: "Full-Text Legal Document Viewer", src: "/img/ui/tabyin-6.png" },
        { label: "Hands-Free Offline Voice Command System", src: "/img/ui/tabyin-7.png" },
        { label: "Offline Operational Mode for Maximum Privacy", src: "/img/ui/tabyin-8.png" },
      ],
    },
    {
      slug: "ai-anime-story-generator",
      name: "AI Anime Story Generator",
      role: "AI Developer",
      period: "2025",
      focus:
        "An innovative system that transforms written stories and dialogues into visually appealing anime-style comics.",
      impact: "Auto-generates anime comics · NLP + Stable Diffusion · Web interface",
      achievements: [
        "Transforms stories or dialogues into anime-style comics automatically",
        "Uses NLP to analyze text, structure scenes, and extract dialogues",
        "Generates illustrations via Stable Diffusion and assembles panels with a web interface",
      ],
      stack: [
        "Python",
        "NLP",
        "Hugging Face Transformers",
        "Stable Diffusion",
        "FastAPI",
        "Streamlit",
      ],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/AI-Anime-Story-Generator",
        },
      ],
      images: [
        { label: "Generation Interface", src: "/img/ui/AN_1.jpeg" },
        { label: "Dashboard", src: "/img/ui/AN_2.jpeg" },
      ],
    },
    {
      slug: "caregiver-assistant-rag",
      name: "Caregiver Assistant using RAG",
      role: "AI Developer",
      period: "2024",
      focus:
        "A specialized RAG-powered assistant designed to provide accurate, context-aware information for caregivers, specifically for Alzheimer's care.",
      impact: "Retrieval-Augmented Generation · LangChain · FAISS · LLM Integration",
      achievements: [
        "Built a specialized RAG pipeline using LangChain and FAISS for efficient document retrieval and context management.",
        "Integrated dual-model support for Ollama and OpenAI to allow flexible inference options.",
        "Developed a semantic search system that retrieves information from a curated knowledge base on specialized care.",
        "Designed a clean, professional web dashboard focused on accessibility and ease of use for caregivers.",
      ],
      stack: ["Python", "FastAPI", "LangChain", "FAISS", "Ollama", "OpenAI"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/Caregiver_Assistent_using-RAG",
        },
      ],
      images: [
        {
          label: "Caregiver Support Interface",
          src: "/assets/Screenshot 2025-12-25 195032.png",
        },
      ],
    },
    {
      slug: "protofolio-macos",
      name: "Protofolio-MacOS",
      role: "Full Stack Web Developer",
      period: "2025",
      focus:
        "An interactive macOS-inspired portfolio built with React 18, recreating a realistic desktop environment to showcase various AI/ML projects.",
      impact: "Simulates macOS interface · Zustand State Management · UnoCSS · Interactive Desktop",
      achievements: [
        "Developed icon-driven desktop components including Finder, Dock, and Control Center replicas.",
        "Implemented modular application windows with draggable behaviors and dynamic state management.",
        "Utilized Zustand for high-performance global UI states and application management.",
        "Optimized for fast static deployment using Vite, TypeScript, and UnoCSS styling.",
      ],
      stack: ["React 18", "TypeScript", "Vite", "Zustand", "UnoCSS", "Framer Motion"],
      links: [
        {
          label: "Live Demo",
          url: "https://ghreeb1.github.io/",
        },
      ],
      images: [
        { label: "macOS Interface", src: "/img/ui/protofolio-macos-cover.png" },
      ],
      video: "/img/ui/protofolio-macos-demo.mp4",
    },
    {
      slug: "ai-interviewer-system",
      name: "AI Interviewer System",
      role: "AI Developer",
      period: "2025",
      focus:
        "An intelligent interview simulation system that analyzes resumes and conducts personalized technical interviews.",
      impact:
        "Personalized technical interviews · LLM resume analysis · Adaptive questioning",
      achievements: [
        "Analyzes resumes using LLMs and NLP to create dynamic, personalized interviews",
        "Simulates real interviews with adaptive questioning based on candidate responses",
        "Provides comprehensive feedback and assessment reports",
      ],
      stack: ["Python", "Transformers", "SpaCy", "FastAPI", "Streamlit"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/AI_Interviewer_System",
        },
      ],
      images: [
        { label: "Interview Interface", src: "/img/ui/a1.png" },
        { label: "Resume Analysis", src: "/img/ui/ai-interviewer-1.png" },
        { label: "Question Generation", src: "/img/ui/ai-interviewer-2.png" },
        { label: "Feedback Report", src: "/img/ui/ai-interviewer-3.png" },
        { label: "Candidate Profile", src: "/img/ui/ai-interviewer-4.png" },
        { label: "Interview History", src: "/img/ui/ai-interviewer-5.png" },
      ],
    },
    {
      slug: "eye-disease-detection",
      name: "Eye Disease Detection — Computer Vision",
      role: "CV Engineer",
      period: "2024",
      focus:
        "A medical AI system for detection and classification of retinal diseases (cataracts, glaucoma) to provide accessible diagnostic assistance.",
      impact: "Deep Learning · CNN Accuracy · PyTorch · Medical AI",
      achievements: [
        "Designed and trained a Convolutional Neural Network (CNN) achieving high precision in disease classification.",
        "Developed a clinical diagnostic tool utilizing PyTorch for deep learning inference.",
        "Built a user-friendly Flask interface for doctors to upload images and receive automated findings.",
        "Optimized the model to focus on underserved regions where specialized eye care is limited.",
      ],
      stack: ["Python", "PyTorch", "CNN", "OpenCV", "Flask"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/Eye_Disease.Classifiction",
        },
      ],
      images: [{ label: "Detection Interface", src: "/img/ui/eye-disease-1.png" }],
    },
    {
      slug: "therapeutic-chatbot-platform",
      name: "Mental Health Guidance Chatbot",
      role: "ML Engineer",
      period: "2024",
      focus:
        "An AI-powered web application dedicated to mental health prediction and supportive guidance based on user survey data.",
      impact: "Trend Prediction · Machine Learning · Scikit-learn · Flask",
      achievements: [
        "Analyzed mental health survey data using detailed Exploratory Data Analysis (EDA) in Jupyter.",
        "Integrated a prediction model using Scikit-learn to identify mental health trends efficiently.",
        "Developed a supportive guidance interface built on a Flask backend with user-friendly dashboards.",
        "Designed the system to be a modular foundation for further empathetic AI development.",
      ],
      stack: ["Python", "Scikit-learn", "Flask", "Pandas", "Matplotlib", "Seaborn"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/mental-health_ChatBot-using_NLP",
        },
      ],
      images: [
        { label: "Login", src: "/img/ui/7.png" },
        { label: "Chat", src: "/img/ui/8.png" },
      ],
    },
    {
      slug: "ai-character-simulator",
      name: "RAG Personas Chat System",
      role: "AI Developer",
      period: "2024",
      focus:
        "A modular chat application allowing users to interact with custom AI personas enriched by document-based knowledge.",
      impact: "Dynamic Personalities · FAISS Vector DB · context Enrichment · LangChain",
      achievements: [
        "Built a dynamic context enrichment system where personas can be customized with niche data.",
        "Implemented high-performance vector retrieval using FAISS for document indexing.",
        "Developed a scalable backend with FastAPI for real-time persona interactions.",
        "Integrated Google Gemini API for advanced dialogue generation and personality modeling.",
      ],
      stack: ["Python", "FastAPI", "FAISS", "LangChain", "Google Gemini API"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/RAG-Personas-Chat",
        },
      ],
      images: [
        { label: "Character Selection", src: "/img/ui/ai-character-1.jpeg" },
        { label: "Conversation View", src: "/img/ui/ai-character-2.jpeg" },
        { label: "Memory Log", src: "/img/ui/ai-character-3.jpeg" },
        { label: "Personality Settings", src: "/img/ui/ai-character-4.jpeg" },
        { label: "Scenario Builder", src: "/img/ui/ai-character-5.jpeg" },
        { label: "Interaction History", src: "/img/ui/ai-character-6.jpeg" },
        { label: "System Metrics", src: "/img/ui/ai-character-7.jpeg" },
      ],
    },

    {
      slug: "pneumonia-detection",
      name: "Pneumonia Detection — Computer Vision",
      role: "CV/ML Engineer",
      period: "2023",
      focus:
        "An AI diagnostic tool analyzing chest X-ray images to detect pneumonia using deep learning and LSTM network feature sequencing.",
      impact: "LSTM Integration · Deep Learning Diagnostic · Flask Interface · X-Ray Analysis",
      achievements: [
        "Developed a medical classification system for pneumonia using Keras and TensorFlow.",
        "Implemented LSTM network layers to capture complex visual feature sequences in medical scans.",
        "Built a functional web portal using Flask for medical professionals to upload and classify X-rays.",
        "Optimized detection performance through diagnostic feedback loops in the training pipeline.",
      ],
      stack: ["Python", "TensorFlow", "Keras", "LSTM", "OpenCV", "Flask"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/Project-Computervision",
        },
      ],
      images: [
        { label: "Main Interface", src: "/img/ui/pneumonia-1.png" },
        { label: "Prediction Result", src: "/img/ui/pneumonia-2.png" },
      ],
    },
    {
      slug: "flappy-bird-rl",
      name: "Flappy Bird Reinforcement Learning",
      role: "RL Engineer",
      period: "2023",
      focus:
        "A reinforcement learning project where an AI agent masters Flappy Bird through Deep Q-Learning (DQN) in a PyGame environment.",
      impact: "Deep Q-Learning (DQN) · PyGame Simulation · autonomous Agent · Neural Training",
      achievements: [
        "Trained an autonomous agent that masters game mechanics through trial-and-error using DQN.",
        "Developed a custom game simulation environment using PyGame for controlled training.",
        "Implemented visualization tools to monitor learning progress and neural network performance.",
        "Analyzed agent behaviors to optimize reward structures and training convergence.",
      ],
      stack: ["Python", "PyTorch", "PyGame", "DQN", "NumPy", "Matplotlib"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/Flappy_Bird_Reinforcement_Learning",
        },
      ],
      images: [
        {
          label: "Trained Agent Demo",
          src: "/img/ui/flappy_bird_animation.gif",
        },
      ],
    },
    {
      slug: "customer-churn-prediction",
      name: "Customer Churn Prediction App",
      role: "ML Engineer",
      period: "2024",
      focus:
        "An end-to-end machine learning application designed to predict customer churn for telecommunications companies using advanced classification models.",
      impact: "Predictive Analytics · Model Deployment · Data Visualization · Scikit-learn",
      achievements: [
        "Developed a full-stack ML application with a Flask backend and an interactive frontend for real-time predictions.",
        "Performed exhaustive Exploratory Data Analysis (EDA) on telco datasets to identify key churn drivers.",
        "Engineered and optimized a Random Forest classification model with Scikit-learn to achieve high prediction accuracy.",
        "Implemented automated data preprocessing pipelines to handle missing values and feature scaling.",
      ],
      stack: ["Python", "Flask", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/ghreeb1/customer-churn-prediction-app",
        },
      ],
      images: [
        {
          label: "Churn Prediction Interface",
          src: "/assets/Screenshot 2025-12-25 201039.png",
        },
      ],
    },
  ],
  education: {
    degree: "Bachelor's degree in Artificial Intelligence",
    institution: "Menoufia University",
    graduation: "Expected July 2025",
    specialization: "Machine Intelligence · GPA 2.71/4.0 (Good)",
  },
  certifications: [
    {
      name: "AI Summer Training Program",
      issuer: "National Telecommunication Institute (NTI)",
      year: "2022",
      detail: "120 hours across ML, DL, CV, and NLP fundamentals.",
    },
    {
      name: "Odoo ERP Training – AI Integration",
      issuer: "Odoo (2024)",
      detail:
        "Applied AI for ERP automation across finance, sales, and inventory pipelines.",
    },
    {
      name: "Machine Learning for Data Analysis",
      issuer: "National Telecommunication Institute (NTI)",
      year: "2025 (15 Oct - 21 Dec)",
      detail:
        "120 hours (90 hours technical, 30 hours freelance/professional skills) focused on machine learning techniques for data analysis.",
    },
    {
      name: "ITIDA Gigs Program - Round 19",
      issuer: "Information Technology Industry Development Agency (ITIDA)",
      year: "2025",
      detail:
        "Completed a 3-month grant and successfully delivered 10 freelance gigs applying AI and software development skills.",
    },
  ],
  achievements: [
    "Reduced healthcare platform response time by 40% while keeping uptime above 99%.",
    "Achieved 92% accuracy on medical image classification spanning 8 diseases.",
    "Decreased chatbot latency by 67% (6s → 2s) for a better therapeutic experience.",
    "Designed RAG systems handling 50K+ interactions with consistent tone and insights.",
    "Delivered production APIs with secure authentication for 1K+ daily requests.",
  ],
  languages: [
    { name: "English", level: "Advanced · Professional working proficiency" },
    { name: "Arabic", level: "Native" },
  ],
  preferences: [
    "Active open-source contributor and AI competition participant.",
    "Available for remote roles and open to relocation.",
    "Ready for full-time roles starting July 2025.",
  ],
  services: [
    {
      title: "AI Chatbots & LLM Integration",
      description:
        "Developing intelligent conversational agents powered by state-of-the-art LLMs (GPT, Gemini, Llama). We build custom bots that understand context, tone, and specific business logic.",
      icon: "HiChatAlt2",
      image: "/assets/chatbot.png",
    },
    {
      title: "RAG Systems & Knowledge Bases",
      description:
        "Building custom knowledge engines with Retrieval-Augmented Generation. Power your AI with your proprietary data for factual, context-aware, and secure responses.",
      icon: "HiDatabase",
      image: "/assets/RAG.jpg",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Advanced text analysis, sentiment tracking, and automated summarization. Transforming unstructured data into actionable business intelligence.",
      icon: "HiTranslate",
      image: "/assets/nlp.png",
    },
    {
      title: "Computer Vision Applications",
      description:
        "From object detection to medical image analysis. Implementing cutting-edge CV models to automate visual inspections and complex diagnostics.",
      icon: "HiEye",
      image: "/assets/computer-vision-banner.png",
    },
    {
      title: "End-to-End AI Pipelines",
      description:
        "Scalable data-to-production pipelines. Ensuring your models are fast, reliable, and integrated seamlessly with robust backend architectures.",
      icon: "HiSparkles",
      image: "/assets/pipeline.png",
    },
    {
      title: "AI Optimization & MLOps",
      description:
        "Reducing latency and costs while improving accuracy. We fine-tune models and optimize inference for production-grade speed and reliability.",
      icon: "HiTrendingUp",
      image: "/assets/APIs.png",
    },
  ],
};
