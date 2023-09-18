<script setup>
    definePageMeta({
        title: "Daniels' - Featured"
    })

    useHead({
        title: "Daniels' - Featured",
        meta:   [
            { name: "Daniels' - Featured", content: 'Featured stuff'}
        ]
    })

</script>


<template>
    <div>
        <Header/>
        <Container>
            <route_tester />
        </Container>
        <Footer/>
    </div>
</template>
