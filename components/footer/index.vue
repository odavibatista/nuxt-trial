<script setup>
    const footer = 'border-t-4 border-zinc-400 bg-black font-ms text-gray-300 text-sm md:text-start text-center px-5 pb-5'
    const p = 'pt-4 pb-2'
</script>

<template>
    <footer :class="footer">
        <p :class="p">
            Vue App Test
        </p>
        <p>2023. All Rights Reserved.</p>
    </footer>
</template>