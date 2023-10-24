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
</script>

<template>
    <div>
        <Header />
        <Container>
            <stores_list />
        </Container>
        <Footer />
    </div>
</template>
