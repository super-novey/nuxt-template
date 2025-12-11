<script setup lang="ts">
import type { MediaType } from '~/types'
import { QUERY_LIST } from '~/constants/lists'

/* ---------- PAGE META ---------- */

definePageMeta({
    key: route => route.fullPath,
    validate: ({ params }) => {
        return ['movie', 'tv'].includes(params.type as MediaType)
    },
})

/* ---------- ROUTE ---------- */

const route = useRoute()
const type = computed(() => (route.params.type as MediaType) || 'movie')

/* ---------- HEAD ---------- */

useHead({
    title: computed(() => (type.value === 'movie' ? 'Movies' : 'TV Shows')),
})

/* ---------- QUERIES ---------- */

const queries = computed(() => QUERY_LIST[type.value as MediaType])

/* ---------- ASYNC WRAPPER (SAFEST NUXT 4 PATTERN) ---------- */

const AsyncWrapper = defineComponent({
    name: 'AsyncWrapper',

    setup(_, { slots }) {
        const { data: item } = useAsyncData(
            () => `hero-item-${type.value}`,
            async () => {
                const q = queries.value?.[0]?.query
                if (!q)
                    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

                const list = await listMedia(type.value, q, 1)
                const id = list?.results?.[0]?.id
                if (!id) return null

                return await getMedia(type.value, id)
            }
        )

        return () => slots.default?.({ item: item.value })
    }
})
</script>

<template>
    <div>
        <!-- HERO WRAPPER -->
        <AsyncWrapper>
            <template #default="{ item }">
                <NuxtLink v-if="item" :to="`/${type}/${item.id}`">
                    <MediaHero :item="item" />
                </NuxtLink>

                <!-- Optional loading state -->
                <div v-else class="flex justify-center py-10 text-gray-400">
                    Loading…
                </div>
            </template>
        </AsyncWrapper>

        <!-- CAROUSELS -->
        <CarouselAutoQuery v-for="query in queries" :key="query.type + query.query" :query="query" />

        <TheFooter />
    </div>
</template>