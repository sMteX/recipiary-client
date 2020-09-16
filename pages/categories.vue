<template lang="pug">
    div
        div(class="w-auto inline-block px-4 pb-2 border-b-2 border-orange-500")
            h1(class="font-sans text-white font-bold text-4xl tracking-wide") Kategorie
        div(class="grid grid-cols-5 gap-8 py-6 px-2")
            // top level categories
            CategoryItem(file="Chicken-Tikka-Masala-Square.jpg" title="Oběd")
            CategoryItem(file="Chicken-Tikka-Masala-Square.jpg" title="Oběd")
            CategoryItem(file="Chicken-Tikka-Masala-Square.jpg" title="Oběd")
            CategoryItem(file="Chicken-Tikka-Masala-Square.jpg" title="Oběd")
            CategoryItem(file="Chicken-Tikka-Masala-Square.jpg" title="Oběd")
            CategoryItem(file="Chicken-Tikka-Masala-Square.jpg" title="Oběd")
</template>

<script>
export default {
    name: "CategoriesPage",
    head() {
        return {
            title: 'Kategorie'
        }
    }
}
</script>

<style scoped>

</style>
