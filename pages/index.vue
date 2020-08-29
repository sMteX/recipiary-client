<template lang="pug">
    div.bg-blue-200
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import Logo from '~/components/Logo.vue';

@Component({
    components: {
        Logo
    },
    head: {
        title: 'Home'
    }
})
export default class Homepage extends Vue {}
</script>

<style lang="scss">

</style>
