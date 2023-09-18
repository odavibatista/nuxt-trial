<script setup>
    definePageMeta({
        title: "Daniels' - Products"
    })

    useHead({
        title: "Daniels' - Products",
        meta:   [
            { name: "Daniels' - Products", content: "Our company's steak stores, addresses and contacts!"}
        ]
    })

</script>


<template>
    <div>
        <Header/>
        <Container>
            <stores_list />
        </Container>
        <Footer/>
    </div>
</template>
