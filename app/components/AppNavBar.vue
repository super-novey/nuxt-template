<template>
    <nav flex="~ row" justify-between items-center px6 py4 bg-warm-grey border-b="1 black/10" w-full>
        <!-- Left: LG Logo -->
        <NuxtLink to="/" flex="~ row" items-center gap3>
            <IconLg />
        </NuxtLink>

        <!-- Right: Icons -->
        <div flex="~ row" items-center gap6>
            <!-- Search Icon -->
            <button aria-label="Search" class="i-ph-magnifying-glass text-black text-2xl" />

            <!-- User Icon -->
            <button aria-label="User Profile" class="i-ph-user text-black text-2xl" />

            <!-- Shopping Cart Icon -->
            <button aria-label="Shopping Cart" class="i-ph-shopping-cart text-black text-2xl" />
        </div>
    </nav>
</template>