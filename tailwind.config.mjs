/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
    },
    extend: {
      maxWidth: {
        'md': '36.875rem', // 590px
        'lg': '49.6875rem' // 795px
      },
      fontSize: {
        '2xl': '1.625rem', // 26px
      },
      letterSpacing: {
        'tight': '-0.00625rem' // -0.1px
      },
      lineHeight: {
        'loose': '1.625rem'
      },
      typography: ({ theme }) => ({
        abruno: {
          css: {
            '--tw-prose-body': theme('colors.neutral[800]'),
            '--tw-prose-headings': theme('colors.neutral[800]'),
            '--tw-prose-links': theme('colors.blue[500]'),
            '--tw-prose-counters': theme('colors.neutral[400]'),
            '--tw-prose-bullets': theme('colors.neutral[400]'),
            '--tw-prose-quotes': theme('colors.neutral[800]'),
            '--tw-prose-quote-borders': theme('colors.neutral[200]'),
            '--tw-prose-invert-body': theme('colors.neutral[100]'),
            '--tw-prose-invert-headings': theme('colors.neutral[100]'),
            '--tw-prose-invert-links': theme('colors.blue[500]'),
          },
        },
      })
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};
