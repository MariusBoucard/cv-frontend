/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // A beautiful purple
        secondary: '#22D3EE', // A light blue
        accent: '#F59E0B', // A warm yellow
        background: '#F3F4F6', // Light gray for backgrounds
        textPrimary: '#1F2937', // Dark gray for text
        textSecondary: '#6B7280', // Medium gray for secondary text
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter font globally
        heading: ['Poppins', 'sans-serif'], // Use Poppins for headings
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow for cards
        button: '0 2px 4px rgba(0, 0, 0, 0.1)', // Custom shadow for buttons
      },
      borderRadius: {
        xl: '1rem', // Extra large border radius
      },
    },
  },
  plugins: [],
}
