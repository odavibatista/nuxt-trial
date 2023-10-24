<script setup>
definePageMeta({
    title: "Daniels' - Featured"
})

useHead({
    title: "Daniels' - Featured",
    meta: [{ name: "Daniels' - Featured", content: "See Daniels' featured topics!" }]
})
</script>

<template>
    <div>
        <Header />
        <Container>
            <route_tester />
        </Container>
        <Footer />
    </div>
</template>
