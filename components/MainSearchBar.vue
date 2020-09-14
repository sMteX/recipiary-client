<template lang="pug">
    div(class="h-full")
        // inline block so it creates a new relative-absolute context for input-related things
        div(class="relative inline-block h-full w-4/5"
            @focusout="inputBlur"
            @focusin="inputFocus")
            input(ref="input" v-model="inputText" type="text" :placeholder="placeholder" :readonly="ingredientsActive"
                class="h-full w-full rounded-lg rounded-r-none text-lg px-3"
                :class="{'cursor-pointer': ingredientsActive}")
            // recipe results
            div#recipe-results(class="w-full h-auto bg-white absolute rounded-md mt-1 shadow" v-if="!ingredientsActive" v-show="showResult")
                // actually link to existing recipes
                div(v-if="recipeSearchResults.length === 0"
                    class="italic text-gray-600 p-2") Nebyly nalezeny žádné recepty.
                template(v-else)
                    div(v-for="recipe in recipeSearchResults"
                        :key="recipe.id"
                        class="result-base result-recipe refocus-input")
                        nuxt-link(:to="{ name: 'recipe-id', params: { id: recipe.id } }") {{ recipe.name }}
            // ingredient results
            div#ingredient-results(class="w-full h-auto bg-white absolute rounded-md mt-1 shadow" v-else v-show="showResult")
                div(class="m-2 rounded-md shadow")
                    input(v-model="ingredientText" type="text" placeholder="Název ingredience"
                        class="refocus-input rounded-md p-2 w-full")
                template(v-if="ingredientText !== ''")
                    div(v-if="ingredientSearchResults.length === 0"
                        class="italic text-gray-600 p-2") Nebyly nalezeny žádné ingredience.
                    template(v-else)
                        div(v-for="ingredient in ingredientSearchResults"
                            :key="ingredient.id"
                            class="result-base result-ingredient refocus-input"
                            :class="{ 'bg-orange-200': ingredient.selected }"
                            @click="toggleIngredient(ingredient.id)")
                            | {{ ingredient.name }}
                            font-awesome-icon(icon="check" class="mr-2 my-auto text-orange-600" v-if="ingredient.selected")
            // selected ingredients in input - overflows when too much of them are present but CBA to think of a fix
            div#selected-ingredients(v-if="ingredientsActive" class="w-full absolute ml-2" @click="$refs.input.focus()")
                div(v-for="ingredient in selectedIngredients" :key="ingredient.id" class="selected-ingredient refocus-input")
                    | {{ ingredient.name }}
                    font-awesome-icon(icon="times" size="sm" class="my-auto ml-2 cursor-pointer" @click="toggleIngredient(ingredient.id)")
        div(class="relative inline-block h-full w-1/5")
            button#search-button(class="h-full w-full bg-orange-500 hover:bg-orange-600 py-2 px-4 text-white font-bold tracking-wide rounded-lg rounded-l-none text-lg")
                font-awesome-icon(icon="search" class="mr-4")
                | Hledat
            // toggle
            div#toggle(class="absolute right-0 top-0 flex justify-between")
                div(class="relative w-10 mr-2")
                    input(type="checkbox" name="toggle" id="toggle-checkbox" v-model="ingredientsActive"
                        class="transition duration-200 ease-in mx-1 shadow absolute w-4 h-4 rounded-full bg-white appearance-none cursor-pointer")
                    label#toggle-label(for="toggle-checkbox" class=" block h-6 rounded-full bg-gray-300 cursor-pointer")
                label(for="toggle-checkbox" class="text-white my-auto") Ingredience

</template>

<script>
import * as _ from 'lodash';

const debug = true;
const debugRecipes = [
    { id: 1, name: 'Kuřecí řízek' },
    { id: 2, name: 'Vepřový řízek' },
    { id: 3, name: 'Řízek naruby' },
    { id: 4, name: 'Svíčková na smetaně' },
    { id: 5, name: 'Těstovinový salát' },
    { id: 6, name: 'Bramborový salát' },
    { id: 7, name: 'Plněné papriky s rajskou omáčkou' },
    { id: 8, name: 'Rajská polévka' },
    { id: 9, name: 'Kuřecí polévka' },
    { id: 10, name: 'Špagety' }
];
const debugIngredients = [
    { id: 1, name: 'sůl' },
    { id: 2, name: 'pepř' },
    { id: 3, name: 'špagety' },
    { id: 4, name: 'kuřecí maso' },
    { id: 5, name: 'paprika' },
    { id: 6, name: 'rajčata' },
    { id: 7, name: 'brambory' },
    { id: 8, name: 'strouhanka' }
];

export default {
    name: "MainSearchBar",
    data() {
        return {
            throttledQuery: _.throttle((value, callback) => {
                let result;
                const lowercase = value.toLowerCase();
                if (debug) {
                    result = debugRecipes
                        .filter(r => r.name.toLowerCase().includes(lowercase))
                        .sort((a, b) => {
                            const nA = a.name.toLowerCase();
                            const nB = b.name.toLowerCase();
                            return (nA < nB) ? -1 : (nA > nB) ? 1 : 0; // alphabetically
                        })
                } else {
                    result = []; // TODO
                    // TODO: also limit to maybe 10 results? or implement scrolling
                }
                callback(result);
            }, 250),
            showResult: false,
            ingredientsActive: false,
            inputText: '',
            ingredientText: '',
            // TODO: maybe pre-load all ingredients? there might not be that many of them..
            ingredients: debugIngredients.map(i => ({ ...i, selected: false })),
            recipeSearchResults: [],
            ingredientSearchResults: []
        }
    },
    computed: {
        selectedIngredients() {
            return this.ingredients.filter(i => i.selected);
        },
        placeholder() {
            if (this.ingredientsActive) {
                if(this.selectedIngredients.length > 0) {
                    return "";
                }
                return "Vyberte ingredience";
            }
            return "Vyhledat recepty";
        }
    },
    watch: {
        inputText(newValue) {
            if (newValue !== '') {
                this.throttledQuery(newValue, results => {
                    this.recipeSearchResults = results;
                    this.showResult = true;
                });
            } else {
                this.showResult = false;
            }
        },
        ingredientText(newValue) {
            if (newValue !== '') {
                // TODO: if not pre-loaded, throttle like recipes
                const lowercase = newValue.toLowerCase();
                const result = this.ingredients
                    .filter(i => i.name.toLowerCase().includes(lowercase))
                    .sort((a, b) => {
                        const nA = a.name.toLowerCase();
                        const nB = b.name.toLowerCase();
                        return (nA < nB) ? -1 : (nA > nB) ? 1 : 0; // alphabetically
                    });
                this.ingredientSearchResults = result;
            } else {
                this.ingredientSearchResults = [];
            }
        },
        ingredientsActive() {
            // reset search
            this.inputText = '';
            this.ingredientText = '';
            this.ingredients.forEach(i => i.selected = false);
        }
    },
    methods: {
        hasClass(element, className) {
            return element.classList && element.classList.contains(className) || false;
        },
        inputBlur(event) {
            // for both recipe results and ingredient result (click inside div)
            const hasRefocusClass = event.explicitOriginalTarget && this.hasClass(event.explicitOriginalTarget, 'refocus-input');
            // for clicking directly on the text in the result (explicit result is text node with refocus-input SOMEWHERE as a parent)
            let hasRefocusParent = false;
            let current = event.explicitOriginalTarget;
            // normally checking for parent.refocus-input would be enough but it breaks on the SVG check-mark
            while (current.parentElement) {
                if (this.hasClass(current.parentElement, 'refocus-input')) {
                    hasRefocusParent = true;
                    break;
                }
                current = current.parentElement;
            }
            // for some reason, clicking the ingredient little input shows in the relatedTarget instead of explicitOriginalTarget
            const hasRefocusRelatedTarget = event.relatedTarget && this.hasClass(event.relatedTarget, 'refocus-input');
            if (hasRefocusClass || hasRefocusParent || hasRefocusRelatedTarget) {
                return;
            }
            // only clicks that are outside the input or the result window should cause the results to go away
            this.showResult = false;
            // also clear ingredient search (which will clear the result array via watcher)
            this.ingredientText = '';
        },
        inputFocus() {
            // focusing while searching for recipes doesn't really do anything
            if (this.ingredientsActive) {
                this.showResult = true;
            }
        },
        toggleIngredient(id) {
            const ingredient = this.ingredients.find(i => i.id === id);
            ingredient.selected = !ingredient.selected;
            this.$refs.input.focus();
        }
    }
}
</script>

<style lang="scss" scoped>
#toggle {
    transform: translate(105%, 50%);

    #toggle-checkbox {
        top: 50%;
        transform: translate(0, -50%);
    }
    #toggle-checkbox:checked {
        @apply bg-orange-400;
        transform: translate(100%, -50%);
    }
}
#search-button {
    min-width: 130px;
}
.result-base {
    @apply cursor-pointer py-1 px-2;

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
.result-recipe a {
    @apply block w-full;
}
.result-ingredient {
    @apply flex justify-between;
}
#selected-ingredients {
    top: 50%;
    transform: translate(0, -50%);
    @apply overflow-hidden;
}
.selected-ingredient {
    @apply mr-1 px-2 py-1 rounded-md border border-orange-500 text-orange-600 flex justify-between inline-block cursor-default;

    &:hover {
        @apply border-orange-700 text-orange-700;
    }
}
</style>
