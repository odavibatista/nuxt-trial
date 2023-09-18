<script setup>
    const header = "flex flex-row justify-between items-center fixed h-[65px] w-full px-16 bg-zinc-100"
    const div = 'flex gap-14'
    const links = 'text-red-800 font-bold transition-colors hover:text-red-600 text-md font-ms'
    const brand = 'w-[140px] :hover'
</script>

<template>
    <header :class="header">
        <div>
            <RouterLink to="/" :class="links">
                <img src="/header/brand.png" alt="brand" :class="brand">
            </RouterLink>
        </div>
        <div :class="div">
            <RouterLink :class="links" to="/about"> About </RouterLink>
            <RouterLink :class="links" to="/products"> Products </RouterLink>
            <RouterLink :class="links" to="/featured"> Featured </RouterLink>
            <RouterLink :class="links" to="/stores"> Our Stores </RouterLink>
        </div>
    </header>
</template>