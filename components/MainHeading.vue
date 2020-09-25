<template lang="pug">
    div(class="w-auto inline-block px-4 py-2 border-b-2 border-orange-500")
        h1(class="font-sans text-white font-bold text-4xl tracking-wide")
            slot Heading
</template>

<script>
export default {
    name: 'MainHeading'
}
</script>

<style>
</style>
