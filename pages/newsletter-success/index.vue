<script setup>
definePageMeta({
    title: "Daniels' - Sucesso!"
})

useHead({
    title: "Sucesso!",
    meta: [{ name: 'Newsletter assinada com sucesso!', content: "Newsletter da Daniels' assinada com sucesso!" }]
})

const styles = {
    container:
        'bg-yellow-200 flex flex-col items-center align-center justify-center h-screen gap-8 sm:gap-4 px-12 sm:px-32 md:px-56 lg:px-72 text-center py-0 md:py-8',
    h1: 'font-ms text-2xl ms:text-4xl md:text-3xl lg:text-4xl font-bold text-red-600',
    logo: 'w-52 md:w-96',
    p: 'font-pp text-md md:text-sm lg:text-lg px-2 md:px-12',
    button: 'bg-red-600 px-12 py-2 mt-8 md:px-8 md:py-4 border-none rounded-md text-white font-bold font-ms hover:brightness-90 transition-all duration-300 ease-in-out'
}
</script>

<template>
    <Container :class="styles.container">
        <h1 :class="styles.h1">Oh yeah! Agora você é um de nós!</h1>
        <img src="/header/brand.png" alt="Daniel's logo" :class="styles.logo" />
        <p :class="styles.p">
            É um prazer ter você a bordo conosco! Nós te enviaremos as nossas melhores ofertas para seu email. Fique ligado!
        </p>
        <RouterLink to="/">
            <button :class="styles.button">Voltar</button>
        </RouterLink>
    </Container>
</template>
