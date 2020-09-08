<template lang="pug">
    div(class="h-full")
        // inline block so it creates a new relative-absolute context
        div(class="relative inline-block h-full w-4/5 ")
            input(type="text" :placeholder="placeholder" class="h-full w-full rounded-lg rounded-r-none text-lg pl-3 pr-56")
            // toggle
            div#toggle(class="absolute right-0 mr-2")
                div(class="bg-gray-300 text-sm leading-none border-2 border-gray-200 rounded-full inline-flex")
                    button(class="toggle-part" :class="{ 'active-toggle': recipesActive }" @click="selectRecipes")
                        | Recepty
                    button(class="toggle-part" :class="{ 'active-toggle': !recipesActive }" @click="selectIngredients")
                        | Ingredience
        button#search-button(class="h-full bg-orange-500 hover:bg-orange-600 py-2 px-4 text-white font-bold tracking-wide w-1/5 rounded-lg rounded-l-none text-lg")
            font-awesome-icon(icon="search" class="mr-4")
            | Hledat
</template>

<script>
export default {
    name: "MainSearchBar",
    data() {
        return {
            recipesActive: true,
        }
    },
    computed: {
        placeholder() {
            if (this.recipesActive) {
                return "Vyhledat recepty";
            }
            return "Vyhledat podle ingrediencí";
        }
    },
    methods: {
        selectRecipes() {
            this.recipesActive = true;
        },
        selectIngredients() {
            this.recipesActive = false;
        }
    }
}
</script>

<style scoped>
#toggle {
    top: 50%;
    transform: translate(0, -50%);
}
#search-button {
    min-width: 130px;
}
.active-toggle {
    @apply bg-white text-orange-500 rounded-full;
}
.toggle-part {
    @apply inline-flex items-center px-4 py-2;
}
.toggle-part:focus {
    @apply outline-none text-orange-500;
}
.toggle-part:hover {
    @apply text-orange-500;
}
</style>
