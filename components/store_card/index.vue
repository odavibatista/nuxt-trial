<script setup>
const store = defineProps(['_id', 'name', 'address', 'phone', 'city', 'state', 'imgUrl'])

const styles = {
    card: 'flex flex-col bg-zinc-100 h-[270px] items-left w-[250px]',
    name: 'text-slate-900 font-ms text-lg font-semibold',
    address: 'pt-1',
    phone: 'font-ms text-sm',
    texts: 'p-2 text-xs font-pp',
    span: 'flex flex-row my-1 items-center',
    icons: 'w-3 h-3 mr-2'
}
</script>

<template>
        <div :class="styles.card">
        <img :src="store.imgUrl" />
        <div :class="styles.texts">
            <h6 :class="styles.name">{{ store.name }}</h6>
            <span :class="styles.span">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    :class="styles.icons"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                    />
                </svg>
                <p :class="styles.address">{{ store.address }}</p>
            </span>
            <span :class="styles.span">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    :class="styles.icons"
                    fill="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                </svg>
                <p :class="styles.phone">{{ store.phone }}</p>
            </span>
        </div>
    </div>
</template>

<style scoped>
div {
    border-radius: 5px;
}

img {
    border-radius: 5px 5px 0px 0px;
}
</style>
