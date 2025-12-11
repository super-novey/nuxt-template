<script setup lang="ts">
import type { MediaType } from '~/types'
import { QUERY_LIST } from '~/constants/lists'

/* ---------- ROUTE + QUERY COMPUTED ---------- */

const route = useRoute()
const type = computed(() => (route.params.type as MediaType) || 'movie')

const queries = computed(() => [
    QUERY_LIST.movie[0],
    QUERY_LIST.tv[0],
])

/* ---------- ASYNC WRAPPER (Nuxt 4 safe) ---------- */

const AsyncWrapper = defineComponent({
    name: 'AsyncWrapper',

    setup(_, { slots }) {
        // We are now inside setup => composables are safe
        const currentType = type
        const currentQueries = queries

        const { data: item } = useAsyncData(
            'hero-item',
            async () => {
                const q = currentQueries.value?.[0]?.query
                if (!q)
                    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

                const list = await listMedia(currentType.value, q, 1)
                const id = list?.results?.[0]?.id
                if (!id) return null

                return await getMedia(currentType.value, id)
            }
        )

        return () => slots.default?.({ item: item.value })
    }
})
</script>

<template>
    <div>
        <!-- HERO ITEM -->
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
        <CarouselAutoQuery v-for="query of queries" :key="query!.type + query!.query" :query="query!" />

        <TheFooter />
    </div>
</template>