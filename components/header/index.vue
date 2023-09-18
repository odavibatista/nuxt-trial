<script setup>
    const styles = {
        header: "flex flex-row justify-between items-center fixed h-[65px] w-full px-16 bg-zinc-100",
        div: 'flex gap-14',
        links: 'text-red-800 font-bold transition-colors hover:text-red-600 text-md font-ms',
        brand: 'w-[140px] :hover'
    }
</script>

<template>
    <header :class="styles.header">
        <div>
            <RouterLink to="/" :class="styles.links">
                <img src="/header/brand.png" alt="brand" :class="styles.brand">
            </RouterLink>
        </div>
        <div :class="styles.div">
            <RouterLink :class="styles.links" to="/about"> About </RouterLink>
            <RouterLink :class="styles.links" to="/products"> Products </RouterLink>
            <RouterLink :class="styles.links" to="/featured"> Featured </RouterLink>
            <RouterLink :class="styles.links" to="/stores"> Our Stores </RouterLink>
        </div>
    </header>
</template>