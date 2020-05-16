<template>
    <q-layout view="hHr Lpr lFf">
        <header-bar @onLeftDrawerOpen="leftDrawerOpen = !leftDrawerOpen" />

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            content-class="bg-grey-1"
        >
            <q-list>
                <sidebar
                    v-for="link in menus"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>

export default {
    name: "Layout",
    components: {
        sidebar:() => import('components/menu/sidebar'),
        headerBar:() => import('components/menu/headerBar')
    },
    data() {
        return {
            leftDrawerOpen: false,
        };
    },
    computed:{
        menus:()=> require('./menu').default
    }
};
</script>
