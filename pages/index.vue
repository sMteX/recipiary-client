<template lang="pug">
    div
        RecipiaryLogo(class="mx-auto pt-4 w-1/2 h-32" stroke="#fff" fill="#fff")
        div(class="mx-auto my-4 w-2/3 h-12")
            MainSearchBar
        div(class="w-auto inline-block px-4 pb-2 border-b-2 border-orange-500")
            h1(class="font-sans text-white font-bold text-4xl tracking-wide") Kategorie
        div(class="grid grid-cols-5 gap-8 py-6 px-2")
            CategoryItem(v-bind="category")
            CategoryItem(v-bind="category")
            CategoryItem(v-bind="category")
            CategoryItem(v-bind="category")
            CategoryItem(v-bind="category")
            CategoryItem(v-bind="category")
            template(v-if="showAllCategories")
                CategoryItem(v-bind="category")
                CategoryItem(v-bind="category")
                CategoryItem(v-bind="category")
                CategoryItem(v-bind="category")
                CategoryItem(v-bind="category")
        div(class="flex justify-center" v-if="!showAllCategories")
            button(class="bg-orange-500 p-4 rounded-md text-white font-bold tracking-wide hover:bg-orange-600"
                @click="allCategoriesClick") Zobrazit všechny kategorie
        //-div(class="bg-white rounded-lg p-16 my-8")
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
export default class Homepage extends Vue {
    showAllCategories: boolean = false;
    category = {
        id: 3,
        name: 'Maso',
        image: 'Chicken-Tikka-Masala-Square.jpg'
    };

    allCategoriesClick() {
        this.showAllCategories = true;
    }
}
</script>

<style lang="scss">
</style>
