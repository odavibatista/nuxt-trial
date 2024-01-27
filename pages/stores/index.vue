<script setup>
definePageMeta({
    title: "Daniels' - Our Stores"
})

useHead({
    title: "Daniels' - Our Stores",
    meta: [
        {
            name: "Daniels' | Our Stores",
            content: "Our company's steak stores, addresses and contacts!"
        }
    ]
});

const styles =  {
    cards_section: 'flex flex-row gap-14 flex-wrap justify-center md:justify-around py-12',
    h1: 'text-red-600 text-2xl md:text-4xl font-ms font-bold',
}

import storesService from '@/services/storesService'

const allStores = await storesService.findAll()

</script>

<template>
    <div>
        <Header />
        <Container>
            <h1 :class="styles.h1">Our Stores</h1>
            <div :class="styles.cards_section">
                <StoreCard as="div" v-for="store of allStores.stores" v-bind="store" />
            </div>
        </Container>
        <Footer />
    </div>
</template>
