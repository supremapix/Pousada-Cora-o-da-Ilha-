module.exports = {
        content: ['./index.html', './*.tsx', './components/**/*.tsx', './data/**/*.ts'],
        theme: {
          extend: {
            colors: {
              lime: {
                DEFAULT: '#39ff14', // Vibrant lime green from reference
                50: '#f0fff0',
                100: '#d9ffd4',
                200: '#b2ffaa',
                300: '#7aff75',
                400: '#39ff14',
                500: '#22e600',
                600: '#19b300',
                700: '#148a00',
              },
              'deep-navy': {
                DEFAULT: '#0d1b2a', // Deep navy from reference
                50: '#eef2f6',
                900: '#0d1b2a',
                950: '#060d15',
              },
              ocean: {
                DEFAULT: '#2ec5e6',
                400: '#2ec5e6',
                500: '#0ea5cf',
                600: '#0784a8',
              }
            },
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              serif: ['Playfair Display', 'serif'],
            },
            backgroundImage: {
              'tropical-pattern': "url('https://www.transparenttextures.com/patterns/cubes.png')",
            }
          }
        }
      }