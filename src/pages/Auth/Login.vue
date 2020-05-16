<template>
    <q-page padding class="flex align-center">
        <div class="container-auth q-pa-md q-gutter-sm">
            <!-- <q-input filled v-model="username" label="Username" /> -->
            <q-input color="primary" label="Username" v-model="username">
                <template v-slot:prepend>
                    <q-icon name="far fa-envelope" />
                </template>
            </q-input>
            <q-input
                color="primary"
                label="Password"
                type="password"
                v-model="password"
            >
                <template v-slot:prepend>
                    <q-icon name="fas fa-unlock" />
                </template>
            </q-input>
            <div style="flex">
                <q-btn
                    color="primary"
                    text-color="white"
                    label="Login"
                    @click="submit"
                />
            </div>
        </div>
    </q-page>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
    name: "Login",
    data() {
        return {
            username: null,
            password: null,
            authenticate: false
        };
    },
    methods: {
        ...mapActions({
            signIn: "User/signIn"
        }),
        submit() {
            if (this.username === "vince" && this.password === "password") {
                this.authenticate = true
                return this.signIn(this.$data)
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.container-auth {
    border: 1px solid $dark;
    padding: 4px;
    width: 40%;
    margin: auto;
}
</style>
