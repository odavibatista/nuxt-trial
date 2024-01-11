<script setup>
import storesService from '@/services/storesService'

const styles = {
    h1: 'text-red-600 text-2xl md:text-4xl font-ms font-bold',
    p: 'text-md md:text-xl font-pp pt-4',
    cards_section: 'flex flex-row gap-14 flex-wrap justify-center md:justify-around py-12'
}

const allStores = await storesService.findAll()

const stores = allStores.data.stores

console.log(stores)
</script>

<template>
    <section>
        <h1 :class="styles.h1">Our Stores</h1>
        <p :class="styles.p">See our store locations and find the one closest to you!</p>
        <div :class="styles.cards_section">
            <StoreCard as="div" v-for="store of stores" v-bind="store" />
        </div>
    </section>
</template>
