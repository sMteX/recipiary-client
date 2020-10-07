<template lang="pug">
    div(class="w-3/4 mx-auto")
        h1(class="text-orange-100 text-3xl font-bold tracking-wide py-2")
            | {{ name }}
        div(class="bg-white rounded-md")
            div(class="flex justify-start")
                div(class="w-1/3")
                    img(:src="require(`~/assets/img/recipes/${photos.main}`)"
                        class="p-4")
                    div(class="p-3")
                        h2(class="text-xl font-bold tracking-wide italic") Ingredience
                        div(v-for="(part, i) in parts" :key="i"
                            class="px-4 pt-2")
                            h3(class="font-bold tracking-wide") {{ part.name }}
                            p(v-for="(ingredient, j) in part.ingredients" :key="j")
                                | {{ ingredient.amount }} {{ ingredient.displayName }}
                div(class="w-2/3 p-3")
                    h2(class="text-xl font-bold tracking-wide italic") Postup
                    div(class="px-4 pt-2"
                        v-for="(step, i) in steps" :key="i")
                        span(class="font-bold tracking-wide mr-2") {{ i + 1 }}.
                        | {{ step.content }}


</template>

<script>
export default {
    name: 'RecipePage',
    validate({ params }) {
        // TODO: recipe must exist
        // must be a number
        return /^\d+$/.test(params.id);
    },
    head() {
        return {
            title: this.name,
        }
    },
    data() {
        return {
            // TODO: fetch from server
            /* let's try to emulate the structure that will come from server, sort of
                based on the layout of the page, we need:

                - name
                - categories it's in
                - comments perhaps? (NYI, could be useful)
                - photos (NYI)
                - ingredients: (amount, ingredient, unit, grouped by "recipe part")
                - actual recipe steps

            going further from the server entities:
                - preparation time, portions
             */
            // https://www.toprecepty.cz/recept/64059-penne-s-bazalkovym-pestem-a-kurecim-prsem/
            id: 1, // might not be needed, it's in $route.params.id
            name: 'Penne s bazalkovým pestem a kuřecím prsem',
            categories: [
                // should it be nested? maybe sorted on server, from the topmost to most inner, but not nested
                { id: 1, name: 'Těstoviny' },
                { id: 2, name: 'Maso' },
                { id: 3, name: 'Kuřecí maso' }
            ],
            photos: {
                // to be concat with assets/img/recipes/
                main: 'penne.png',
                other: []
            },
            // TODO:
            //  comments: [],
            // TODO: proposed ingredient structure - formalized ingredients on server only
            parts: [
                {
                    name: 'Pesto',
                    ingredients: [
                        { amount: 25, displayName: 'g čerstvé bazalky' },
                        { amount: 1, displayName: 'lžička piniových oříšků' },
                        { amount: 3, displayName: 'lžička nastrouhaného parmezánu' },
                        { amount: 50, displayName: 'olivového oleje' },
                        { amount: 1, displayName: 'špetka soli' },
                        { amount: 1, displayName: 'menší stroužek česneku' }
                    ]
                },
                {
                    name: 'Maso',
                    ingredients: [
                        { amount: 200, displayName: 'g kuřecích prsou' },
                        { amount: 1, displayName: 'lžíce olivového oleje' },
                        { amount: 1, displayName: 'lžička mletého chilli' },
                        { amount: 1, displayName: 'lžička chilli pasty' },
                        { amount: 1, displayName: 'špetka soli' }
                    ]
                },
                { name: 'Těstoviny', ingredients: [{ amount: 250, displayName: 'g penne těstovin'}] }
            ],
            // parts: [
            //     {
            //         name: 'Pesto',
            //         ingredients: [
            //             { amount: 25, unit: 'g', name: 'čerstvá bazalka' },
            //             { amount: 1, unit: 'lžička', name: 'piniové oříšky' },
            //             { amount: 3, unit: 'lžičky', name: 'nastrouhaný parmezán' },
            //             { amount: 50, unit: 'ml', name: 'olivový olej' },
            //             { amount: 1, unit: 'špetka', name: 'sůl' },
            //             { amount: 1, unit: 'stroužek', name: 'česnek (menší)' }
            //         ]
            //     },
            //     {
            //         name: 'Maso',
            //         ingredients: [
            //             { amount: 200, unit: 'g', name: 'kuřecí prsa' },
            //             { amount: 1, unit: 'lžíce', name: 'olivový olej' },
            //             { amount: 1, unit: 'lžička', name: 'mleté chilli' },
            //             { amount: 1, unit: 'lžička', name: 'chilli pasta' },
            //             { amount: 1, unit: 'špetka', name: 'sůl' }
            //         ]
            //     },
            //     { name: 'Těstoviny', ingredients: [{ amount: 250, unit: 'g', name: 'penne těstoviny'}] }
            // ],
            steps: [
                // technically order too, but maybe we can just return it ordered and not bother anymore
                { content: 'Nejdříve omyjeme a očistíme kuřecí prsíčko, dáme ho do mističky a v jiné misce připravíme marinádu: Nalijeme olivový olej, přidáme mleté chilli, chilli pastu a sůl, pořádně promícháme a potřeme tím prsíčko. Dáme odpočinout na dvě hodina na chladné místo, nejlépe do ledničky.' },
                { content: 'Připravíme bazalkové pesto: Všechny suroviny dáme do kutru, kdo nemá, může použít tyčový mixér a pořádně promixujeme. Pesto musí být krémové konzistence.' },
                { content: 'Maso připravíme nejlépe na grilu, ale může být i na pánvi, rozehřejeme gril, dáme na něj maso a opékáme 5 minut z každé strany.' },
                { content: 'Těstoviny uvaříme na skus, na pánev dáme pesto, uvařené těstoviny, vše promícháme a můžeme podávat.' }
            ],
            preparationTime: 60,
            portions: 1
        }
    },
    methods: {
        imageStyle(image) {
            if (!image) {
                return;
            }

            try {
                const _image = require(`../assets/img/recipes/${image}`);
                return {
                    backgroundImage: `url("${_image}")`
                }
            } catch(e) {}
        }
    }
}
</script>

<style>

</style>
