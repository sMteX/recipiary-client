<template lang="pug">
    div
        MainHeading Všechny recepty
        div(class="grid grid-cols-4 gap-10 py-6 px-2")
            RecipeItem(v-for="recipe in recipes" :key="recipe.id" v-bind="recipe")
</template>

<script>
export default {
    name: "RecipesPage",
    head() {
        return {
            title: 'Recepty'
        }
    },
    data() {
        return {
            recipes: [
                { id: 1, name: 'Chilli con carne', image: 'chilliconcarne.jpg' },
                { id: 2, name: 'Very long recipe name with several words and spaces and whatnot', image: 'chilliconcarne.jpg' },
                { id: 3, name: 'Chilli con carne', image: 'chilliconcarne.jpg' },
                { id: 4, name: 'Chilli con carne', image: 'chilliconcarne.jpg' },
                { id: 5, name: 'Chilli con carne', image: 'chilliconcarne.jpg' },
                { id: 6, name: 'Chilli con carne', image: 'chilliconcarne.jpg' },
                { id: 7, name: 'Chilli con carne', image: 'chilliconcarne.jpg' },
                { id: 8, name: 'Chilli con carne', image: 'chilliconcarne.jpg' },
                { id: 9, name: 'Chilli con carne', image: 'chilliconcarne.jpg' }
            ]
        }
    }
}
</script>

<style scoped>

</style>
