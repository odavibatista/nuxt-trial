<script setup>
    const header = "flex flex-row justify-between items-center fixed h-[50px] w-full px-5"
    const div = 'flex gap-14'
    const links = 'text-gray-300 font-bold transition-colors hover:text-blue-200 text-sm font-pp'
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
        </div>
    </header>
</template>