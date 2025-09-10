// Project Configuration File
// This file allows you to easily manage project links, videos, and repository URLs

export interface ProjectConfig {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  codeUrl?: string;
  videoUrl?: string; // For future video uploads
  status: 'Completed' | 'In Progress' | 'Planning';
  date: string;
  category: 'featured' | 'recent' | 'ai' | 'web' | 'data';
  isFeatured?: boolean;
  isRecent?: boolean;
}

export const projectsConfig: ProjectConfig[] = [
  // Featured Recent Projects
  {
    id: 'avomind-ai',
    title: "AvoMind AI Platform",
    description: "An intelligent AI-powered platform that leverages advanced machine learning algorithms to provide smart solutions and insights. Built with cutting-edge AI technologies for enhanced user experience and intelligent automation.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["AI/ML", "Python", "Machine Learning", "Neural Networks", "Cloud Computing", "API Integration"],
    features: [
      "Advanced AI algorithms",
      "Intelligent data processing",
      "Real-time insights generation",
      "User-friendly interface",
      "Scalable cloud architecture",
      "API-driven functionality"
    ],
    demoUrl: "https://avomind-1094738376370.us-west1.run.app/",
    codeUrl: "https://github.com/praveeenyalla/avomind-ai",
    videoUrl: "",
    status: "Completed",
    date: "January 2025",
    category: "ai",
    isFeatured: true,
    isRecent: true
  },
  {
    id: 'webdevelop-ai',
    title: "WebDevelop AI Platform",
    description: "An advanced AI-powered web development platform that assists developers in creating modern, responsive websites with intelligent code generation and design suggestions.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "AI/ML", "Node.js", "OpenAI API", "Tailwind CSS"],
    features: [
      "AI-powered code generation",
      "Intelligent design suggestions",
      "Real-time collaboration",
      "Responsive design templates",
      "Code optimization recommendations",
      "Multi-language support"
    ],
    demoUrl: "https://webdevelopeai.netlify.app/",
    codeUrl: "https://github.com/praveeenyalla/webdevelop-ai",
    videoUrl: "",
    status: "Completed",
    date: "January 2025",
    category: "featured",
    isFeatured: true,
    isRecent: true
  },
  {
    id: 'rc-royal-clicks',
    title: "RC Royal Clicks Photography",
    description: "A professional photography portfolio and booking platform featuring stunning galleries, client management, and online booking system for photography services.",
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe"],
    features: [
      "Dynamic photo galleries",
      "Online booking system",
      "Client portal and management",
      "Payment integration",
      "Responsive design",
      "SEO optimized"
    ],
    demoUrl: "https://rcroyalclicksnrt.netlify.app/",
    codeUrl: "https://github.com/praveeenyalla/rc-royal-clicks",
    videoUrl: "",
    status: "Completed",
    date: "January 2025",
    category: "featured",
    isFeatured: true,
    isRecent: true
  },

  // AI Projects
  {
    id: 'ai-chatbot-assistant',
    title: "Intelligent AI Chatbot Assistant",
    description: "A sophisticated AI chatbot powered by natural language processing that provides intelligent responses, learns from conversations, and integrates with multiple platforms.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "TensorFlow", "NLP", "OpenAI GPT", "Flask", "React"],
    features: [
      "Natural language understanding",
      "Context-aware responses",
      "Multi-platform integration",
      "Learning from interactions",
      "Sentiment analysis",
      "Voice recognition support"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/praveeenyalla/ai-chatbot-assistant",
    videoUrl: "",
    status: "Completed",
    date: "December 2024",
    category: "ai",
    isFeatured: false,
    isRecent: true
  },
  {
    id: 'computer-vision-analyzer',
    title: "Computer Vision Image Analyzer",
    description: "An advanced computer vision system that analyzes images for object detection, facial recognition, and scene understanding using deep learning models.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "OpenCV", "PyTorch", "YOLO", "CNN", "Flask API"],
    features: [
      "Real-time object detection",
      "Facial recognition system",
      "Scene classification",
      "Image preprocessing",
      "Batch processing capabilities",
      "REST API integration"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/praveeenyalla/computer-vision-analyzer",
    videoUrl: "",
    status: "Completed",
    date: "November 2024",
    category: "ai",
    isFeatured: false,
    isRecent: true
  },
  {
    id: 'predictive-analytics-engine',
    title: "Predictive Analytics Engine",
    description: "A machine learning-powered analytics engine that provides predictive insights for business decision-making using advanced statistical models and data visualization.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Scikit-learn", "Pandas", "Plotly", "Streamlit", "SQL"],
    features: [
      "Time series forecasting",
      "Customer behavior prediction",
      "Risk assessment models",
      "Interactive dashboards",
      "Automated reporting",
      "Data pipeline automation"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/praveeenyalla/predictive-analytics-engine",
    videoUrl: "",
    status: "In Progress",
    date: "January 2025",
    category: "ai",
    isFeatured: false,
    isRecent: true
  },
  {
    id: 'nlp-sentiment-analyzer',
    title: "NLP Sentiment Analysis Platform",
    description: "A comprehensive natural language processing platform that analyzes sentiment, emotions, and topics from text data across multiple languages and sources.",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "NLTK", "spaCy", "Transformers", "FastAPI", "Docker"],
    features: [
      "Multi-language sentiment analysis",
      "Emotion detection",
      "Topic modeling",
      "Real-time processing",
      "Social media integration",
      "Custom model training"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/praveeenyalla/nlp-sentiment-analyzer",
    videoUrl: "",
    status: "Completed",
    date: "October 2024",
    category: "ai",
    isFeatured: false,
    isRecent: true
  },

  // Previous Projects
  {
    id: 'ecommerce-platform',
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, payment integration, inventory management, and admin dashboard. Built with modern technologies for scalability and performance.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
    features: [
      "User authentication and authorization",
      "Shopping cart and checkout system",
      "Payment gateway integration",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "Real-time order tracking"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/praveeenyalla/stellar-ecommerce-space.git",
    videoUrl: "",
    status: "Completed",
    date: "2023",
    category: "web",
    isFeatured: false,
    isRecent: false
  },
  {
    id: 'task-management',
    title: "Task Management Application",
    description: "A collaborative task management tool with real-time updates, team collaboration features, and advanced project tracking capabilities. Designed for modern teams and remote work.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "PWA"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop task management",
      "Team member assignments",
      "Progress tracking and analytics",
      "Offline functionality",
      "Push notifications"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/praveeenyalla/taskmasterupdate.git",
    videoUrl: "",
    status: "Completed",
    date: "2023",
    category: "web",
    isFeatured: false,
    isRecent: false
  },
  {
    id: 'social-media-dashboard',
    title: "Social Media Dashboard",
    description: "A comprehensive analytics dashboard for social media management with data visualization, automated reporting, and multi-platform integration for businesses and influencers.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Python", "PostgreSQL", "Chart.js", "API Integration"],
    features: [
      "Multi-platform analytics",
      "Custom reporting tools",
      "Automated data collection",
      "Interactive visualizations",
      "Scheduled reports",
      "Export functionality"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/praveeenyalla/influence-flow-analytics-suite.git",
    videoUrl: "",
    status: "Completed",
    date: "2023",
    category: "data",
    isFeatured: false,
    isRecent: false
  },
  {
    id: 'learning-management-system',
    title: "Learning Management System",
    description: "An educational platform with course management, student progress tracking, interactive quizzes, and video streaming capabilities for online education providers.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "AWS S3"],
    features: [
      "Course creation and management",
      "Video streaming platform",
      "Interactive quizzes and assessments",
      "Student progress tracking",
      "Real-time chat system",
      "Certificate generation"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/praveeenyalla/Learning-Management-System.git",
    videoUrl: "",
    status: "Completed",
    date: "2022",
    category: "web",
    isFeatured: false,
    isRecent: false
  }
];

// Helper functions
export const getFeaturedProjects = () => projectsConfig.filter(project => project.isFeatured);
export const getRecentProjects = () => projectsConfig.filter(project => project.isRecent);
export const getProjectsByCategory = (category: string) => projectsConfig.filter(project => project.category === category);
export const getAllProjects = () => projectsConfig;

export default projectsConfig;