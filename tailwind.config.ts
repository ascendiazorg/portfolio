import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ── Colors ───────────────────────────────────────────── */
      colors: {
        cream: {
          DEFAULT: '#FAF5EE',
          alt:     '#F3EDE3',
          card:    '#FFFDF9',
        },
        crimson: {
          DEFAULT: '#8B1A1A',
          light:   '#B22222',
          dark:    '#5C0A0A',
          muted:   'rgba(139,26,26,0.10)',
        },
        charcoal: {
          DEFAULT: '#1a1a1a',
          muted:   '#6B6560',
        },
        border: {
          DEFAULT: '#E2D9CE',
          strong:  '#C4B8AB',
        },
      },

      /* ── Typography ───────────────────────────────────────── */
      fontFamily: {
        serif: [
          'Playfair Display',
          'Georgia',
          '"Times New Roman"',
          'serif',
        ],
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },

      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },

      /* ── Spacing ──────────────────────────────────────────── */
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '34':  '8.5rem',
        '88':  '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },

      /* ── Border Radius ────────────────────────────────────── */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      /* ── Box Shadow ───────────────────────────────────────── */
      boxShadow: {
        'card':    '0 2px 20px rgba(139, 26, 26, 0.06)',
        'card-lg': '0 8px 40px rgba(139, 26, 26, 0.10)',
        'glow':    '0 0 40px rgba(139, 26, 26, 0.18)',
        'glow-sm': '0 0 16px rgba(139, 26, 26, 0.14)',
        'inner-sm':'inset 0 1px 3px rgba(26, 26, 26, 0.08)',
        'editorial':'0 4px 32px rgba(26, 26, 26, 0.10)',
      },

      /* ── Max Width ────────────────────────────────────────── */
      maxWidth: {
        '8xl':  '88rem',
        '9xl':  '96rem',
        'prose-sm': '55ch',
        'prose-md': '68ch',
        'prose-lg': '80ch',
      },

      /* ── Z-Index ──────────────────────────────────────────── */
      zIndex: {
        '60':   '60',
        '70':   '70',
        '80':   '80',
        '90':   '90',
        '100':  '100',
        'cursor': '9999',
      },

      /* ── Keyframes ────────────────────────────────────────── */
      keyframes: {
        /* Fade */
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%':   { opacity: '1' },
          '100%': { opacity: '0' },
        },

        /* Slide Up (primary entrance) */
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        /* Slide Down */
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        /* Slide in from the left */
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        /* Slide in from the right */
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        /* Gentle float */
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },

        /* Slow organic float with subtle rotation */
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-8px) rotate(1deg)' },
          '66%':      { transform: 'translateY(4px) rotate(-1deg)' },
        },

        /* Scale in with spring */
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },

        /* Rotate entrance */
        rotateIn: {
          '0%':   { opacity: '0', transform: 'rotate(-8deg) scale(0.92)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },

        /* Glowing pulse */
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 26, 26, 0.10)' },
          '50%':      { boxShadow: '0 0 50px rgba(139, 26, 26, 0.28)' },
        },

        /* Shimmer (for loading states / decorative text) */
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },

        /* Horizontal marquee (infinite scroll) */
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },

        /* Draw underline / rule */
        drawLine: {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left center' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left center' },
        },

        /* Bounce subtle */
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },

        /* Wiggle (for interactive elements) */
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%':      { transform: 'rotate(2deg)' },
        },

        /* Number count up effect (opacity only; JS handles numbers) */
        countUp: {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        /* Accordion open */
        accordionOpen: {
          '0%':   { height: '0', opacity: '0' },
          '100%': { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },

        /* Accordion close */
        accordionClose: {
          '0%':   { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          '100%': { height: '0', opacity: '0' },
        },
      },

      /* ── Animations ───────────────────────────────────────── */
      animation: {
        /* Entrances */
        'fade-in':       'fadeIn 600ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-fast':  'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-slow':  'fadeIn 900ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-out':      'fadeOut 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-up':      'slideUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-up-fast': 'slideUp 400ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-down':    'slideDown 600ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-left':    'slideLeft 600ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-right':   'slideRight 600ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'scale-in':      'scaleIn 500ms cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'rotate-in':     'rotateIn 600ms cubic-bezier(0.22, 1, 0.36, 1) both',

        /* Continuous */
        'float':         'float 4s ease-in-out infinite',
        'float-slow':    'floatSlow 7s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 1s infinite',
        'pulse-glow':    'pulseGlow 2.5s ease-in-out infinite',
        'shimmer':       'shimmer 3.5s linear infinite',
        'marquee':       'marquee 24s linear infinite',
        'marquee-fast':  'marquee 14s linear infinite',
        'draw-line':     'drawLine 600ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'bounce-soft':   'bounceSoft 2s ease-in-out infinite',
        'wiggle':        'wiggle 0.3s ease-in-out',

        /* UI */
        'count-up':        'countUp 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'accordion-open':  'accordionOpen 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'accordion-close': 'accordionClose 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      },

      /* ── Background Image ─────────────────────────────────── */
      backgroundImage: {
        'dots':         'radial-gradient(circle, #E2D9CE 1px, transparent 1px)',
        'grid':         'linear-gradient(#E2D9CE 1px, transparent 1px), linear-gradient(90deg, #E2D9CE 1px, transparent 1px)',
        'gradient-r':   'linear-gradient(135deg, #8B1A1A 0%, #B22222 50%, #D4501A 100%)',
        'gradient-r-v': 'linear-gradient(to bottom, #8B1A1A 0%, #5C0A0A 100%)',
        'gradient-cream':'linear-gradient(to bottom, #FAF5EE 0%, #F3EDE3 100%)',
        'noise':        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },

      /* ── Background Size ──────────────────────────────────── */
      backgroundSize: {
        'dots': '24px 24px',
        'grid': '40px 40px',
      },

      /* ── Transition Timing Function ───────────────────────── */
      transitionTimingFunction: {
        'spring':    'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'snappy':    'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      /* ── Transition Duration ──────────────────────────────── */
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
      },

      /* ── Letter Spacing ───────────────────────────────────── */
      letterSpacing: {
        'editorial': '0.14em',
        'display':   '-0.03em',
      },

      /* ── Line Height ──────────────────────────────────────── */
      lineHeight: {
        'display': '1.08',
        'heading': '1.18',
        'editorial': '1.65',
      },
    },
  },
  plugins: [],
}

export default config
