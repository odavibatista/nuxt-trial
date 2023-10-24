<script setup>
    defineProps(['links'])
</script>

<template>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                    :src="links[0].url"
                    class="d-block w-[100%]"
                    :alt="links[0].alt"
                />
            </div>
            <div class="carousel-item" v-for="(link, index) in links.slice(1)">
                <img :src="link.url" class="d-block  w-[100%]" :alt="link.alt" />
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
</template>