<template lang="pug">
    div
        MainHeading Kategorie
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
