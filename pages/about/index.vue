<script setup>
    definePageMeta({
        title: 'About'
    })

    useHead({
        title: 'About',
        meta:   [
            { name: 'About', content: 'About us'}
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
