import { createPreset } from 'fumadocs-ui/tailwind-plugin';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
    './node_modules/@repo/design-system/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Switzer', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono],
      },
      borderRadius: {
        '4xl': 'calc(var(--radius) + 1rem)',
        '3xl': 'calc(var(--radius) + 0.75rem)',
        '2xl': 'calc(var(--radius) + 0.5rem)',
        xl: 'calc(var(--radius) + 0.25rem)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  presets: [
    createPreset({
      addGlobalColors: true,
    }),
  ],
};

export default config;
