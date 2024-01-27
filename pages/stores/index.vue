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
})

const styles = {
    h1: 'text-red-600 text-2xl md:text-4xl font-ms font-bold',
    p: 'text-gray-900 text-md md:text-lg font-pp leading-5 pt-8'
}
</script>

<template>
    <div>
        <Header />
        <Container>
            <h1 :class="styles.h1">Our Stores</h1>
            <p>Search for our stores and find the one closest to you!</p>
            <Spinner/>
            <StoresList />
        </Container>
        <Footer />
    </div>
</template>
