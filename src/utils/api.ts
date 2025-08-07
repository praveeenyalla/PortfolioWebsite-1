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

export interface UploadProgressCallback {
  (progress: number): void;
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

  async submitContactFormWithFiles(
    formData: FormData, 
    onProgress?: UploadProgressCallback
  ): Promise<ApiResponse> {
    const url = `${API_BASE_URL}/api/contact/with-files`;
    
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      // Track upload progress
      if (onProgress) {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const progress = Math.round((e.loaded / e.total) * 100);
            onProgress(progress);
          }
        });
      }
      
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } catch (error) {
            reject(new Error('Invalid response format'));
          }
        } else {
          try {
            const errorResponse = JSON.parse(xhr.responseText);
            reject(new Error(errorResponse.message || `HTTP error! status: ${xhr.status}`));
          } catch (error) {
            reject(new Error(`HTTP error! status: ${xhr.status}`));
          }
        }
      });
      
      xhr.addEventListener('error', () => {
        reject(new Error('Network error occurred'));
      });
      
      xhr.addEventListener('timeout', () => {
        reject(new Error('Request timeout'));
      });
      
      xhr.open('POST', url);
      xhr.timeout = 30000; // 30 second timeout
      xhr.send(formData);
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