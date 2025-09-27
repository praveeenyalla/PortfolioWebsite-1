import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Clock, CheckCircle, AlertCircle, Linkedin, Github, Globe, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, we'll just show success message
      // In a real implementation, you would send this to your backend API
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your message! I will get back to you within 24-48 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "nagapraveenyalla@gmail.com",
      link: "mailto:nagapraveenyalla@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8328377820",
      link: "tel:+918328377820",
      description: "Available during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Hyderabad, India",
      link: "#",
      description: "Open to remote opportunities"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      value: "yallanagapraveen.info",
      link: "https://yallanagapraveen.info",
      description: "Portfolio & latest projects"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/yalla-nagapraveen-chowdhury-18a7b5351",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/praveeenyalla",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:nagapraveenyalla@gmail.com",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  const availability = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Available for Opportunities",
      description: "Actively seeking AI Engineer, ML Engineer, and Data Scientist positions"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Response Time",
      description: "I typically respond within 24-48 hours"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Meeting Availability",
      description: "Available for calls and interviews Monday-Friday, 9 AM - 6 PM IST"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            I'm always interested in new opportunities, collaborations, and interesting projects. 
            Whether you have a question, want to discuss a potential role, or just want to say hello, 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-300">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Availability & Response
              </h3>
              <div className="space-y-4">
                {availability.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 transition-colors duration-300">
                    <div className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900 dark:text-green-300 transition-colors duration-300">{item.title}</h4>
                      <p className="text-green-700 dark:text-green-400 text-sm transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.color} text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 transition-colors duration-300">
                Follow me on social media for updates on my latest projects and professional journey.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Send Me a Message
              </h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start space-x-3 transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-green-800 dark:text-green-300 text-sm transition-colors duration-300">{submitMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start space-x-3 transition-colors duration-300">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800 dark:text-red-300 text-sm transition-colors duration-300">{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-colors duration-300"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:bg-blue-400 dark:disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:transform-none shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600 transition-colors duration-300">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center transition-colors duration-300">
                  Prefer email? Reach me directly at{' '}
                  <a
                    href="mailto:nagapraveenyalla@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    nagapraveenyalla@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 text-white transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-lg text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto transition-colors duration-300">
              I'm excited about opportunities to contribute my AI engineering expertise, machine learning skills, 
              and innovative problem-solving abilities to your team. Let's discuss how I can help drive your projects forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:nagapraveenyalla@gmail.com?subject=Job Opportunity - AI Engineer Position"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Discuss Opportunities
              </a>
              <a
                href="/Praveen_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center"
              >
                <User className="w-5 h-5 mr-2" />
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;