<script setup>
definePageMeta({
    title: "Daniels' - About"
})

useHead({
    title: "Daniels' - About",
    meta: [{ name: "Daniels' - About", content: "Know more about Daniels' butchery shop!" }]
})

const styles = {
    section: 'flex flex-row gap-14',
    div: 'flex flex-col gap-5',
    h1: 'text-4xl font-ms text-red-800 font-bold',
    p: 'text-xl font-pp',
    img: 'w-[530px] '
}
</script>

<template>
    <div>
        <Header />
        <Container>
            <section :class="styles.section">
                <div :class="styles.div">
                    <h1 :class="styles.h1">About Us</h1>
                    <p :class="styles.p">
                        Daniels' Steaks is a line of butchery shops spread around some cities in
                        many states of Brazil. We work with quality grade steaks, and sell it at
                        affordable prices, so even more people can taste the best steaks with less
                        money.
                    </p>
                    <p :class="styles.p">
                        We promote steak culture and invest on cattle breeding methods in order to
                        make the meat affordable to more people. This way, we're able to reduce the
                        price of meat, and make more people taste quality beef.
                    </p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1588347818036-558601350947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="steak"
                    :class="styles.img"
                />
            </section>
        </Container>
        <Footer />
    </div>
</template>

<style scoped>
img {
    border-radius: 10px;
}
</style>
