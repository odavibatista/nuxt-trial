<script setup>
    const store = defineProps(['name', 'address', 'phone', 'imgUrl'])

    const styles = {
        card: "flex flex-col bg-zinc-100 h-[270px] items-left w-[250px]",
        name: "text-slate-900 font-ms text-lg font-semibold",
        address: "pt-1 h-[35px]",
        phone: "font-ms text-xs",
        texts: "p-2 text-xs font-pp"
    }
    
</script>

<template>
    <div :class="styles.card">
        <img :src="store.imgUrl">
        <div :class="styles.texts">
            <h6 :class="styles.name">{{store.name}}</h6>
            <p :class="styles.address">{{store.address}}</p>
            <p :class="styles.phone">{{store.phone}}</p>
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