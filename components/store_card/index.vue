<script setup>
    const store = defineProps(['name', 'address', 'phone', 'imgUrl'])
    const card = "flex flex-col bg-zinc-100 h-[270px] items-left w-[250px]"
    const name = "text-slate-900 font-ms text-lg font-semibold"
    const address = "pt-1 h-[35px]"
    const phone = "font-ms text-xs"
    const texts = "p-2 text-xs font-pp"
</script>

<template>
    <div :class="card">
        <img :src="store.imgUrl">
        <div :class="texts">
            <h6 :class="name">{{store.name}}</h6>
            <p :class="address">{{store.address}}</p>
            <p :class="phone">{{store.phone}}</p>
        </div>
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