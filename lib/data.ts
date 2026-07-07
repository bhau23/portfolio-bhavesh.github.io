export type Project = {
  idx: string;
  title: string;
  cats: string[];
  desc: string;
  tags: string[];
  img: string;
  metric?: string;
  flag?: string;
  github?: string;
  isPrivate?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    idx: "01",
    title: "Smart Parking & Surveillance",
    cats: ["vision", "ml"],
    desc: "Hybrid CV + ML pipeline for real-time parking occupancy — 7.47% above industry benchmark — plus custom-YOLO human fall detection with live alerting dashboard.",
    tags: ["Python", "YOLOv8", "OpenCV", "Streamlit"],
    img: "/images/smart-parking.png",
    metric: "97.47% ACC / 100% RECALL",
    flag: "FEATURED",
    github: "https://github.com/bhau23/Smart-Parking-Surveillance-AI-Model-",
    featured: true,
  },
  {
    idx: "02",
    title: "Bhavesh AI — Voice Cloner",
    cats: ["genai"],
    desc: "Real-time zero-shot text-to-speech on a 0.5B-parameter Llama backbone — clones any voice from seconds of audio with emotion control, Streamlit UI and Python API.",
    tags: ["Llama 0.5B", "PyTorch", "Transformers", "TTS"],
    img: "/images/voice-cloner.png",
    metric: "<10S ZERO-SHOT CLONE",
    flag: "FEATURED",
    github: "https://github.com/bhau23/voice-cloner",
    featured: true,
  },
  {
    idx: "03",
    title: "Disaster Impact Analyzer",
    cats: ["genai", "ml"],
    desc: "Image classification, speech-to-text severity analysis, U-Net satellite flood segmentation and a Gemini meta-model — unified for government disaster response.",
    tags: ["PyTorch", "TensorFlow", "U-Net", "Gemini API"],
    img: "/images/disaster-analyzer.png",
    metric: "4-MODEL MULTIMODAL",
    flag: "FEATURED",
    github: "https://github.com/bhau23/disaster-impact-analyzer-for-enhance-govt-response",
    featured: true,
  },
  {
    idx: "04",
    title: "Anomaly Detection in Surveillance",
    cats: ["vision", "ml"],
    desc: "Time-Distributed ResNet50 + LSTM pipeline with GAN-based synthetic data augmentation to detect abnormal events in real-time video feeds.",
    tags: ["ResNet50", "LSTM", "GANs", "TensorFlow"],
    img: "/images/anomaly-detection.png",
    metric: "95% ACCURACY",
    flag: "IIST RESEARCH",
    github: "https://github.com/bhau23/anamoly-detection-in-surveillance",
  },
  {
    idx: "05",
    title: "Cybersecurity Threat Classification",
    cats: ["ml"],
    desc: "Benchmarked Random Forest, MLP and SVM for network-intrusion detection on CICIDS2017 with SelectKBest feature selection and full evaluation suite.",
    tags: ["Scikit-learn", "Pandas", "CICIDS2017"],
    img: "/images/cybersecurity.svg",
    metric: "97.72% ACC / 97.57% F1",
    github: "https://github.com/bhau23/Cybersecurity-Threat-Classification-using-machine-learning-technology",
  },
  {
    idx: "06",
    title: "Vision Gesture Control",
    cats: ["vision", "agents"],
    desc: "JARVIS-inspired hands-free computer control — real-time hand tracking drives the cursor while gestures minimize, maximize and launch apps.",
    tags: ["OpenCV", "MediaPipe", "PyAutoGUI"],
    img: "/images/vision-gesture.svg",
    flag: "NEW / 2026",
    github: "https://github.com/bhau23/vision-gesture-control",
  },
  {
    idx: "07",
    title: "AI Travel Planner",
    cats: ["genai", "agents"],
    desc: "Gemini-powered day-by-day itinerary generation from destination, budget and interests — weather integration and interactive Plotly timelines.",
    tags: ["Gemini AI", "Streamlit", "Plotly"],
    img: "/images/ai-travel-planner.svg",
    flag: "DEPLOYED",
    github: "https://github.com/bhau23/ai-travel-planner",
  },
  {
    idx: "08",
    title: "AutoStream Agent",
    cats: ["agents"],
    desc: "AI-powered automation agent for streaming pipelines and intelligent task execution — automated decision-making integrated with workflow tooling.",
    tags: ["Python", "Agentic AI", "Automation"],
    img: "/images/autostream-agent.svg",
    github: "https://github.com/bhau23/autostream-agent",
  },
  {
    idx: "09",
    title: "Object Detection — MobileNet",
    cats: ["vision"],
    desc: "Lightweight MobileNet-backbone detector trained and evaluated on PASCAL VOC 2012 — built for real-time and edge inference.",
    tags: ["MobileNet", "PASCAL VOC", "Keras"],
    img: "/images/object-detection.svg",
    github: "https://github.com/bhau23/objectdetection-",
  },
  {
    idx: "10",
    title: "BeyondChats",
    cats: ["genai"],
    desc: "AI-powered chat analytics platform — intelligent extraction, analytics dashboards and automated response analysis over conversational data.",
    tags: ["Python", "NLP", "Analytics"],
    img: "/images/beyondchats.svg",
    github: "https://github.com/bhau23/beyondchats",
  },
  {
    idx: "11",
    title: "Student Management System",
    cats: ["web"],
    desc: "Full-stack TypeScript application for student records and administrative workflows — modern CRUD architecture on the Next.js ecosystem.",
    tags: ["TypeScript", "Next.js", "Full-Stack"],
    img: "/images/student-management.svg",
    flag: "NEW / 2026",
    github: "https://github.com/bhau23/student-management",
  },
  {
    idx: "12",
    title: "E-Commerce — Nutfarm & Candle Craft",
    cats: ["web"],
    desc: "Production e-commerce websites delivered for real client brands — storefronts, product display and lead-capture flows across multiple release cycles.",
    tags: ["TypeScript", "Next.js", "E-Commerce"],
    img: "/images/ecommerce.svg",
    metric: "IN PRODUCTION",
    flag: "CLIENT WORK",
    isPrivate: true,
  },
  {
    idx: "13",
    title: "AR for Education",
    cats: ["web"],
    desc: "Augmented-reality learning platform overlaying interactive 3D educational content in real-world environments to boost engagement.",
    tags: ["AR", "Unity", "3D"],
    img: "/images/ar-education.svg",
    github: "https://github.com/bhau23/agumented-reality-for-enhancing-education-expreience",
  },
  {
    idx: "14",
    title: "Python Chatbot",
    cats: ["genai"],
    desc: "Conversational chatbot with natural language understanding, context-aware responses and an extensible dialogue architecture.",
    tags: ["Python", "NLP"],
    img: "/images/chatbot.svg",
    github: "https://github.com/bhau23/chatbot",
  },
  {
    idx: "15",
    title: "Student DB Management",
    cats: ["web", "agents"],
    desc: "AI-assisted database system automating data entry, record updates and report generation — with chatbot support for instant assistance.",
    tags: ["Python", "AI Automation", "SQL"],
    img: "/images/student-db.svg",
    github: "https://github.com/bhau23/student-database-management-system",
  },
];

export const filters = [
  { key: "all", label: "ALL" },
  { key: "genai", label: "GENERATIVE AI" },
  { key: "vision", label: "COMPUTER VISION" },
  { key: "agents", label: "AI AGENTS" },
  { key: "ml", label: "MACHINE LEARNING" },
  { key: "web", label: "FULL-STACK" },
];

export const services = [
  {
    idx: "01",
    title: "Generative AI & LLM Systems",
    desc: "Custom chatbots, RAG knowledge systems, LLM fine-tuning and prompt-engineered pipelines — grounded in your data, deployed on your infrastructure.",
    tags: ["RAG", "Fine-Tuning", "LangChain", "Vector DBs"],
  },
  {
    idx: "02",
    title: "Agentic AI & Automation",
    desc: "Multi-agent workflows, intelligent data pipelines and business-process automation — the kind that cut manual workflows by ~60% at Reality AI.",
    tags: ["AI Agents", "Workflows", "Data Pipelines"],
  },
  {
    idx: "03",
    title: "Computer Vision Systems",
    desc: "Object detection, tracking, segmentation, surveillance and video analytics — real-time systems proven at 97.47% production accuracy.",
    tags: ["YOLOv8", "OpenCV", "Segmentation", "Edge AI"],
  },
  {
    idx: "04",
    title: "Voice AI & Multimodal",
    desc: "Voice cloning, zero-shot TTS, speech-to-text pipelines and systems that combine speech, vision and text into one experience.",
    tags: ["TTS", "Voice Cloning", "STT", "Multimodal"],
  },
  {
    idx: "05",
    title: "Full-Stack Websites & Apps",
    desc: "Production-grade websites, e-commerce and web apps in TypeScript / Next.js — delivered end-to-end for real client brands.",
    tags: ["Next.js", "TypeScript", "FastAPI", "E-Commerce"],
  },
  {
    idx: "06",
    title: "AI-Driven Data & Analytics",
    desc: "SEO performance modeling, lead-scoring pipelines, dashboards and decision intelligence — analytics that move conversion and engagement KPIs.",
    tags: ["Lead Scoring", "SEO Modeling", "Dashboards"],
  },
];

export const experience = [
  {
    idx: "01",
    date: "JAN 2026 — PRESENT",
    role: "AI Engineer",
    org: "eQOURSE — Kota, India",
    points: [
      "Design and deploy applied AI solutions, automated data pipelines and intelligent workflows on cloud infrastructure.",
      "Deliver AI-driven analytics for digital growth — SEO performance modeling and lead-scoring pipelines improving conversion KPIs.",
      "Translate business requirements into scalable, production-ready AI services with cross-functional teams.",
    ],
  },
  {
    idx: "02",
    date: "MAY 2025 — NOV 2025",
    role: "Generative AI Engineer (Intern)",
    org: "Reality AI — Gurugram, India (Remote)",
    points: [
      "Built Voice AI and Agentic AI applications using LLMs, multimodal architectures and real-time streaming pipelines.",
      "Engineered end-to-end multimodal media-processing systems, reducing manual content workflows by ~60%.",
      "Optimized LLM inference and prompt orchestration; presented experimental results to leadership.",
    ],
  },
  {
    idx: "03",
    date: "FEB 2024 — JUL 2024",
    role: "Research Intern — Deep Learning",
    org: "Indian Institute of Space Science & Technology (IIST)",
    points: [
      "Developed a GAN-augmented ResNet50 + LSTM pipeline for video anomaly detection — 95% accuracy on benchmarks.",
      "Conducted satellite-imagery analysis with CNNs — owned the full pipeline from preprocessing to evaluation.",
    ],
  },
  {
    idx: "04",
    date: "2022 — 2025",
    role: "Lead Project Coordinator / IEEE Member",
    org: "Programmer's Paradise Coding Club · IEEE, CSVTU",
    points: [
      "Coordinated student projects and organized webinars, events and coding competitions.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C++", "SQL", "JavaScript / TypeScript", "R"],
  },
  {
    title: "Generative AI & LLMs",
    items: [
      "LLM Fine-Tuning", "RAG", "Agentic AI", "LangChain", "LlamaIndex",
      "HF Transformers", "FAISS / Pinecone / ChromaDB", "GANs",
      "Diffusion Models", "Multimodal AI", "TTS",
    ],
  },
  {
    title: "ML / DL & Computer Vision",
    items: [
      "PyTorch", "TensorFlow", "Keras", "Scikit-learn",
      "CNNs / LSTMs / Transformers", "OpenCV", "YOLOv8", "MediaPipe",
      "U-Net Segmentation", "MLOps",
    ],
  },
  {
    title: "Cloud & Deployment",
    items: [
      "AWS (SageMaker / EC2 / S3)", "Docker", "CI/CD", "FastAPI",
      "REST APIs", "Streamlit", "Linux", "Git / GitHub",
    ],
  },
];

export const skillBars = [
  { name: "Python & ML Engineering", level: 10 },
  { name: "Deep Learning (PyTorch / TF)", level: 9 },
  { name: "Generative AI / LLMs / RAG", level: 9 },
  { name: "Computer Vision", level: 9 },
  { name: "Cloud & MLOps", level: 8 },
  { name: "Full-Stack (Next.js / TS)", level: 8 },
];

export const certifications = [
  {
    idx: "01",
    title: "OCI 2025 Certified Generative AI Professional",
    issuer: "ORACLE / 2025",
    desc: "Flagship credential — building, fine-tuning and deploying generative AI solutions on Oracle Cloud Infrastructure.",
  },
  {
    idx: "02",
    title: "Data Analytics on AWS",
    issuer: "AMAZON WEB SERVICES",
    desc: "Cloud-based data processing and analytics — ingestion, transformation and analysis on AWS services.",
    link: "/certificates/aws-data-analytics.pdf",
  },
  {
    idx: "03",
    title: "AI for Investments",
    issuer: "NPTEL / IIT",
    desc: "Machine learning applied to investment strategy and financial analysis — factor models to prediction pipelines.",
  },
  {
    idx: "04",
    title: "High-Performance Scientific Computing",
    issuer: "NPTEL / IIT",
    desc: "Parallel computing, optimization and numerical methods for large-scale scientific workloads.",
  },
  {
    idx: "05",
    title: "Web Development Bootcamp — Backend",
    issuer: "GOOGLE CERTIFICATION / DEVTOWN",
    desc: "Backend engineering with Node.js, Express.js and MongoDB — REST APIs, authentication and database design.",
    link: "/certificates/google-webdev.pdf",
  },
  {
    idx: "06",
    title: "Management Information System",
    issuer: "CERTIFICATION COURSE",
    desc: "Information systems for organizational decision-making — data flow, reporting and BI foundations.",
  },
];

export const achievements = [
  {
    idx: "01",
    title: "Hackathon Winner",
    desc: "Hacksprint Hackathon — OP Jindal University. First place among competing teams.",
  },
  {
    idx: "02",
    title: "I.Mobilothon 4.0 Semifinalist",
    desc: "Volkswagen Group Technology Solutions India — national mobility-tech innovation challenge.",
  },
  {
    idx: "03",
    title: "Leadership",
    desc: "Lead Project Coordinator, Programmer's Paradise Coding Club · IEEE Student Member, CSVTU.",
  },
];

export const socials = [
  { label: "GITHUB", href: "https://github.com/bhau23" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/bhavesh-kanoje-8575b022b/" },
  { label: "TWITTER / X", href: "https://twitter.com/BKanoje68111" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/bhavesh_kanoje?igsh=Z2VydnlrcGloZDY=" },
];

export const contact = {
  email: "bhavesh23official@gmail.com",
  phone: "+91 79872 78313",
  phoneHref: "+917987278313",
  location: "RAIPUR, IN",
  coords: "21.2514°N / 81.6296°E",
  resume: "/images/Bhavesh_Kanoje_Resume.pdf",
};

export const roles = [
  "GENERATIVE AI ENGINEER",
  "COMPUTER VISION SPECIALIST",
  "LLM / AGENTIC AI DEVELOPER",
  "VOICE AI BUILDER",
  "FULL-STACK AI ENGINEER",
];

export const marqueeItems = [
  "GENERATIVE AI", "COMPUTER VISION", "LLM FINE-TUNING", "RAG", "AGENTIC AI",
  "PYTORCH", "TENSORFLOW", "YOLOV8", "OPENCV", "LANGCHAIN", "FASTAPI",
  "AWS", "DOCKER", "NEXT.JS", "TYPESCRIPT",
];
