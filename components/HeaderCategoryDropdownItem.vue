<template lang="pug">
    li(v-if="children.length === 0")
        nuxt-link(:to="`/category/${id}`" class="block p-2 hover:text-orange-500")
            | {{ name }}
    li(v-else class="dropdown relative")
        nuxt-link(:to="`/category/${id}`" class="block p-2 hover:text-orange-500 flex justify-between")
            | {{ name }}
            font-awesome-icon(icon="chevron-right")
        ul(class="dropdown-content absolute hidden bg-black bg-opacity-75 text-white w-56")
            HeaderCategoryDropdownItem(v-for="child in children" :key="child.id" v-bind="child")
</template>

<script>
export default {
    name: "HeaderCategoryDropdownItem",
    props: {
        id: Number,
        name: String,
        children: Array
    }
}
</script>

<style scoped>

</style>
