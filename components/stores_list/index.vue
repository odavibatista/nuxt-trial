<script setup>
    const stores = [
        {
            name: "Teste",
            phone: "Telefone",
            address: "Rua ABC, 123",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/26/de/a2/1c/the-steakhouse-disney.jpg"
        }
    ]
</script>

<template>
    <store_card v-bind="stores[0]" />
</template>