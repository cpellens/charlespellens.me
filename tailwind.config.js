/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,js,html,svelte}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Josefin Slab"'],
        sans: ['"Open Sans", sans-serif', 'system-ui']
      },
    },
  },
  plugins: [],
}

