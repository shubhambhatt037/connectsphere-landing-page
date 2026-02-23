// App configuration for connecting to ConnectSphere platform
export const APP_CONFIG = {
  // ConnectSphere app URL - change this based on your environment
  APP_URL: process.env.NODE_ENV === 'production' 
    ? 'https://app.connectsphere.shubhambhatt.me' // Updated with your custom domain
    : 'http://localhost:3000', // Development URL
  
  // Landing page URL
  LANDING_URL: process.env.NODE_ENV === 'production'
    ? 'https://connectsphere.shubhambhatt.me' // Replace with your actual landing page URL
    : 'http://localhost:5173', // Development URL (Vite default)
};