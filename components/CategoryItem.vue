<template lang="pug">
    //wrapper
    div(class="w-48 h-40")
        //pic
        div(class="h-32 bg-local bg-cover rounded rounded-b-none"
            :style="imageStyle")
        //text
        div(class="bg-orange-700 rounded rounded-t-none text-white p-2 font-sans font-bold tracking-wide")
            | {{ title }}
</template>

<script>
export default {
    name: "CategoryItem",
    props: {
        file: String, // to be concatenated with "../assets/img/categories/"
        title: String
    },
    computed: {
        imageStyle() {
            // because Webpack/vue-loader has to resolve the path during the build - works out of the box in CSS, not in JS
            if (!this.file) {
                return;
            }

            try {
                const image = require(`../assets/img/categories/${this.file}`);
                return {
                    backgroundImage: `url("${image}")`
                }
            } catch(e) {}
        }
    }
}
</script>

<style>
</style>
