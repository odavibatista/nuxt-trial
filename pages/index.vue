<script setup>
    definePageMeta({
        title: "Daniels' | Home"
    })

    useHead({
        title: "Daniels' | Home",
        meta:   [
            { name: 'Daniels', content: "Our steak stores' homepage"}
        ]
    })

    const h1 = "text-4xl text-red-900 font-bold font-ms"
    const sub = "text-lg text-gray-900 font-pp leading-3 pt-4"

</script>
<template>
    <div>
        <Header/>
        <Container>
            <div>
                <h1 :class="h1">The best steaks, for the best prices.</h1>
                <article :class="sub">Daniels' comes handy on barbecue supplies and quality grade meat.</article>
            </div>
        </Container>
        <Footer/>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap');

    * {
        scroll-behavior: smooth;
    }
    
    ::-webkit-scrollbar {
        width: 4px;
    }
    
    ::-webkit-scrollbar-track {
        background: #fbfbfb;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #a70000;
        transition: 0.3s;
    }
</style>