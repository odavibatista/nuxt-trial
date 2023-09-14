<script setup>
    const header = "flex flex-row justify-between items-center fixed h-[50px] w-full px-16"
    const div = 'flex gap-14'
    const links = 'text-red-800 font-bold transition-colors hover:text-red-600 text-md font-pp'
</script>

<template>
    <header :class="header">
        <div>
            <RouterLink to="/" :class="links">
                Home
            </RouterLink>
        </div>
        <div :class="div">
            <RouterLink :class="links" to="/about"> About </RouterLink>
            <RouterLink :class="links" to="/featured"> Featured </RouterLink>
            <RouterLink :class="links" to="/stores"> Our Stores </RouterLink>
        </div>
    </header>
</template>