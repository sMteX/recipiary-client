<template lang="pug">
    div(class="text-white text-lg")
        p Hlavní kategorie
        ul(class="ml-2")
            AddCategoryTreeItem(v-for="category in localCategories"
                                :key="category.id"
                                :category="category"
                                :toggleCollapsed="toggleCollapsed")
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
                return { ...category, collapsed: true, children };
            }
            return { ...category, collapsed: true };
        },
        toggleCollapsed(category) {
            // to avoid mutating props in AddCategoryTreeItem
            // we only pass reference to this function and trigger/mutate it here (where it's data)
            category.collapsed = !category.collapsed;
        }
    }
}
</script>

<style>

</style>
