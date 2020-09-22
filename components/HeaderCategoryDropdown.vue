<template lang="pug">
    div(class="dropdown relative")
        nuxt-link(to="/categories" class="header-link") Kategorie
        // level 1
        ul(class="dropdown-content dropdown-first absolute hidden bg-black bg-opacity-75 text-white w-56")
            HeaderCategoryDropdownItem(v-for="category in categories" :key="category.id" v-bind="category")
</template>

<script>
export default {
    name: "HeaderCategoryDropdown",
    props: {
        categories: Array,
    },
}
</script>

<style lang="scss">
.dropdown:hover > .dropdown-content {
    display: block;
}
.dropdown-content {
    left: 100%;
    top: 0;
    margin-left: 2px;

    &.dropdown-first {
        left: 0;
        top: 100%;
    }
}
</style>
