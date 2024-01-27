<script setup>
definePageMeta({
    title: "Daniels' - About"
})

useHead({
    title: "Daniels' - Sobre",
    meta: [{ name: "Daniels' - Sobre", content: "Conheça mais sobre a Daniels'!" }]
})

const styles = {
    container: 'py-48 gap-20',
    section: 'flex flex-col md:flex-row justify-between items-center gap-5',
    div: 'flex flex-col gap-3 lg:gap-5',
    h1: 'text-3xl md:text-2xl lg:text-4xl font-ms text-red-600 font-bold',
    p: 'text-sm md:text-sm lg:text-xl font-pp',
    img: 'md:w-[49%] w-[100%]'
}
</script>

<template>
    <div>
        <Header />
        <Container :class="styles.container">
            <section :class="styles.section">
                <div :class="styles.div">
                    <h1 :class="styles.h1">Quem somos nós?</h1>
                    <p :class="styles.p">
                        Daniels' Steaks é uma companhia de açougues espalhada por várias cidades brasileiras. Nós trabalhamos com cortes de carne de alta qualidade, vendendo-os a preços baixos para que mais pessoas possam provar o melhor gastando menos.
                    </p>
                    <p :class="styles.p">
                        Nós promovemos investimentos na cultura pecuarista através do aprimoramento da genética dos animais, visando desenvolver métodos de criação capazes de reduzir os custos do produtor e do consumidor final, fazendo com que todos saiam ganhando.
                    </p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1588347818036-558601350947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="steak"
                    :class="styles.img"
                />
            </section>
            <section :class="styles.section">
                <img
                    src="https://images.unsplash.com/photo-1601284703470-0afd2fcf7ccc?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="steak"
                    :class="styles.img"
                />
                <div :class="styles.div">
                    <h1 :class="styles.h1">Nosso início</h1>
                    <p :class="styles.p">
                        Iniciamos com uma pequena cooperativa de produtores no interior do estado de Minas Gerais em 1988 que adquiriu posse de outra cooperativa no Sul do país. Após alguns anos, alguns de nossos familiares ingressaram no estudo da genética animal e veterinária, o que permitiu que nós melhorássemos a escolha de nossos animais e a qualidade de nossos produtos.
                    </p>
                    <p :class="styles.p">
                        Com esse progresso, começamos a desenvolver métodos de criação que permitissem que nossos animais fossem criados com mais saúde e menos custos, o que nos permitiu vender nossos produtos a preços mais baixos.
                    </p>
                </div>
            </section>
            <section :class="styles.section">
                <div :class="styles.div">
                    <h1 :class="styles.h1">A Daniels' hoje</h1>
                    <p :class="styles.p">
                        Com nossa expansão, começamos a investir para a abertura de açougues franqueados para vender os produtos das marcas a qual somos associados. Com mais de 10 lojas espalhadas pelo país e 20 matadouros, estamos sempre buscando novos horizontes!
                    </p>
                    <p :class="styles.p">
                        Contamos também com a Daniels' Labs, um laboratório de pesquisa e desenvolvimento de novos produtos e métodos de criação de animais. Nós também investimos em projetos de preservação ambiental e de desenvolvimento sustentável, visando sempre o bem-estar de nossos animais e de nossos clientes.
                    </p>
                </div>
                <img
                    src="https://plus.unsplash.com/premium_photo-1664301634899-94f507e7f8c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
