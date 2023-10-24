<script setup>
definePageMeta({
    title: "Daniels' - Home"
})

useHead({
    title: "Daniels' - Home",
    meta: [{ name: 'Daniels - Homepage', content: "Our steak stores' homepage" }]
})

const styles = {
    h1: 'text-4xl text-red-900 font-bold font-ms',
    sub: 'text-lg text-gray-900 font-pp leading-3 pt-4'
}

const carousel = [
    {
        url: '/header/brand.png',
        alt: 'Daniels Brand'
    },
    {
        url: '/header/brand.png',
        alt: 'Daniels Brand'
    },
    {
        url: '/header/brand.png',
        alt: 'Daniels Brand'
    }
]
</script>
<template>
    <div>
        <Header />
        <Container v-bind="carousel">
            <div>
                <h1 :class="styles.h1">The best steaks, with the best prices.</h1>
                <article :class="styles.sub">
                    Daniels' comes handy on barbecue supplies and quality grade meat.
                </article>
            </div>
            <div>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img
                                :src="carousel[0].url"
                                class="d-block w-100"
                                :alt="carousel[0].alt"
                            />
                        </div>
                        <div class="carousel-item" v-for="(link, index) in carousel.slice(1)">
                            <img :src="link.url" class="d-block w-100" :alt="link.alt" />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </Container>
        <Footer />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap');
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
