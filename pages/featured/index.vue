<script setup>
    definePageMeta({
        title: 'Featured'
    })

    useHead({
        title: 'Featured',
        meta:   [
            { name: 'Featured', content: 'Featured stuff'}
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
