// API utility functions for backend communication

const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-backend-domain.com' // Replace with your actual backend URL
  : 'http://localhost:8000';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

class ApiService {
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
    return this.request('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  async getPortfolioSummary(): Promise<ApiResponse> {
    return this.request('/api/portfolio/summary');
  }

  async getProjects(): Promise<ApiResponse> {
    return this.request('/api/projects');
  }

  async getSkills(): Promise<ApiResponse> {
    return this.request('/api/skills');
  }
}

export const apiService = new ApiService();
export default apiService;