<template lang="pug">
    div
        | Category, id: {{ $route.params.id }}
</template>

<script>
export default {
    name: 'CategoryPage',
    validate({ params }) {
        // TODO: category must exist
        // must be a number
        return /^\d+$/.test(params.id);
    }
}
</script>

<style>

</style>
