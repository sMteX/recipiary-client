<template lang="pug">
    div(class="h-full")
        input(type="text" placeholder="Vyhledat recepty" class="h-full w-3/4 rounded-lg rounded-r-none text-lg px-3")
        button(class="h-full bg-orange-500 py-2 px-4 text-white font-bold tracking-wide w-1/4 rounded-lg rounded-l-none text-lg")
            font-awesome-icon(icon="search" class="mr-4")
            | Hledat
</template>

<script>
export default {
    name: "MainSearchBar"
}
</script>

<style scoped>

</style>
