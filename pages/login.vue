<template>
    <div>
        <p>Username:</p>
        <input type="text" v-model="username" />
        <p>Password:</p>
        <input type="password" v-model="password" />
        <button type="submit" @click="login">Login</button>
        <p v-if="loggedIn">Logged in</p>
        <p v-if="error">Error: {{ error }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component({
    head: {
        title: 'Login'
    }
})
export default class LoginPage extends Vue {
    username: string = '';
    password: string = '';
    error: string = '';

    get loggedIn(): boolean {
        return this.$auth.loggedIn;
    }

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
</script>

<style scoped>

</style>
