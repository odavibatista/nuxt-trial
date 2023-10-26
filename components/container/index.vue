<template>
    <section class="bg-zinc-50 flex flex-col px-8 lg:px-16 pt-20 pb-20">
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
