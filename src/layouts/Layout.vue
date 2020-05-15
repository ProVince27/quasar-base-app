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
                <!-- <q-item-label header class="text-grey-8">
                    Essential Links
                </q-item-label> -->
                <sidebar
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
            <sidebar1 />
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
// import sidebar from "components/menu/sidebar";

export default {
    name: "Layout",
    components: {
        sidebar:() => import('components/menu/sidebar'),
        sidebar1:()=> import('components/menu/sidebarExpansionExample'),
        headerBar:() => import('components/menu/headerBar')
    },

    data() {
        return {
            leftDrawerOpen: false,
            essentialLinks: [
                {
                    title: "Dashboard",
                    // caption: "Account",
                    icon: "school",
                    link: "/"
                },
                
            ]
        };
    }
};
</script>
