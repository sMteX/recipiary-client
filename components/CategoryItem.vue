<template lang="pug">
    //wrapper
    div(class="w-48 h-40")
        nuxt-link(:to="`/category/${id}`")
            //pic
            div(class="h-32 bg-local bg-cover rounded rounded-b-none"
                :style="imageStyle")
            //text
            div(class="bg-orange-500 hover:bg-orange-600 rounded rounded-t-none text-white p-2 font-sans font-bold tracking-wide")
                | {{ name }}
</template>

<script>
export default {
    name: 'CategoryItem',
    props: {
        id: Number,
        name: String,
        image: String   // to be concatenated with "../assets/img/categories/"
    },
    computed: {
        imageStyle() {
            // because Webpack/vue-loader has to resolve the path during the build - works out of the box in CSS, not in JS
            if (!this.image) {
                return;
            }

            try {
                const image = require(`../assets/img/categories/${this.image}`);
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
