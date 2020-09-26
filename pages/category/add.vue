<template lang="pug">
    div
        MainHeading Přidat kategorii
        div(class="flex justify-start items-center pt-4 px-2")
            label(for="name" class="text-white font-semibold text-xl")
                | Název:
            input(type="text" id="name" placeholder="Název kategorie"
                    class="ml-4 rounded-md text-lg h-10 w-1/4 px-2")
        div(class="pt-4 px-2")
            p(class="text-white font-semibold text-xl")
                | Zařadit do kategorie:
            div(class="bg-black bg-opacity-25 w-1/3 p-2 mt-2")
                AddCategoryTree(:categories="categories" :selectHandler="selectCategory")
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
            categories: [
                { id: 1, name: 'Maso', selected: false, children: [
                        { id: 6, name: 'Drůbeží maso', selected: false, children: [] },
                        { id: 7, name: 'Hovězí maso', selected: false, children: [] },
                        { id: 8, name: 'Vepřové maso', selected: false, children: [] }
                    ] },
                { id: 2, name: 'Sladké jídla', selected: false, children: [
                        { id: 9, name: 'Cukroví', selected: false, children: [] },
                        { id: 10, name: 'Moučníky', selected: false, children: [] },
                        { id: 11, name: 'Dorty', selected: false, children: [
                                { id: 12, name: 'Nepečené', selected: false, children: [] },
                                { id: 13, name: 'Pečené', selected: false, children: [] }
                            ] }
                    ] },
                { id: 3, name: 'Polévky', selected: false, children: [] },
                { id: 4, name: 'Studená jídla', selected: false, children: [] },
                { id: 5, name: 'Saláty', selected: false, children: [] }
            ]
        }
    },
    methods: {
        selectCategory(id) {
            console.log(`Selected category: ${id}`);
            this.categories.forEach(category => this.findAndToggleSelected(id, category));
        },
        findAndToggleSelected(id, category) {
            if (category.id === id) {
                category.selected = !category.selected;
            } else if (category.children.length > 0) {
                category.children.forEach(cat => this.findAndToggleSelected(id, cat));
            }
        }
    }

}
</script>

<style>

</style>
