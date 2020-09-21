<template lang="pug">
    div
        div(class="w-auto inline-block px-4 pb-2 border-b-2 border-orange-500")
            h1(class="font-sans text-white font-bold text-4xl tracking-wide") {{ name }}
        div(class="grid grid-cols-5 gap-8 py-6 px-2")
            // sub-categories
            CategoryItem(v-for="category in children" :key="category.id" v-bind="category")
</template>

<script>
export default {
    name: 'CategoryPage',
    validate({ params }) {
        // TODO: category must exist
        // must be a number
        return /^\d+$/.test(params.id);
    },
    head() {
        return {
            title: this.name
        }
    },
    data() {
        return {
            // TODO: fetch from server
            name: 'Maso',
            children: [
                { id: 4, name: 'Kuřecí maso', image: 'Chicken-Tikka-Masala-Square.jpg' },
                { id: 5, name: 'Vepřové maso', image: 'Chicken-Tikka-Masala-Square.jpg' },
                { id: 6, name: 'Hovězí maso', image: 'Chicken-Tikka-Masala-Square.jpg' },
            ]
        }
    }
}
</script>

<style>

</style>
