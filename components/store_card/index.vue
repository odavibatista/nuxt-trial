<script setup>
    const store = defineProps(['name', 'address', 'phone', 'imgUrl'])
    const card = "flex flex-col bg-zinc-100 h-[50]"
</script>

<template>
    <div :class="card">
        <img :src="store.imgUrl">
        <h6>{{store.name}}</h6>
        <p>{{store.address}}</p>
        <caption>{{store.phone}}</caption>
    </div>
</template>

<style scoped>
    img {
        width: 100px
    }
</style>