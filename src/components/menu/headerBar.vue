<template>
    <q-header elevated>
        <q-toolbar>
            <q-btn
                flat
                dense
                round
                icon="menu"
                aria-label="Menu"
                @click="$emit('onLeftDrawerOpen', {})"
            />

            <q-toolbar-title tag="a" to="/">
                Base App
            </q-toolbar-title>
            <q-toolbar-title stretch tag="a" to="/">
                {{ account.username}}
            </q-toolbar-title>
            
            <q-btn-dropdown stretch flat icon="far fa-user" label="">
                    <q-list>
                    <q-item-label header>Folders</q-item-label>
                    <q-item
                        v-for="n in 3"
                        :key="`x.${n}`"
                        clickable
                        v-close-popup
                        tabindex="0"
                    >
                        <q-item-section avatar>
                            <q-avatar
                                icon="folder"
                                color="secondary"
                                text-color="white"
                            />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Photos</q-item-label>
                            <q-item-label caption
                                >February 22, 2016</q-item-label
                            >
                        </q-item-section>
                        <q-item-section side>
                            <q-icon name="info" />
                        </q-item-section>
                    </q-item>
                    <q-separator inset spaced />
                    <q-item-label header>Files</q-item-label>
                    <q-item
                        v-for="n in 3"
                        :key="`y.${n}`"
                        clickable
                        v-close-popup
                        tabindex="0"
                    >
                        <q-item-section avatar>
                            <q-avatar
                                icon="assignment"
                                color="primary"
                                text-color="white"
                            />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Vacation</q-item-label>
                            <q-item-label caption
                                >February 22, 2016</q-item-label
                            >
                        </q-item-section>
                        <q-item-section side>
                            <q-icon name="info" />
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>

            <div><!-- version  --></div>
        </q-toolbar>
    </q-header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "header-bar",
    computed:{
        ...mapGetters({
            account:'User/getUser'
        })
    }
};
</script>
