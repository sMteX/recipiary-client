<template lang="pug">
    li(v-if="category.children.length > 0" class="pt-1")
        div(class="flex justify-start")
            font-awesome-icon(:icon="icon" size="lg" @click="toggleCollapsed(category)" class="cursor-pointer mr-2 text-orange-400")
            div(@click="handleSelect(category)"
                class="cursor-pointer flex-grow hover:text-orange-400"
                :class="{ 'text-orange-400': category.selected }")
                | {{ category.name }}
                font-awesome-icon(icon="check" class="ml-2 text-orange-400" v-if="category.selected")
        ul(class="ml-5 transition-all duration-150 ease-in-out" :class="{ collapsed: this.category.collapsed }")
            AddCategoryTreeItem(v-for="child in category.children"
                                :key="child.id"
                                :category="child"
                                :toggleCollapsed="toggleCollapsed"
                                :handleSelect="handleSelect")
    li(v-else
        @click="handleSelect(category)"
        class="pt-1 cursor-pointer hover:text-orange-400"
        :class="{ 'text-orange-400': category.selected }")
        font-awesome-icon(icon="square" size="xs" class="mr-2 text-orange-400")
        | {{ category.name }}
        font-awesome-icon(icon="check" class="ml-2 text-orange-400" v-if="category.selected")
</template>

<script>
export default {
    name: 'AddCategoryTreeItem',
    props: {
        category: Object,
        toggleCollapsed: Function,
        handleSelect: Function,
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
    transform-origin: top;
    transform: scaleY(1);
}
.collapsed {
    max-height: 0;
    transform: scaleY(0)
}
</style>
