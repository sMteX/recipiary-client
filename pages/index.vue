<template lang="pug">
    div(class="px-4")
        div(class="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16")
            h1(class="text-2xl font-medium mb-2") Let's build some shit
            h2(class="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide") Navbar
            | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis temporibus facilis eveniet asperiores dignissimos porro harum. Nemo sunt quae exercitationem culpa ipsum laudantium expedita at dignissimos sint natus? Quas, odit?
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component({
    head: {
        title: 'Home',
    }
})
export default class Homepage extends Vue {}
</script>

<style lang="scss">

</style>
