/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        },
    },
  },
  plugins: [],
}

