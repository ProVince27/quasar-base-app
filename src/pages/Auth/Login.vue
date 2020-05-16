<template>
    <q-page padding class=""> 
        <div class="container-auth">
            <q-input filled v-model="username" label="Username" />
            <q-input filled v-model="password" label="Password" type="password"  />
            <q-btn color="primary" text-color="white" label="Login" />
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            username:null,
            password:null,
            visible:true
        }
    }
};
</script>
<style lang="scss" scoped>
    .container-auth{
        border: 1px solid $dark;
        height: 400px;
        width: 400px;
        padding:4px;
        margin:auto;
    }
</style>
