<template>
    <div>
        <q-item v-if="children.length < 1" clickable v-ripple exact :to="link">
            <q-item-section v-if="icon" avatar>
                <q-icon :name="icon" />
            </q-item-section>
            <q-item-section>
                <q-item-label class="text-bold">{{ title }}</q-item-label>
                <q-item-label v-if="caption" caption>
                    {{ caption }}
                </q-item-label>
            </q-item-section>
            <q-item-section v-if="side" side>{{ side.label }}</q-item-section>
        </q-item>
        <q-expansion-item
            v-else
            exact
            expand-separator
            :icon="icon"
            :label="title"
            :content-inset-level=".3"
        >
            <sidebar v-for="(link, key) in children" :key="key" v-bind="link" />
        </q-expansion-item>
    </div>
</template>

<script>
export default {
    name: "sidebar",
    components: {},
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: null
        },
        caption: {
            type: String,
            default: null
        },
        link: {
            type: String,
            default: "#"
        },
        roles: {
            type: Array,
            default: []
        },
        permissions: {
            type: Array,
            default: () => []
        },
        params: {
            type: Array,
            default: () => []
        },
        side: {
            type: Object,
            default: () => {}
        },
        children: {
            type: Array,
            default: () => []
        }
    }
};
</script>
