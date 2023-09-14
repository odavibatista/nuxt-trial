<script setup>
    definePageMeta({
        title: 'Featured'
    })

    useHead({
        title: 'Featured',
        meta:   [
            { name: 'Featured', content: 'Featured stuff'}
        ]
    })

</script>
<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
