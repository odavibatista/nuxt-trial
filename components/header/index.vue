<script setup>
const styles = {
    header: 'flex flex-col md:flex-row justify-between items-center py-2 md:py-0 gap-2 md:gap-0 fixed h-22 md:h-[55px] w-full px-8 lg:px-16 bg-amber-200 z-1',
    div: 'flex gap-8 md:gap-14 flex-wrap items-center justify-center md:justify-between',
    links: 'text-red-600 font-medium lg:font-bold transition-colors hover:text-red-800 text-sm lg:text-base font-ms',
    brand: 'w-[140px] hover:brightness-50 transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.01]'
}
</script>

<template>
    <header :class="styles.header">
        <div>
            <RouterLink to="/" :class="styles.links">
                <img src="/header/brand.png" alt="brand" :class="styles.brand" />
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
