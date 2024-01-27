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
    h1: "text-center text-red-600 text-2xl md:text-4xl font-ms font-bold",
    p: 'text-center text-gray-900 text-md md:text-lg font-pp leading-5 pt-2 '
}

</script>

<template>
    <div>
        <Header />
        <Container>
            <h1 :class="styles.h1">Nossas Lojas</h1>
            <p :class="styles.p">Busque a loja mais próxima de você!</p>
            <StoresList />
        </Container>
        <Footer />
    </div>
</template>
