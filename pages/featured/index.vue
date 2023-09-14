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
        <h1>
            Hello, World! We're on the {{ $route.name }} section!
        </h1>
    </div>
</template>
