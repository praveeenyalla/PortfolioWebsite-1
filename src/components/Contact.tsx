import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare, Clock, CheckCircle, AlertCircle, Paperclip, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const maxSize = 10 * 1024 * 1024; // 10MB limit
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
      'image/gif',
      'text/plain'
    ];

    const validFiles = files.filter(file => {
      if (file.size > maxSize) {
        setSubmitStatus('error');
        setStatusMessage(`File "${file.name}" is too large. Maximum size is 10MB.`);
        return false;
      }
      if (!allowedTypes.includes(file.type)) {
        setSubmitStatus('error');
        setStatusMessage(`File type "${file.type}" is not supported.`);
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setAttachedFiles(prev => [...prev, ...validFiles]);
      setSubmitStatus('idle');
    }
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setStatusMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      
      let attachmentInfo = '';
      if (attachedFiles.length > 0) {
        attachmentInfo = `\n\nFiles to Attach (Please attach these files manually before sending):\n${attachedFiles.map(file => `- ${file.name} (${formatFileSize(file.size)})`).join('\n')}\n\nIMPORTANT: The above files are NOT automatically attached. Please manually attach them to this email before sending.\n`;
      }
      
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}\n\n` +
        attachmentInfo +
        `---\n` +
        `Sent from yallanagapraveen.info portfolio website`
      );
      
      const mailtoUrl = `mailto:nagapraveenyalla@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoUrl;
      
      // Show success message
      setSubmitStatus('success');
      setStatusMessage(
        attachedFiles.length > 0 
          ? `Your email client has been opened with the message. IMPORTANT: Please manually attach the ${attachedFiles.length} selected file${attachedFiles.length > 1 ? 's' : ''} (${attachedFiles.map(f => f.name).join(', ')}) to the email before sending it.`
          : 'Your email client has been opened with the message. Please send the email to complete your inquiry.'
      );
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setAttachedFiles([]);
        setSubmitStatus('idle');
      }, 8000); // Longer delay to give user time to read the instructions
      
    } catch (error) {
      console.error('Error opening email client:', error);
      setSubmitStatus('error');
      setStatusMessage('Unable to open email client. Please copy the message details and send an email manually to nagapraveenyalla@gmail.com. Don\'t forget to attach your files if you selected any.');
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
                looking for a dedicated data scientist or data analyst, need technical consultation, or want to 
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
                
                {/* File Attachment Section */}
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Attach Files (Optional)
                  </label>
                  
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300">
                    <input
                      type="file"
                      id="file-upload"
                      multiple
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center space-y-2"
                    >
                      <Paperclip className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Click to attach files or drag and drop
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        PDF, DOC, DOCX, TXT, JPG, PNG, GIF (Max 10MB each)
                      </span>
                    </label>
                  </div>
                  
                  {/* Display attached files */}
                  {attachedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Attached Files:</h4>
                      {attachedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Paperclip className="w-4 h-4 text-gray-500" />
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-xs">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            disabled={isSubmitting}
                            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 p-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    <strong>File Attachment Note:</strong> When you click "Send Message", your email client will open with the message content. 
                    You'll need to manually attach the files you selected above before sending the email.
                  </p>
                </div>
                
                <button
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Opening Email...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message {attachedFiles.length > 0 && `(${attachedFiles.length} file${attachedFiles.length > 1 ? 's' : ''})`}
                      </>
                    )}
                  </button>
              </form>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  <strong>How it works:</strong> When you click "Send Message", your default email client will open with a pre-filled email. 
                  {attachedFiles.length > 0 
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                <strong>⚠️ File Attachment Limitation:</strong><br/>
                Due to browser security restrictions, files cannot be automatically attached to emails. When your email client opens:
                <br/>1. The message content will be pre-filled
                <br/>2. You'll see a list of files you selected in the message body
                <br/>3. You must manually attach these files before sending
                <br/>4. Send the email to complete your inquiry
                <br/><br/>
                <strong>Alternative:</strong> You can also send your files directly to{' '}
                <a href="mailto:nagapraveenyalla@gmail.com" className="text-yellow-900 dark:text-yellow-200 underline font-medium">
                  nagapraveenyalla@gmail.com
                </a>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center transition-colors duration-300">
                Alternative: Email me directly at{' '}
              Direct contact: Email me at{' '}
                  nagapraveenyalla@gmail.com
                </a>
              </p>
              {' '}or call{' '}
              <a href="tel:+918328377820" className="text-blue-600 dark:text-blue-400 hover:underline">
                +91 8328377820
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
                      Send Message {attachedFiles.length > 0 && `(${attachedFiles.length} file${attachedFiles.length > 1 ? 's' : ''} to attach manually)`}

export default Contact;