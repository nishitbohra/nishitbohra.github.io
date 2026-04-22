const portfolio = {
  profile: {
    name: "Nishit Bohra M",
    role: "AI/ML Engineer",
    taglines: [
      "AI/ML Engineer",
      "RAG Systems Builder",
      "Deep Learning Researcher",
      "Production AI Engineer",
    ],
    headline: "Building AI Systems That Think at Scale",
    positioning:
      "MTech AI/ML student with production experience at John Deere — built enterprise RAG over 60K+ documents, published Q1 Springer research, and graduated Gold Medalist. I build AI that ships.",
    heroStats: [
      { value: "60K+", label: "Docs in RAG System" },
      { value: "300+", label: "Engineering Hours Saved" },
      { value: "5", label: "Publications & Patents" },
      { value: "9.37", label: "B.Tech CGPA · Gold Medalist" },
    ],
    location: "Pune, Maharashtra, India",
    email: "mnishitbohra@gmail.com",
    phone: "+91 99524 46254",
    linkedin: "https://linkedin.com/in/NishitBohra",
    github: "https://github.com/nishitbohra",
    scholar: "https://scholar.google.com/citations?user=b80OA60AAAAJ&hl=en",
    resumeUrl: "/Nishit_Bohra_M_Resume.pdf",
  },

  education: [
    {
      degree: "M.Tech — Artificial Intelligence & Machine Learning",
      institution: "Symbiosis Institute of Technology",
      location: "Pune, Maharashtra",
      period: "2024 – 2026",
      cgpa: "9.3 / 10",
      courses: ["Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning", "GNNs", "GANs", "MLOps"],
    },
    {
      degree: "B.Tech — Artificial Intelligence & Machine Learning",
      institution: "HICET, Coimbatore",
      location: "Coimbatore",
      period: "2020 – 2024",
      cgpa: "9.37 / 10",
      badge: "Gold Medalist · Rank 1",
      courses: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Cloud Computing", "DBMS"],
    },
  ],

  skills: {
    "Languages": ["Python", "SQL", "R"],
    "ML & AI": ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "GNNs", "Transformers", "Multimodal ML", "RAG"],
    "Frameworks": ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "OpenCV", "Scikit-learn"],
    "Infrastructure": ["Databricks", "FAISS", "OpenSearch", "FastAPI", "Flask", "Streamlit", "Google Cloud"],
    "MLOps": ["Model Deployment", "Experiment Tracking", "REST APIs", "Data Pipelines", "Embedding Generation"],
  },

  skillHighlights: ["PyTorch", "Transformers", "RAG", "LangChain", "FAISS", "Python", "Deep Learning", "Computer Vision"],

  experience: [
    {
      role: "AI/ML Engineer Intern",
      company: "John Deere India Pvt. Ltd",
      location: "Pune, India",
      period: "Jun 2025 – Dec 2025",
      color: "#00D4FF",
      logo: "JD",
      bullets: [
        {
          text: "Engineered an enterprise-scale RAG system over 60K+ technical manuals using FAISS, OpenSearch, and LLM inference",
          metric: "300+ engineering hours saved across 5 teams",
        },
        {
          text: "Applied CLIP-based multimodal ML pipeline for cross-modal text-image retrieval",
          metric: "~30% reduction in information retrieval time",
        },
        {
          text: "Optimized LLM inference workflows via prompt engineering and response caching",
          metric: "20% reduction in API & compute costs",
        },
        {
          text: "Designed Databricks data pipelines for preprocessing, embedding generation, and experiment tracking",
          metric: "100K+ documents processed end-to-end",
        },
      ],
      tech: ["Python", "PyTorch", "LangChain", "OpenAI", "Hugging Face", "FAISS", "OpenSearch", "Databricks"],
    },
    {
      role: "AI Research Intern",
      company: "Biomed Bros",
      location: "India (Remote)",
      period: "Feb 2025 – Jun 2025",
      color: "#6C63FF",
      logo: "BB",
      bullets: [
        {
          text: "Optimized medical image segmentation models through hyperparameter tuning and loss function refinement",
          metric: "+15% IoU on clinical imaging datasets",
        },
        {
          text: "Built end-to-end deep learning pipelines for disease detection and segmentation",
          metric: "10K+ images processed, ~25% less manual annotation",
        },
      ],
      tech: ["Python", "PyTorch", "U-Net", "CNN", "Medical Imaging"],
    },
    {
      role: "Machine Learning Intern",
      company: "Prodigy InfoTech",
      location: "Remote",
      period: "Aug 2023",
      color: "#A78BFA",
      logo: "PI",
      bullets: [
        {
          text: "Boosted classification accuracy using XGBoost, Random Forest, and Neural Networks via feature engineering",
          metric: "+20% classification accuracy",
        },
        {
          text: "Delivered end-to-end ML pipelines — preprocessing, training, evaluation, and performance tuning",
          metric: null,
        },
      ],
      tech: ["Python", "Scikit-learn", "XGBoost", "Random Forest"],
    },
  ],

  projects: [
    {
      id: "rag",
      title: "Enterprise RAG System",
      subtitle: "John Deere · Production · 2025",
      description:
        "Enterprise-scale Retrieval-Augmented Generation system over 60K+ technical manuals, enabling low-latency semantic search across John Deere's engineering knowledge base with multimodal CLIP extension.",
      problem:
        "Engineers spent hours manually searching through 60K+ technical PDFs with no unified semantic interface — creating bottlenecks across 5 cross-functional teams.",
      whyItMatters:
        "Information latency in industrial environments directly impacts machine downtime. Semantic retrieval over dense technical docs is a hard AI problem with measurable ROI.",
      architecture:
        "Ingestion → Chunking → HF Embeddings → Dual Index (FAISS dense + OpenSearch sparse) → Hybrid Retrieval → LLM Reranking → Response Generation",
      techStack: ["Python", "PyTorch", "LangChain", "OpenAI", "Hugging Face", "FAISS", "OpenSearch", "Databricks"],
      innovations: [
        "Hybrid dense + sparse retrieval for precision",
        "CLIP multimodal extension for diagram/image search",
        "Response caching for 20% inference cost reduction",
      ],
      metrics: ["300+ engineering hours saved", "60K+ documents indexed", "20% LLM cost reduction", "~30% faster retrieval"],
      color: "#00D4FF",
      icon: "🔍",
      github: null,
      badge: "Production",
      badgeColor: "#00D4FF",
    },
    {
      id: "gangaflow",
      title: "GangaFlow",
      subtitle: "River Pollution Detection · IEEE 2025",
      description:
        "Real-time multi-model deep learning pipeline combining YOLOv8 detection and U-Net segmentation for spatial classification of river pollution from drone aerial imagery.",
      problem:
        "Manual Ganga river monitoring is expensive and inconsistent. Drone surveys generate terabytes of imagery with zero automated analysis pipeline.",
      whyItMatters:
        "Automated environmental monitoring at river scale enables continuous surveillance, replacing costly manual sampling with drone-based AI.",
      architecture:
        "Drone Imagery → Preprocessing → YOLOv8 Detection → U-Net Segmentation → Spatial Severity Classification → Report Generation",
      techStack: ["Python", "YOLOv8", "U-Net", "AlexNet", "OpenCV", "Computer Vision"],
      innovations: [
        "Unified detect-then-segment pipeline",
        "Spatial severity classification across pollution classes",
        "Multi-class real-time categorization from aerial view",
      ],
      metrics: [">90% detection accuracy", "~20% better localization precision", "IEEE ICoICC 2025 published"],
      color: "#10B981",
      icon: "🌊",
      github: "https://github.com/nishitbohra/GangaFlow-A-Multi-Model-Deep-Learning-Framework-for-Real-Time-River-Pollution-Detection-and-Analysis",
      badge: "IEEE Published",
      badgeColor: "#10B981",
    },
    {
      id: "graphkan",
      title: "Heterogeneous Graph-KAN",
      subtitle: "Wind Power Forecasting · Q1 Springer 2026",
      description:
        "Spatio-temporal forecasting model combining Heterogeneous Graph Neural Networks with Kolmogorov-Arnold Networks for multi-horizon wind power prediction across 200+ turbines.",
      problem:
        "Wind forecasting across turbine farms requires modeling complex spatial dependencies — wake effects, proximity correlations — that standard time-series models ignore entirely.",
      whyItMatters:
        "Accurate wind power forecasting directly impacts grid stability and renewable energy integration. Better models reduce reliance on fossil fuel backup generation.",
      architecture:
        "Sensor Data → Heterogeneous Graph Construction (wake, proximity, correlation edges) → GNN Spatial Encoding → KAN Temporal Modeling → Multi-horizon Output",
      techStack: ["Python", "PyTorch", "GNNs", "KAN", "Attention Mechanisms", "Time-Series Forecasting"],
      innovations: [
        "Heterogeneous multi-edge graph for turbine relations",
        "KAN for interpretable nonlinear temporal modeling",
        "Wake-effect spatial graph design",
      ],
      metrics: ["200+ turbines modeled", "Outperforms GNN baselines", "Q1 Springer publication (2026)"],
      color: "#6C63FF",
      icon: "⚡",
      github: "https://github.com/nishitbohra/Heterogeneous-Graph-KAN-for-Wind-Farm-Forecasting",
      badge: "Q1 Springer",
      badgeColor: "#6C63FF",
    },
    {
      id: "marathi",
      title: "Marathi Sentiment Analysis",
      subtitle: "Low-Resource NLP · Hybrid XLM-R + CNN",
      description:
        "Hybrid XLM-RoBERTa + CNN model for sentiment classification in Marathi — a morphologically complex low-resource language with 83M speakers.",
      problem:
        "Low-resource Indian languages lack quality sentiment tools. Standard transformers underperform on morphologically rich languages due to subword tokenization mismatch.",
      whyItMatters:
        "Sentiment tools for Indian regional languages unlock social listening, content moderation, and feedback analysis at scale for 800M+ regional language internet users.",
      architecture:
        "Text → XLM-RoBERTa Fine-tuning → CNN Feature Extraction → Feature Fusion → Softmax Sentiment Classification",
      techStack: ["Python", "PyTorch", "Hugging Face", "XLM-RoBERTa", "CNN", "Scikit-learn"],
      innovations: [
        "Hybrid transformer-CNN architecture for morphological richness",
        "Cross-lingual transfer learning from 100 languages",
        "Feature fusion combining contextual and local representations",
      ],
      metrics: [">80% accuracy", "+3–5% F1 over transformer baseline", "60K+ sentence training set"],
      color: "#F59E0B",
      icon: "💬",
      github: "https://github.com/nishitbohra/Marathi-Sentiment-Analysis-Hybrid-XLM-RoBERTa-CNN-Architecture",
      badge: "Research",
      badgeColor: "#F59E0B",
    },
    {
      id: "steel",
      title: "Steel Degradation Detection",
      subtitle: "Industrial CV · Hackathon First Runner-up",
      description:
        "Automated corrosion detection system using classical CV and deep learning for severity classification and automated report generation in steel manufacturing quality control.",
      problem:
        "Manual inspection of mild steel is subjective, slow, and safety-critical. Inspectors miss early-stage corrosion that leads to structural failures.",
      whyItMatters:
        "Steel industry loses billions annually to undetected corrosion. Automated, consistent early detection prevents catastrophic failures and reduces inspection costs.",
      architecture:
        "Image Input → CLAHE Enhancement → SSIM Analysis → Adaptive Thresholding → Morphological Ops → CNN Severity Classification → Streamlit Report",
      techStack: ["Python", "OpenCV", "SSIM", "CLAHE", "Image Processing", "Streamlit"],
      innovations: [
        "Multi-stage classical + DL hybrid pipeline",
        "SSIM-based structural change detection",
        "Automated severity-mapped PDF report generation",
      ],
      metrics: [">90% classification accuracy", "~40% reduction in manual effort", "First Runner-up, Ninja Hack 2K25"],
      color: "#EF4444",
      icon: "🔧",
      github: "https://github.com/nishitbohra/Steel-Structure-Analysis",
      badge: "Award Winner",
      badgeColor: "#EF4444",
    },
  ],

  publications: [
    {
      type: "Journal",
      venue: "Q1 · Springer",
      title: "Heterogeneous Graph Kolmogorov-Arnold Networks for Spatio-Temporal Wind Power Forecasting",
      journal: "Smart Grids and Sustainable Energy, Springer",
      year: "2026",
      link: "https://link.springer.com/article/10.1007/s40866-026-00336-x",
      color: "#6C63FF",
      badge: "Q1 · High Impact",
      badgeBg: "rgba(108,99,255,0.15)",
      badgeText: "#6C63FF",
    },
    {
      type: "Conference",
      venue: "IEEE",
      title: "GangaFlow: A Multi-Model Deep Learning Framework for Real-Time River Pollution Detection Using Drone Imagery",
      journal: "ICoICC 2025, IEEE, pp. 1–6",
      year: "2025",
      link: "https://www.researchgate.net/publication/400104494_GangaFlow_A_Multi-Model_Deep_Learning_Framework_for_Real-Time_River_Pollution_Detection_and_Analysis_Using_Drone_Imagery",
      color: "#00D4FF",
      badge: "IEEE Indexed",
      badgeBg: "rgba(0,212,255,0.15)",
      badgeText: "#00D4FF",
    },
    {
      type: "Book Chapter",
      venue: "Scopus",
      title: "Natural Language Processing, Large Language Models, and Multimodal AI Systems",
      journal: "Wiley-Scrivener, 2025",
      year: "2025",
      link: "#",
      color: "#10B981",
      badge: "Scopus Indexed",
      badgeBg: "rgba(16,185,129,0.15)",
      badgeText: "#10B981",
    },
    {
      type: "Book Chapter",
      venue: "Scopus & WoS",
      title: "Intelligent Horizons: AI and the Evolution to 6G Networks",
      journal: "River Publishers, 2025",
      year: "2025",
      link: "#",
      color: "#F59E0B",
      badge: "Scopus + WoS",
      badgeBg: "rgba(245,158,11,0.15)",
      badgeText: "#F59E0B",
    },
    {
      type: "Patent",
      venue: "Filed · 2024",
      title: "LEARN-UP: An Interactive Game-Based Learning Application",
      journal: "Application No. 202441042008 A",
      year: "2024",
      link: null,
      color: "#A78BFA",
      badge: "Patent Filed",
      badgeBg: "rgba(167,139,250,0.15)",
      badgeText: "#A78BFA",
    },
  ],

  achievements: [
    {
      title: "Gold Medalist",
      desc: "B.Tech AIML · HICET Coimbatore · Rank 1 · CGPA 9.37/10",
      icon: "🥇",
      color: "#F59E0B",
    },
    {
      title: "First Runner-up",
      desc: "The Great Ninja Hack 2K25 · DYPCET Kolhapur",
      icon: "🥈",
      color: "#94A3B8",
    },
    {
      title: "1st Position",
      desc: "Smart India Hackathon (Internal Round) · SIT Pune",
      icon: "🏆",
      color: "#6C63FF",
    },
    {
      title: "First Runner-up",
      desc: "Paper Presentation · NICMAR University, Pune",
      icon: "🎖️",
      color: "#00D4FF",
    },
  ],
}

export default portfolio
