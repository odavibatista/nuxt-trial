<script setup>
    const stores = [
        {
            name: "Mooca - São Paulo",
            phone: "(11) 2511-0219",
            address: "R. da Mooca, 511 São Paulo - SP",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
        {
            name: "Tatuapé - São Paulo",
            phone: "(11) 2395-0994",
            address: "Pç. Silvio Romero 150, São Paulo - SP",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
        {
            name: "Guaianases - São Paulo",
            phone: "(11) 2303-5599",
            address: "Av. Gaspar Filho 98, São Paulo - SP",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
        {
            name: "Barragens - Sorocaba",
            phone: "(11) 3612-6551",
            address: "R. José Filho 3, São Paulo - SP",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
        {
            name: "Torres - Carapicuíba",
            phone: "(14) 2412-9142",
            address: "Av. Cons. Batista 66, Carapicuíba - SP",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
        {
            name: "Centro - P.P.",
            phone: "(15) 3291-5122",
            address: "R. João Melo 241, Presidente Prudente - SP",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
    ]

    const cards_section = "flex flex-row gap-14 flex-wrap justify-around"
</script>

<template>
    <div :class="cards_section">
        <store_card v-for="store of stores" v-bind="store" />
    </div>
</template>