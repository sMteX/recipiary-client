<template lang="pug">
    header(class="px-6 lg:px-16 bg-black bg-opacity-50 text-white flex justify-between flex-wrap items-center py-2 lg:py-0")
        div(class="flex justify-start items-center w-auto")
            ul(class="flex items-center justify-between")
                li(class="px-4")
                    nuxt-link(to="/")
                        svg(class="fill-current" width="32" height="36" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg")
                            path(d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z")
                li
                    HeaderCategoryDropdown(:categories="categories")
                li
                    nuxt-link(to="/recipes" class="header-link") Všechny recepty
                li(v-if="$auth.loggedIn")
                    a(href="#" class="header-link") Přidat recept
                li(v-if="$auth.loggedIn")
                    nuxt-link(to="/category/add" class="header-link") Přidat kategorii
        label(for="menu-toggle" class="cursor-pointer lg:hidden block")
            svg(class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20")
                title menu
                path(d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z")
        input(class="hidden" type="checkbox" id="menu-toggle")
        div(class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu")
            nav
                ul(class="lg:flex items-center justify-between text-base pt-4 lg:pt-0")
                    template(v-if="$auth.loggedIn")
                        li
                            nuxt-link(to="/settings" class="header-link") Nastavení
                        li
                            button(class="header-link" @click="logout") Odhlásit se
                    template(v-else)
                        li
                            nuxt-link(class="header-link" to="/login") Přihlásit se
            //-a(href="#" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer")
                img(src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
                    alt="Avatar" class="rounded-full w-10 h-10 border-2 border-transparent hover:border-orange-500")
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component({})
export default class Header extends Vue {
    // TODO: fetch from server (if no children, specify empty array!)
    categories = [
        { id: 1, name: 'Obědy', children: [] },
        { id: 2, name: 'Maso', children: [
                { id: 3, name: 'Kuřecí maso', children: [] },
                { id: 4, name: 'Hovězí maso', children: [{ id: 6, name: 'Arbitrary', children: []}] }
        ]},
        { id: 5, name: 'Sladké jídla', children: [
                { id: 6, name: 'Cukroví', children: [] },
                { id: 7, name: 'Dorty', children: [] }
            ]}
    ];
    async logout() {
        await this.$auth.logout();
    }
}
</script>

<style lang="scss">
#menu-toggle:checked + #menu {
    display: block;
}
</style>
