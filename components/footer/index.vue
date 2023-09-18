<script setup>
    const styles = {
        footer: 'border-t-2 border-zinc-200 bg-zinc-100 flex flex-col font-ms text-red-800 text-sm md:text-start text-center px-16 py-12 items-center',
        p: 'pt-4 pb-2 font-bold',
        brand: "w-32"
    }
</script>

<template>
    <footer :class="styles.footer">
        <img src="/header/brand.png" alt="brand" :class="styles.brand">
        <p :class="styles.p">
            Daniels' steaks is a fictional butcher house created by odavibatista. None of this site's images belong to me, and are meant uniquely for educational use.
        </p>
        <p :class="styles.p">2023. All Rights Reserved.</p>
    </footer>
</template>