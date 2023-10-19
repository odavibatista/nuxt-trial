<script setup>
    const styles = {
        header: "flex flex-row justify-between items-center fixed h-[55px] w-full px-16 bg-amber-200",
        div: 'flex gap-14',
        links: 'text-red-600 font-bold transition-colors hover:text-red-800 text-base font-ms',
        brand: 'w-[140px] hover:brightness-50 transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.01]'
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
            <RouterLink :class="styles.links" to="/"> Home </RouterLink>
            <RouterLink :class="styles.links" to="/about"> About </RouterLink>
            <RouterLink :class="styles.links" to="/products"> Products </RouterLink>
            <RouterLink :class="styles.links" to="/featured"> Featured </RouterLink>
            <RouterLink :class="styles.links" to="/stores"> Our Stores </RouterLink>
        </div>
    </header>
</template>