import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { apiService, ContactFormData } from '../utils/api';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await apiService.submitContactForm(formData);
      
      if (response.success) {
        setSubmitStatus('success');
        setStatusMessage(response.message || 'Thank you for your message! I\'ll get back to you within 24-48 hours.');
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(response.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact me directly at nagapraveenyalla@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "nagapraveenyalla@gmail.com",
      description: "Send me an email anytime",
      action: "mailto:nagapraveenyalla@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8328377820",
      description: "Available Mon-Fri, 9AM-6PM",
      action: "tel:+918328377820"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Hyderabad, India",
      description: "Available for remote work",
      action: "#"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Response Time",
      value: "24-48 hours",
      description: "Quick response guaranteed",
      action: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yalla-nagapraveen-chowdhury-18a7b5351",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/praveeenyalla",
      color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      url: "mailto:nagapraveenyalla@gmail.com",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Ready to collaborate on your next project? I'm always open to discussing 
            new opportunities, innovative ideas, and interesting challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
                I'm currently available for new projects and opportunities. Whether you're 
                looking for a dedicated developer, need technical consultation, or want to 
                discuss a potential collaboration, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 block border border-gray-100 dark:border-gray-600"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{info.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{info.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">{info.value}</p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.color} text-white rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 transition-colors duration-300">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-300 transition-colors duration-300">Available for New Projects</h4>
                  <p className="text-green-700 dark:text-green-400 text-sm transition-colors duration-300">Currently accepting new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg border border-gray-100 dark:border-gray-600 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Send Message</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 dark:text-green-300 text-sm">{statusMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-red-800 dark:text-red-300 text-sm">{statusMessage}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your.email@example.com"
                    />
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
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Project inquiry, job opportunity, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center transition-colors duration-300">
                {submitStatus === 'success' 
                  ? "Message sent successfully! I'll respond soon." 
                  : "I'll respond within 24-48 hours. Thank you for reaching out!"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;