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
}

export const projectsConfig: ProjectConfig[] = [
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
    demoUrl: "#", // Replace with actual demo URL
    codeUrl: "#", // Replace with actual GitHub repository URL
    videoUrl: "", // Add video URL when available
    status: "Completed",
    date: "2023"
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
    demoUrl: "#", // Replace with actual demo URL
    codeUrl: "#", // Replace with actual GitHub repository URL
    videoUrl: "", // Add video URL when available
    status: "Completed",
    date: "2023"
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
    demoUrl: "#", // Replace with actual demo URL
    codeUrl: "#", // Replace with actual GitHub repository URL
    videoUrl: "", // Add video URL when available
    status: "In Progress",
    date: "2023"
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
    demoUrl: "#", // Replace with actual demo URL
    codeUrl: "#", // Replace with actual GitHub repository URL
    videoUrl: "", // Add video URL when available
    status: "Completed",
    date: "2022"
  },
  {
    id: 'weather-forecast-app',
    title: "Weather Forecast App",
    description: "A modern weather application with location-based forecasts, interactive maps, weather alerts, and detailed meteorological data visualization.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Weather API", "Maps Integration", "Redux"],
    features: [
      "Location-based weather data",
      "7-day weather forecast",
      "Interactive weather maps",
      "Weather alerts and notifications",
      "Historical weather data",
      "Offline data caching"
    ],
    demoUrl: "#", // Replace with actual demo URL
    codeUrl: "#", // Replace with actual GitHub repository URL
    videoUrl: "", // Add video URL when available
    status: "Completed",
    date: "2022"
  },
  {
    id: 'cryptocurrency-tracker',
    title: "Cryptocurrency Tracker",
    description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, market analysis, and trading insights for crypto enthusiasts.",
    image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "CoinGecko API", "Chart.js", "WebSocket", "PWA"],
    features: [
      "Real-time price tracking",
      "Portfolio management",
      "Price alerts and notifications",
      "Market analysis charts",
      "News integration",
      "Watchlist functionality"
    ],
    demoUrl: "#", // Replace with actual demo URL
    codeUrl: "#", // Replace with actual GitHub repository URL
    videoUrl: "", // Add video URL when available
    status: "Completed",
    date: "2022"
  }
];

// Instructions for updating projects:
// 1. To add a new project: Add a new object to the projectsConfig array
// 2. To update demo URLs: Replace the demoUrl value with your live demo link
// 3. To update repository URLs: Replace the codeUrl value with your GitHub repository link
// 4. To add video demos: Add the video URL to the videoUrl field
// 5. The Projects component will automatically use this configuration

export default projectsConfig;