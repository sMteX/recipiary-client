<template lang="pug">
    div
        div(class="w-auto inline-block px-4 pb-2 border-b-2 border-orange-500")
            h1(class="font-sans text-white font-bold text-4xl tracking-wide") Kategorie
        div(class="grid grid-cols-5 gap-8 py-6 px-2")
            // top level categories
            // shorthand for binding all individal properties
            CategoryItem(v-bind="category")
            CategoryItem(v-bind="category")
            CategoryItem(v-bind="category")
            CategoryItem(v-bind="category")
            CategoryItem(v-bind="category")
            CategoryItem(v-bind="category")
</template>

<script>
export default {
    name: "CategoriesPage",
    head() {
        return {
            title: 'Kategorie'
        }
    },
    data() {
        return {
            category: {
                id: 3,
                name: 'Maso',
                image: 'Chicken-Tikka-Masala-Square.jpg'
            }
        }
    }
}
</script>

<style scoped>

</style>
