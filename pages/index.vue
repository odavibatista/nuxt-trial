<script setup>
    definePageMeta({
        title: 'Daniels'
    })

    useHead({
        title: 'Daniels',
        meta:   [
            { name: 'Daniels', content: "Our steak stores' homepage"}
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

<style>
    * {
        scroll-behavior: smooth;
    }
    
    ::-webkit-scrollbar {
        width: 6px;
    }
    
    ::-webkit-scrollbar-track {
        background: #020617;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #7c7c7e;
        transition: 0.3s;
    }
</style>