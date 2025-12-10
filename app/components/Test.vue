<template>
    <div>
        <p>{{ $t('hello') }}</p>
        <button @click="setLocale('vi')">🇻🇳 VI</button>
        <button @click="setLocale('en')">🇺🇸 EN</button>
    </div>
</template>

<script setup>
const { locale, setLocale } = useI18n()
</script>