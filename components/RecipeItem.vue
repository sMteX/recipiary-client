<template lang="pug">
    //wrapper
    div(class="w-64 h-48")
        nuxt-link(:to="`/recipe/${id}`")
            //pic
            div(class="h-32 bg-local bg-cover rounded rounded-b-none"
                :style="imageStyle")
            //text
            div(class="h-16 bg-orange-500 hover:bg-orange-600 rounded rounded-t-none text-white p-2 font-bold tracking-wide text-center flex items-center justify-center")
                v-clamp(:max-lines="2") {{ name }}
</template>

<script>
import VClamp from 'vue-clamp';

export default {
    name: 'RecipeItem',
    props: {
        id: Number,
        name: String,
        image: String   // to be concatenated with "../assets/img/recipes/"
    },
    components: { VClamp },
    computed: {
        imageStyle() {
            // because Webpack/vue-loader has to resolve the path during the build - works out of the box in CSS, not in JS
            if (!this.image) {
                return;
            }

            try {
                const image = require(`../assets/img/recipes/${this.image}`);
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
