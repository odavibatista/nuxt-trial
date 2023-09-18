<script setup>
    const stores = [
        {
            name: "Mooca - São Paulo",
            phone: "(11) 2511-0219",
            address: "Rua da Mooca, 511",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
        {
            name: "Tatuapé - São Paulo",
            phone: "(11) 2395-0994",
            address: "Praça Silvio Romero, 150",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
        {
            name: "Guaianases - São Paulo",
            phone: "(11) 2303-5599",
            address: "Avenida Gaspar Filho, 98",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
        {
            name: "Barragens - Sorocaba",
            phone: "Telefone",
            address: "Rua ABC, 123",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
        {
            name: "Torres - Carapicuíba",
            phone: "Telefone",
            address: "Rua ABC, 123",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
        {
            name: "Teste",
            phone: "Telefone",
            address: "Rua ABC, 123",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        },
    ]

    const cards_section = "flex flex-row gap-14 flex-wrap justify-between"
</script>

<template>
    <div :class="cards_section">
        <store_card v-for="store of stores" v-bind="store" />
    </div>
</template>