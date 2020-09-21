<template lang="pug">
    div(class="dropdown relative py-3 px-0 lg:p-4 cursor-pointer")
        span Kategorie
        ul(class="dropdown-content dropdown-first absolute hidden bg-black bg-opacity-75 text-white w-56")
            li
                a(href="#" class="block") Slightly longer category
            li
                a(href="#" class="block") Cat 2
            li(class="dropdown relative")
                a(href="#" class="flex justify-between")
                    | Cat 3
                    font-awesome-icon(icon="chevron-right")
                ul(class="dropdown-content absolute hidden bg-black bg-opacity-75 w-56")
                    li
                        a(href="#" class="block") Cat 3-1
                    li
                        a(href="#" class="block") Cat 3-2


</template>

<script>
export default {
name: "DropdownTwo"
}
</script>

<style scoped lang="scss">
.dropdown:hover > .dropdown-content {
    display: block;
}
.dropdown-content {
    left: 100%;
    top: 0;

    &.dropdown-first {
        left: 0;
        top: 100%;
    }
}
a {
    @apply p-2;

    &:hover {
        @apply text-orange-500;
    }
}
</style>
