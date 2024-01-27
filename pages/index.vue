<script setup>
import pingService from '@/services/pingService'
definePageMeta({
    title: "Daniels' - Home"
})

useHead({
    title: "Daniels' - Home",
    meta: [{ name: 'Daniels - Homepage', content: "Homepage da Daniels' Steaks, a melhor linha de açougues à sua disposição." }]
})

const styles = {
    h1: 'text-2xl lg:text-4xl text-red-600 font-bold font-ms',
    sub: 'text-md lg:text-lg text-gray-900 font-pp leading-5 pt-4',
    divs: {
        carousel: 'flex flex-col lg:flex-row align-center justify-between pt-8 w-full gap-4',
        deal_title:
            'font-ms uppercase text-2xl text-zinc-100 font-bold bg-zinc-900 text-center py-2',
        deal_img: 'w-full',
        deal_div: 'flex flex-col justify-center items-center text-center gap-2 font-ms',
        h6: 'text-2xl text-zinc-900 font-medium uppercase font-medium',
        button: 'bg-red-600 py-2 px-4 text-white font-pp font-medium uppercase text-lg hover:bg-red-800 transition duration-300 ease-in-out',
        offer: 'flex flex-col w-full md:w-96'
    },
    carousel: 'lg:w-[55%] w-full'
}

const carousel = [
    {
        url: '/home/slide-1.avif',
        alt: 'slide 1'
    },
    {
        url: '/home/slide-2.avif',
        alt: 'slide 2'
    },
    {
        url: '/home/slide-3.avif',
        alt: 'slide 3'
    },
    {
        url: '/home/slide-4.avif',
        alt: 'slide 4'
    }
]
</script>
<template>
    <div>
        <Header />
        <Container>
            <div class="flex flex-col">
                <h1 :class="styles.h1">As melhores carnes, aos melhores preços.</h1>
                <article :class="styles.sub">
                    Daniels' é prática para lhe fornecer os melhores cortes e melhores itens para o seu churrasco.
                </article>
            </div>

            <div :class="styles.divs.carousel">
                <Carousel :links="carousel" :class="styles.carousel" />
                <div :class="styles.divs.offer">
                    <h3 :class="styles.divs.deal_title">Oferta da semana</h3>
                    <div :class="styles.divs.deal_div">
                        <img
                            src="/home/deal.jpg"
                            alt="deal of the week"
                            :class="styles.divs.deal_img"
                        />
                        <h6 :class="styles.divs.h6">Carré de Vitela</h6>
                        <p :class="styles.divs.p">R$ 39.49</p>
                        <button :class="styles.divs.button">QUERO O MEU</button>
                    </div>
                </div>
            </div>
        </Container>
        <Footer />
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
    background: #fbfbfb;
}

::-webkit-scrollbar-thumb {
    background: #a70000;
    transition: 0.3s;
}
</style>
