<template lang="pug">
    li(v-if="category.children.length > 0" class="pt-1")
        div
            font-awesome-icon(:icon="icon" size="lg" @click="toggleCollapsed(category)" class="cursor-pointer mr-2 text-orange-400")
            | {{ category.name }}
        ul(class="ml-5 transition-all duration-150 ease-in-out" :class="{ collapsed: this.category.collapsed }")
            AddCategoryTreeItem(v-for="child in category.children"
                                :key="child.id"
                                :category="child"
                                :toggleCollapsed="toggleCollapsed")
    li(v-else class="pt-1")
        font-awesome-icon(icon="square" size="xs" class="mr-2 text-orange-400")
        | {{ category.name }}
</template>

<script>
export default {
    name: 'AddCategoryTreeItem',
    props: {
        category: Object,
        toggleCollapsed: Function
    },
    computed: {
        icon() {
            return this.category.collapsed ? 'plus-square' : 'minus-square';
        }
    },
}
</script>

<style scoped>
ul {
    max-height: 100vh;
    opacity: 1;
}
.collapsed {
    max-height: 0;
    opacity: 0;
}
</style>
