<script setup>
    const store = defineProps(['name', 'address', 'phone', 'imgUrl'])
    const card = "flex flex-col bg-zinc-100 h-[220px] items-left w-[350px]"
    const name = "text-slate-900 font-ms px-2 text-xl"
</script>

<template>
    <div :class="card">
        <img :src="store.imgUrl">
        <h6 :class="name">{{store.name}}</h6>
        <p>{{store.address}}</p>
        <p>{{store.phone}}</p>
    </div>
</template>

<style scoped>
    div {
        border-radius: 5px;
    }

    img {
        border-radius: 5px 5px 0px 0px
    }
</style>