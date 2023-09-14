<template>
    <section class="bg-zinc-950 flex flex-col px-5 py-12">
        <slot />
    </section>
</template>

<style scoped>
    section {
        min-height: 100vh;
    }
    
    @media (max-width: 610px) {
        section {
        padding: 130px 0px 0px 0px;
        }
    }
</style>