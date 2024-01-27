<script setup>
import storesService from '@/services/storesService'

const allStores = await storesService.findAll()

const cards_section = 'flex flex-row gap-14 flex-wrap justify-center md:justify-around py-12'
</script>

<template>
    <div :class="cards_section">
        <StoreCard as="div" v-for="store of allStores.stores" v-bind="store" />
    </div>
</template>
