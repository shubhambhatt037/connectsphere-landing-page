// App configuration for connecting to ConnectSphere platform
export const APP_CONFIG = {
  // ConnectSphere app URL - change this based on your environment
  APP_URL: process.env.NODE_ENV === 'production' 
    ? 'https://your-connectsphere-app.vercel.app' // Replace with your production URL
    : 'http://localhost:3000', // Development URL
  
  // Landing page URL
  LANDING_URL: process.env.NODE_ENV === 'production'
    ? 'https://your-landing-page.vercel.app' // Replace with your production landing page URL
    : 'http://localhost:5173', // Development URL (Vite default)
};