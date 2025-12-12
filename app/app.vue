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
  <NuxtLoadingIndicator />
  <div h-full w-full font-sans bg-warm-grey grid="~ lt-lg:rows-[1fr_max-content] lg:cols-[max-content_1fr]" of-hidden
    view-transition-app transition duration-0>
    <AppNavBar />
    <div id="app-scroller" of-x-hidden of-y-auto relative>
      <NuxtPage />
    </div>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  color: white;
}
</style>