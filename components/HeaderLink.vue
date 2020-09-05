<template lang="pug">
    li
        a(href="#" class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-purple-600")
            slot
</template>

<script lang="ts">
export default {
    name: "HeaderLink"
}
</script>

<style scoped>

</style>
