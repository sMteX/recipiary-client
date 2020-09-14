<template lang="pug">
    div(class="w-1/3 m-auto h-auto bg-black bg-opacity-50 p-12 rounded-md mt-20")
        h1(class="text-white font-sans text-4xl font-medium tracking-wide antialiased") Přihlásit se
        div(class="relative rounded-md mt-4")
            div(class="absolute top-0 left-0 rounded-md rounded-r-none bg-gray-100 p-2")
                font-awesome-icon(icon="user" class="login-icon")
            input(type="text" v-model="username" placeholder="Uživatelské jméno" class="w-full rounded-md p-2 pl-10 bg-gray-100 shadow-inner")
        div(class="relative rounded-md mt-4")
            div(class="absolute top-0 left-0 rounded-md rounded-r-none bg-gray-100 p-2")
                font-awesome-icon(icon="key" class="login-icon")
            input(type="password" v-model="password" placeholder="Heslo" class="w-full rounded-md p-2 pl-10 bg-gray-100 shadow-inner")

        div(class="w-full flex justify-center mt-6")
            button(type="submit" class="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md tracking-wide" @click="login") Odeslat
        div(v-if="error" class="mt-4 text-red-500") Error: {{ error }}
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            username: '',
            password: '',
            error: ''
        };
    },
    head() {
        return {
            title: 'Login'
        };
    },
    methods: {
        async login() {
            try {
                await this.$auth.loginWith('local', {
                    data: {
                        username: this.username,
                        password: this.password
                    }
                })
            } catch (e) {
                this.error = e.response.data.message;
            }
        }
    }
}
</script>

<style scoped>
.login-icon {
    @apply text-gray-600;
    width: 1.25rem;
    height: 1.25rem;
}
</style>
