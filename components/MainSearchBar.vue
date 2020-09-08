<template lang="pug">
    div(class="h-full")
        // inline block so it creates a new relative-absolute context for input-related things
        div(class="relative inline-block h-full w-4/5 ")
            input(type="text" :placeholder="placeholder" class="h-full w-full rounded-lg rounded-r-none text-lg pl-3 pr-56")
            // toggle
            div#toggle(class="absolute right-0 mr-2")
                div(class="bg-gray-300 text-sm leading-none border-2 border-gray-200 rounded-full inline-flex")
                    button(class="toggle-part" :class="{ 'active-toggle': recipesActive }" @click="selectRecipes")
                        | Recepty
                    button(class="toggle-part" :class="{ 'active-toggle': !recipesActive }" @click="selectIngredients")
                        | Ingredience
            // recipe results
            div#recipe-results(class="w-full h-auto bg-white absolute rounded-md mt-1 shadow" v-if="recipesActive")
                // actually link to existing recipes
                div(class="result-item") Result 1
                div(class="result-item") Result 2
                div(class="result-item") Result 3
            // ingredient results
            div#ingredient-results(class="w-full h-auto bg-white absolute rounded-md mt-1 shadow" v-else)
                div(v-for="ingredient in ingredients"
                    :key="ingredient.id"
                    class="result-item"
                    :class="{ 'bg-orange-200': ingredient.selected }"
                    @click="toggleIngredient(ingredient.id)")
                    | {{ ingredient.name }}
                    font-awesome-icon(icon="check" class="mr-2 my-auto text-orange-600" v-if="ingredient.selected")
            // selected ingredients in input
            div#selected-ingredients(v-if="!recipesActive" class="w-full absolute ml-2")
                div(class="selected-ingredient")
                    | Short
                    font-awesome-icon(icon="times" size="sm" class="my-auto ml-2 cursor-pointer")
                div(class="selected-ingredient")
                    | Slightly longer
                    font-awesome-icon(icon="times" size="sm" class="my-auto ml-2 cursor-pointer")
                div(class="selected-ingredient")
                    | Extra long long long
                    font-awesome-icon(icon="times" size="sm" class="my-auto ml-2 cursor-pointer")
        button#search-button(class="h-full bg-orange-500 hover:bg-orange-600 py-2 px-4 text-white font-bold tracking-wide w-1/5 rounded-lg rounded-l-none text-lg")
            font-awesome-icon(icon="search" class="mr-4")
            | Hledat
</template>

<script>
export default {
    name: "MainSearchBar",
    data() {
        return {
            recipesActive: false,
            // TODO: this should be probably live-retrieved from server if possible
            recipes: [
                'Kuřecí řízek',
                'Vepřový řízek',
                'Řízek naruby',
                'Svíčková na smetaně',
                'Těstovinový salát',
                'Bramborový salát',
                'Plněné papriky s rajskou omáčkou',
                'Rajská polévka',
                'Kuřecí polévka',
                'Špagety'
            ],
            ingredients: [
                { id: 1, selected: false, name: 'sůl' },
                { id: 2, selected: false, name: 'pepř' },
                { id: 3, selected: false, name: 'špagety' },
                { id: 4, selected: false, name: 'kuřecí maso' },
                { id: 5, selected: false, name: 'paprika' },
                { id: 6, selected: false, name: 'rajčata' },
                { id: 7, selected: false, name: 'brambory' },
                { id: 8, selected: false, name: 'strouhanka' }
            ]
        }
    },
    computed: {
        placeholder() {
            if (this.recipesActive) {
                return "Vyhledat recepty";
            }
            if(this.ingredients.filter(i => i.selected).length > 0) {
                return "";
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
        },
        toggleIngredient(id) {
            const ingredient = this.ingredients.find(i => i.id === id);
            ingredient.selected = !ingredient.selected;
        }
    }
}
</script>

<style lang="scss" scoped>
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

    &:focus {
        @apply outline-none text-orange-500;
    }

    &:hover {
        @apply text-orange-500;
    }
}
.result-item {
    @apply cursor-pointer py-1 px-2 flex justify-between;

    &:first-of-type {
        @apply rounded-md rounded-b-none p-2 pb-1;
    }
    &:last-of-type {
        @apply rounded-md rounded-t-none p-2 pt-1;
    }
    &:hover {
        @apply bg-orange-300;
    }
}
#selected-ingredients {
    width: calc(100% - 13rem); // so it ends before the toggle
    top: 50%;
    transform: translate(0, -50%);
    @apply overflow-hidden;
}
.selected-ingredient {
    @apply mr-1 px-2 py-1 rounded-md border border-orange-500 text-orange-600 flex justify-between inline-block;

    &:hover {
        @apply border-orange-700 text-orange-700;
    }
}
</style>
