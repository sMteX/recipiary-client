<template lang="pug">
    div(class="h-full")
        // inline block so it creates a new relative-absolute context for input-related things
        div(class="relative inline-block h-full w-4/5"
            @focusout="inputBlur"
            @focusin="inputFocus")
            input(ref="input" type="text" :placeholder="placeholder" :readonly="ingredientsActive"
                class="h-full w-full rounded-lg rounded-r-none text-lg px-3")
            // recipe results
            div#recipe-results(class="w-full h-auto bg-white absolute rounded-md mt-1 shadow" v-if="!ingredientsActive" v-show="showResult" @click="$refs.input.focus()")
                // actually link to existing recipes
                div(class="result-item refocus-input") Result 1
                div(class="result-item refocus-input") Result 2
                div(class="result-item refocus-input") Result 3
            // ingredient results
            div#ingredient-results(class="w-full h-auto bg-white absolute rounded-md mt-1 shadow" v-else v-show="showResult")
                div(v-for="ingredient in ingredients"
                    :key="ingredient.id"
                    class="result-item refocus-input"
                    :class="{ 'bg-orange-200': ingredient.selected }"
                    @click="toggleIngredient(ingredient.id)")
                    | {{ ingredient.name }}
                    font-awesome-icon(icon="check" class="mr-2 my-auto text-orange-600" v-if="ingredient.selected")
            // selected ingredients in input - overflows when too much of them are present but CBA to think of a fix
            div#selected-ingredients(v-if="ingredientsActive" class="w-full absolute ml-2")
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
export default {
    name: "MainSearchBar",
    data() {
        return {
            showResult: false,
            ingredientsActive: false,
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
        selectedIngredients() {
            return this.ingredients.filter(i => i.selected);
        },
        placeholder() {
            if (this.ingredientsActive) {
                if(this.selectedIngredients.length > 0) {
                    return "";
                }
                return "Vyhledat podle ingrediencí";
            }
            return "Vyhledat recepty";
        }
    },
    methods: {
        inputBlur(event) {
            // for both recipe results and ingredient result (click inside div)
            const hasResultItemClass =
                event.explicitOriginalTarget &&
                event.explicitOriginalTarget.classList &&
                event.explicitOriginalTarget.classList.contains('refocus-input') || false;
            // for clicking directly on the text in the result (explicit result is text node with refocus-input SOMEWHERE as a parent)
            let hasResultItemParent = false;
            let current = event.explicitOriginalTarget;
            // normally checking for parent.refocus-input would be enough but it breaks on the SVG check-mark
            while (current.parentElement) {
                if (current.parentElement.classList &&
                    current.parentElement.classList.contains('refocus-input')) {
                    hasResultItemParent = true;
                    break;
                }
                current = current.parentElement;
            }
            if (hasResultItemClass || hasResultItemParent) {
                return;
            }
            // only clicks that are outside the input or the result window should cause the results to go away
            this.showResult = false;
        },
        inputFocus() {
            // TODO: probably should show after you type something, but the mechanism for showing/hiding is the same
            this.showResult = true;
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
