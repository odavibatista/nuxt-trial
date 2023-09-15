<script setup>
    const stores = [
        {
            name: "Teste",
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
        {
            name: "Teste",
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
        {
            name: "Teste",
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

    const cards_section = "flex flex-row gap-3.5"
</script>

<template>
    <div :class="cards_section">
        <store_card v-for="store of stores" v-bind="store" />
    </div>
</template>