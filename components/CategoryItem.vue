<template lang="pug">
    //wrapper
    div(class="w-48 h-40")
        //pic
        div#pic(class="h-32 bg-local bg-cover rounded rounded-b-none")
        //text
        div(class="bg-orange-700 rounded rounded-t-none text-white p-2 font-sans font-bold tracking-wide") Oběd
</template>

<script>
export default {
    name: "CategoryItem"
}
</script>

<style scoped>
#pic {
    background-image: url("../assets/img/categories/Chicken-Tikka-Masala-Square.jpg");
}
</style>
