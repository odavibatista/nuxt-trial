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
            imgUrl:"https://images.unsplash.com/photo-1654702328452-b0c0174a1601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            name: "Guaianases - São Paulo",
            phone: "(11) 2303-5599",
            address: "Av. Gaspar Filho 98, São Paulo - SP",
            imgUrl:"https://images.unsplash.com/photo-1662714188515-f466124675ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            name: "Barragens - Sorocaba",
            phone: "(11) 3612-6551",
            address: "R. José Filho 3, São Paulo - SP",
            imgUrl:"https://images.unsplash.com/photo-1615937662601-4724eceda00f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            name: "Torres - Carapicuíba",
            phone: "(14) 2412-9142",
            address: "Av. Cons. Batista 66, Carapicuíba - SP",
            imgUrl:"https://images.unsplash.com/photo-1625643269470-5d3e7b69fa34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            name: "Centro - P.P.",
            phone: "(15) 3291-5122",
            address: "R. João Melo 241, Presidente Prudente - SP",
            imgUrl:"https://plus.unsplash.com/premium_photo-1675354958496-fb4a77d596f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            name: "Marques - R.J.",
            phone: "(21) 4199-2144",
            address: "R. Mauville 1200, Rio de Janeiro - RJ",
            imgUrl:"https://images.unsplash.com/photo-1560166444-217f42fb54f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            name: "Triagem - B.H.",
            phone: "(35) 3100-4100",
            address: "R. Beta 705, Belo Horizonte - MG",
            imgUrl:"https://images.unsplash.com/photo-1551784256-37b7df756265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
        },
        {
            name: "Centro - SV",
            phone: "(75) 8509-5223",
            address: "R. Cársica 544, Salvador - BA",
            imgUrl:"https://images.unsplash.com/photo-1584873069262-427e437b8eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1406&q=80"
        },
        {
            name: "Consolação - FLN",
            phone: "(47) 5133-0312",
            address: "R. da Consolação 90, Florianópolis - SC",
            imgUrl:"https://images.unsplash.com/photo-1622373413263-e3974b4940bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            name: "Estiagem - CWB",
            phone: "(41) 2501-9002",
            address: "R. das Marés 213, Curitiba - PR",
            imgUrl:"https://images.unsplash.com/photo-1561374895-884ab932e966?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
    ]

    
    const styles = {
        h1: "text-red-800 text-4xl font-ms font-bold",
        p: "text-xl font-pp pt-4",
        cards_section : "flex flex-row gap-14 flex-wrap justify-around py-12"
    }
</script>

<template>
    <h1 :class="styles.h1">Our Stores</h1>
    <p :class="styles.p">See our store locations and find the one closest to you!</p>
    <div :class="styles.cards_section">
        <store_card v-for="store of stores" v-bind="store" />
    </div>
</template>