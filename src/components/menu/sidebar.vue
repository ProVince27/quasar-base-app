<template>
    <q-item clickable v-ripple exact :to="link">
        <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
        </q-item-section>

        <q-item-section>
            <q-item-label class="text-bold">{{ title }}</q-item-label>
            <!-- <q-item-label caption>
                {{ caption }}
            </q-item-label> -->
            <!-- <sidebar v-bind="child" /> -->
        </q-item-section>
    </q-item>
</template>

<script>
export default {
    name: "sidebar",
    props: {
        title: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            default: ""
        },
        link: {
            type: String,
            default: "#"
        },
        icon: {
            type: String,
            default: ""
        },
        params: {
            type: String,
            default: null
        },
        
    }
};
</script>
