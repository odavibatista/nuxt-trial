<script setup>
    const footer = 'border-t-2 border-zinc-200 bg-zinc-100 font-ms text-red-800 text-sm md:text-start text-center px-16 py-12'
    const p = 'pt-4 pb-2'
</script>

<template>
    <footer :class="footer">
        <p :class="p">
            Vue App Test
        </p>
        <p :class="p">2023. All Rights Reserved.</p>
    </footer>
</template>