<script setup>
// Import UnoCSS reset styles (Tailwind CSS reset)
import '@unocss/reset/tailwind.css'
// Import custom movies icon for favicon
import moviesIcon from '~/assets/img/movies.webp'

// Configure global head metadata for SEO and social sharing
useHead({
  // Set HTML language attribute
  htmlAttrs: {
    lang: 'en',
  },
  // Set character encoding
  charset: 'utf-8',
  // Default page title
  title: 'Nuxt Movies',
  // Title template: adds "· Nuxt Movies" suffix to all pages except the home page
  titleTemplate: title => (title !== 'Nuxt Movies' ? `${title} · Nuxt Movies` : title),
  // Meta tags for SEO and social media
  meta: [
    { name: 'description', content: 'A TMDB client built with Nuxt Image to show the potential of it ✨' },
    { property: 'og:image', content: 'https://movies.nuxt.space/social-card.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@nuxt_js' },
    { name: 'twitter:creator', content: '@nuxt_js' },
  ],
  // Favicon link
  link: [
    {
      rel: 'icon',
      type: 'image/webp',
      href: moviesIcon,
    },
  ],
})
</script>

<template>
  <!-- Nuxt's built-in loading indicator (shows progress during navigation) -->
  <NuxtLoadingIndicator />

  <!-- Main app container with responsive grid layout -->
  <!-- 
    - Mobile (< lg): Vertical layout (rows) - content on top, navbar at bottom
    - Desktop (>= lg): Horizontal layout (cols) - navbar on left, content on right
    - h-full w-full: Full height and width
    - font-sans: Sans-serif font family
    - of-hidden: Overflow hidden
    - view-transition-app: Enables view transitions for smooth page changes
  -->
  <div h-full w-full font-sans grid="~ lt-lg:rows-[1fr_max-content] lg:cols-[max-content_1fr]" of-hidden
    view-transition-app transition duration-0>

    <!-- Main content area with scrollable container -->
    <!-- 
      - id="app-scroller": Used for scroll management
      - of-x-hidden of-y-auto: Hide horizontal scroll, enable vertical scroll
      - relative: Relative positioning for absolute children
    -->
    <div id="app-scroller" of-x-hidden of-y-auto relative>
      <!-- Nuxt's page router - renders the current route's page component -->
      <NuxtPage />
    </div>

    <!-- Navigation bar component -->
    <!-- lg:order-first: On large screens, place navbar first (left side) -->
    <NavBar lg:order-first />

    <!-- Modal component for iframe content (e.g., video trailers) -->
    <IframeModal></IframeModal>

  </div>
</template>

<style>
/* Global styles applied to root HTML elements */
html,
body,
#__nuxt {
  /* Full viewport height */
  height: 100vh;
  /* Remove default margins and padding */
  margin: 0;
  padding: 0;
  /* Dark background color */
  background: #111;
  /* White text color */
  color: white;
  /* Indicate dark color scheme for browser UI (address bar, etc.) */
  color-scheme: dark;
}
</style>