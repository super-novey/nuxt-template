import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetWind,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    // Configure dark mode to use class strategy (matches Nuxt color-mode)
    darkMode: 'class',
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
            'active-red': '#FD312E',
            'heritage-red': '#A50034',
            'warm-grey': '#F0ECE4',
            white: '#FFFFFF',
            black: '#000000',
        },
        fontFamily: {
            sans: ['LGEI Text', 'sans-serif'],
            serif: ['LGEI Headline', 'serif'],
            mono: ['monospace'],
        },
    },
    presets: [
        presetWind(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})