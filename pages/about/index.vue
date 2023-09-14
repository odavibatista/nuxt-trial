<script setup>
    definePageMeta({
        title: 'About'
    })

    useHead({
        title: 'About',
        meta:   [
            { name: 'About', content: 'About us'}
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
