<template lang="pug">
    div
        | Recipe, id: {{ $route.params.id }}
</template>

<script>
export default {
    name: 'RecipePage',
    validate({ params }) {
        // TODO: recipe must exist
        // must be a number
        return /^\d+$/.test(params.id);
    }
}
</script>

<style>

</style>
