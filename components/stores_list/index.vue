<script setup>
import storesService from '@/services/storesService'

const stores = await storesService.findAll()

const allStores = await stores._rawValue.stores

const cards_section = 'flex flex-row gap-14 flex-wrap justify-center md:justify-around py-12'
</script>   

<template>
    <div :class="cards_section">
        <LazyStoreCard as="div" v-for="store of allStores" v-bind="store" />
    </div>
</template>