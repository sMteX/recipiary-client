<template lang="pug">
    div(class="text-white text-lg")
        div(@click="handleSelect(0)"
            class="hover:text-orange-400 cursor-pointer"
            :class="{ 'text-orange-400': rootSelected }")
            | Hlavní kategorie
            font-awesome-icon(icon="check" class="ml-2 text-orange-400" v-if="rootSelected")
        ul(class="ml-2")
            AddCategoryTreeItem(v-for="category in categories"
                                :key="category.id"
                                :category="category"
                                :toggleCollapsed="toggleCollapsed"
                                :handleSelect="handleSelect")
</template>

<script>
export default {
    name: 'AddCategoryTree',
    props: {
        categories: Array,
        handleSelect: Function,
        toggleCollapsed: Function,
        rootSelected: Boolean
    },
}
</script>

<style>

</style>
