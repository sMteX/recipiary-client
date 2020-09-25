<template lang="pug">
    div
        MainHeading {{ name }}
        div(class="grid grid-cols-5 gap-8 py-6 px-2")
            // sub-categories
            // kinda relies on not having many subcategories (will produce grid with 5 columns and as many rows as needed)
            CategoryItem(v-for="category in children" :key="category.id" v-bind="category")
        div(class="grid grid-cols-4 gap-10 py-6 px-2 mt-6")
            RecipeItem(v-for="recipe in recipes" :key="recipe.id" v-bind="recipe")
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
            // TODO: fetch all from server
            name: 'Maso',
            children: [
                { id: 4, name: 'Kuřecí maso', image: 'Chicken-Tikka-Masala-Square.jpg' },
                { id: 5, name: 'Vepřové maso', image: 'Chicken-Tikka-Masala-Square.jpg' },
                { id: 6, name: 'Hovězí maso', image: 'Chicken-Tikka-Masala-Square.jpg' },
            ],
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

<style>

</style>
