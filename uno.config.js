import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    shortcuts: [
        ['n-link', 'op50 hover:(op100 text-primary) transition'],
        ['n-link-text', 'n-link underline'],
        ['n-tab', 'text-xl tracking-wide uppercase p3 border-b-2 border-transparent op20 transition'],
        ['n-tab-active', 'border-current op100'],
        ['border-base', 'border-gray-400/20'],
    ],
    rules: [
        [/^view-transition-([\w-]+)$/, ([, name]) => ({ 'view-transition-name': name })],
    ],
    theme: {
        colors: {
            primary: '#40c1ad',
            /* 
             * HOW TO CHANGE LIGHT/DARK COLORS:
             * 1. Edit the hex color values below (e.g., '#f3f4f6' → '#your-color')
             * 2. Use in your components: bg-surface-light dark:bg-surface-dark
             * 3. Colors automatically switch based on dark mode class
             */
            surface: {
                light: '#f3f4f6',    // Light mode background - CHANGE THIS
                dark: '#111827',     // Dark mode background - CHANGE THIS
            },
            content: {
                light: '#1f2937',    // Light mode text - CHANGE THIS
                dark: '#f9fafb',     // Dark mode text - CHANGE THIS
            },
            muted: {
                light: '#6b7280',    // Light mode muted text - CHANGE THIS
                dark: '#d1d5db',     // Dark mode muted text - CHANGE THIS
            },
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
        }),
        presetTypography(),
        presetWebFonts({
            fonts: {
                sans: 'DM Sans',
                serif: 'DM Serif Display',
                mono: 'DM Mono',
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})