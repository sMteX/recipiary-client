<template lang="pug">
    div(class="text-white text-lg")
        p Hlavní kategorie
        ul(class="ml-2")
            li
                div
                    font-awesome-icon(icon="minus-square" size="lg")
                    | Maso
                ul(class="ml-5")
                    li
                        font-awesome-icon(icon="square" size="xs")
                        | Drůbeží maso
                    li
                        font-awesome-icon(icon="square" size="xs")
                        | Hovězí maso
                    li
                        font-awesome-icon(icon="square" size="xs")
                        | Vepřové maso
            li
                div
                    font-awesome-icon(icon="minus-square" size="lg")
                    | Sladké jídla
                ul(class="ml-5")
                    li
                        font-awesome-icon(icon="square" size="xs")
                        | Cukroví
                    li
                        font-awesome-icon(icon="square" size="xs")
                        | Moučníky
                    li
                        div
                            font-awesome-icon(icon="minus-square" size="lg")
                            | Dorty
                        ul(class="ml-5")
                            li
                                font-awesome-icon(icon="square" size="xs")
                                | Nepečené
                            li
                                font-awesome-icon(icon="square" size="xs")
                                | Pečené
            li
                font-awesome-icon(icon="square" size="xs")
                | Polévky
            li
                font-awesome-icon(icon="square" size="xs")
                | Studená jídla
            li
                font-awesome-icon(icon="square" size="xs")
                | Saláty
</template>

<script>
export default {
    name: 'AddCategoryTree',
    props: {
        categories: Array,
        selectHandler: Function
    },
    data() {
        return {
            localCategories: this.categories.map(c => this.transformCategory(c))
        }
    },
    methods: {
        transformCategory(category) {
            // basically add a "collapsed" prop to each category in the tree, without needing to add it to the parent categories (only for display)
            if (category.children.length > 0) {
                const children = category.children.map(c => this.transformCategory(c));
                return { ...category, collapsed: false, children };
            }
            return { ...category, collapsed: false };
        }
    }
}
</script>

<style scoped>
li {
    @apply pt-1;
}
svg {
    @apply mr-2 text-orange-400;

}
</style>
