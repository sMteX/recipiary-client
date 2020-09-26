<template lang="pug">
    div
        MainHeading Přidat kategorii
        div(class="flex justify-start items-center pt-4 px-2")
            label(for="name" class="text-white font-semibold text-xl")
                | Název:
            input(type="text" id="name" placeholder="Název kategorie"
                    class="ml-4 rounded-md text-lg h-10 w-1/4 px-2"
                    v-model="name")
        div(class="pt-4 px-2")
            p(class="text-white font-semibold text-xl")
                | Zařadit do kategorie:
            div(class="bg-black bg-opacity-25 w-1/3 p-2 mt-2")
                AddCategoryTree(:categories="categories"
                                :handleSelect="selectCategory"
                                :toggleCollapsed="toggleCollapsed"
                                :rootSelected="rootSelected")
            button(class="bg-orange-500 py-2 px-4 mt-4 rounded-md text-white font-bold tracking-wide hover:bg-orange-600"
                    @click="addCategory")
                | Přidat
</template>

<script>
export default {
    name: 'add',
    head() {
        return {
            title: 'Přidat kategorii',
        }
    },
    data() {
        return {
            name: '',
            selected: -1,
            // TODO: fetch from server
            categories: [
                { id: 1, name: 'Maso', collapsed: true, selected: false, children: [
                        { id: 6, name: 'Drůbeží maso', collapsed: true, selected: false, children: [] },
                        { id: 7, name: 'Hovězí maso', collapsed: true, selected: false, children: [] },
                        { id: 8, name: 'Vepřové maso', collapsed: true, selected: false, children: [] }
                    ] },
                { id: 2, name: 'Sladké jídla', collapsed: true, selected: false, children: [
                        { id: 9, name: 'Cukroví', collapsed: true, selected: false, children: [] },
                        { id: 10, name: 'Moučníky', collapsed: true, selected: false, children: [] },
                        { id: 11, name: 'Dorty', collapsed: true, selected: false, children: [
                                { id: 12, name: 'Nepečené', collapsed: true, selected: false, children: [] },
                                { id: 13, name: 'Pečené', collapsed: true, selected: false, children: [] }
                            ] }
                    ] },
                { id: 3, name: 'Polévky', collapsed: true, selected: false, children: [] },
                { id: 4, name: 'Studená jídla', collapsed: true, selected: false, children: [] },
                { id: 5, name: 'Saláty', collapsed: true, selected: false, children: [] }
            ]
        }
    },
    computed: {
        rootSelected() {
            return this.selected === 0;
        }
    },
    methods: {
        selectCategory(category) {
            if (category === 0) {
                // special case, selected root category
                console.log('Selected root category');
                this.categories.forEach(c => this.deselect(c)); // recursively deselect all categories and select new one
                this.selected = 0;
            } else {
                console.log(`Selected category: ${category.id}`);
                this.categories.forEach(c => this.deselect(c)); // recursively deselect all categories and select new one
                category.selected = true;
                this.selected = category.id;
            }
        },
        toggleCollapsed(category) {
            // to avoid mutating props in AddCategoryTreeItem
            // we only pass reference to this function and trigger/mutate it here (where it's data)
            category.collapsed = !category.collapsed;
        },
        deselect(category) {
            category.selected = false;
            category.children.forEach(c => this.deselect(c));
        },
        async addCategory() {
            // TODO: send to server, reload categories I guess? or entire page?
        }
    }

}
</script>

<style>

</style>
