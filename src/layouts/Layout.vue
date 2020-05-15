<template>
  <q-layout view="lhh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Base App
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <sidebar
          v-for="link in essentialLinks"
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
import EssentialLink from "components/EssentialLink";
import sidebar from "components/menu/sidebar";

export default {
  name: "Layout",

  components: {
    EssentialLink,
    sidebar
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "User",
          caption: "Account",
          icon: "school",
          link: "https://quasar.dev"
        }
      ]
    };
  }
};
</script>
