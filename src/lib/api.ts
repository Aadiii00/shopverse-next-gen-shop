// Mock API service - Replace with your actual Express backend URLs

const API_BASE_URL = process.env.VITE_API_URL || "http://localhost:5000/api";

// Auth endpoints
export const authApi = {
  register: async (data: { name: string; email: string; password: string }) => {
    // Replace with: return fetch(`${API_BASE_URL}/auth/register`, {...})
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));
  },
  
  login: async (data: { email: string; password: string }) => {
    // Replace with: return fetch(`${API_BASE_URL}/auth/login`, {...})
    return new Promise((resolve) => setTimeout(() => resolve({ success: true, token: "mock-token" }), 1000));
  },
  
  logout: async () => {
    // Replace with: return fetch(`${API_BASE_URL}/auth/logout`, {...})
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
  }
};

// Products endpoints
export const productsApi = {
  getAll: async (params?: { category?: string; search?: string; sort?: string }) => {
    // Replace with: return fetch(`${API_BASE_URL}/products?${queryString}`)
    return new Promise((resolve) => setTimeout(() => resolve({ products: [] }), 1000));
  },
  
  getById: async (id: string) => {
    // Replace with: return fetch(`${API_BASE_URL}/products/${id}`)
    return new Promise((resolve) => setTimeout(() => resolve({ product: null }), 500));
  },
  
  create: async (data: any) => {
    // Replace with: return fetch(`${API_BASE_URL}/products`, { method: 'POST', ... })
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));
  },
  
  update: async (id: string, data: any) => {
    // Replace with: return fetch(`${API_BASE_URL}/products/${id}`, { method: 'PUT', ... })
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));
  },
  
  delete: async (id: string) => {
    // Replace with: return fetch(`${API_BASE_URL}/products/${id}`, { method: 'DELETE' })
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
  }
};

// Cart endpoints
export const cartApi = {
  get: async () => {
    // Replace with: return fetch(`${API_BASE_URL}/cart`)
    return new Promise((resolve) => setTimeout(() => resolve({ items: [] }), 500));
  },
  
  addItem: async (productId: string, quantity: number) => {
    // Replace with: return fetch(`${API_BASE_URL}/cart`, { method: 'POST', ... })
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
  },
  
  updateItem: async (itemId: string, quantity: number) => {
    // Replace with: return fetch(`${API_BASE_URL}/cart/${itemId}`, { method: 'PUT', ... })
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
  },
  
  removeItem: async (itemId: string) => {
    // Replace with: return fetch(`${API_BASE_URL}/cart/${itemId}`, { method: 'DELETE' })
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
  }
};

// Orders endpoints
export const ordersApi = {
  create: async (orderData: any) => {
    // Replace with: return fetch(`${API_BASE_URL}/orders`, { method: 'POST', ... })
    return new Promise((resolve) => setTimeout(() => resolve({ success: true, orderId: "123" }), 1000));
  },
  
  getByUserId: async (userId: string) => {
    // Replace with: return fetch(`${API_BASE_URL}/orders/${userId}`)
    return new Promise((resolve) => setTimeout(() => resolve({ orders: [] }), 500));
  }
};

// Reviews endpoints
export const reviewsApi = {
  getByProductId: async (productId: string) => {
    // Replace with: return fetch(`${API_BASE_URL}/reviews/${productId}`)
    return new Promise((resolve) => setTimeout(() => resolve({ reviews: [] }), 500));
  },
  
  create: async (productId: string, data: { rating: number; comment: string }) => {
    // Replace with: return fetch(`${API_BASE_URL}/reviews/${productId}`, { method: 'POST', ... })
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));
  }
};
