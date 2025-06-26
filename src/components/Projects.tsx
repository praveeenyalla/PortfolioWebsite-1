import React from 'react';
import { ExternalLink, Github, Calendar, Tag, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
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
      codeUrl: "#",
      status: "Completed",
      date: "2023"
    },
    {
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
      codeUrl: "#",
      status: "Completed",
      date: "2023"
    },
    {
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
      codeUrl: "#",
      status: "In Progress",
      date: "2023"
    },
    {
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
      codeUrl: "#",
      status: "Completed",
      date: "2022"
    },
    {
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
      demoUrl: "#",
      codeUrl: "#",
      status: "Completed",
      date: "2022"
    },
    {
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
      demoUrl: "#",
      codeUrl: "#",
      status: "Completed",
      date: "2022"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            modern frameworks, and solving real-world problems through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                  } transition-colors duration-300`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{project.title}</h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-300">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center transition-colors duration-300">
                    <Tag className="w-4 h-4 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Key Features</h4>
                  <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1 transition-colors duration-300">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex-1 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">Project Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">25+</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 transition-colors duration-300">15+</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Technologies Used</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 transition-colors duration-300">100%</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2 transition-colors duration-300">50k+</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Lines of Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;