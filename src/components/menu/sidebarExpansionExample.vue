<template>
    <q-list>
        <q-expansion-item
            expand-separator
            icon="mail"
            label="Inbox"
            caption="5 unread emails"
        >
            <q-expansion-item
                :header-inset-level=".3"
                expand-separator
                icon="receipt"
                label="Receipts"
            >
                <q-expansion-item
                    dense-toggle
                    label="Yesterday"
                    :header-inset-level="1"
                    :content-inset-level="2"
                >
                    
                </q-expansion-item>
            </q-expansion-item>

            <q-expansion-item
                :header-inset-level="1"
                :content-inset-level="1"
                expand-separator
                icon="schedule"
                label="Postponed"
            >
                <q-item clickable v-ripple to="account">
                    <q-item-section avatar>
                        <q-icon name="fas fa-air-freshener" />
                    </q-item-section>
                    <q-item-section>Active</q-item-section>
                    <q-item-section side>Side</q-item-section>
                </q-item>
            </q-expansion-item>
            <q-item clickable v-ripple to="account">
                <q-item-section avatar>
                    <q-icon name="fas fa-air-freshener" />
                </q-item-section>
                <q-item-section>Active</q-item-section>
                <q-item-section side>Side</q-item-section>
            </q-item>
        </q-expansion-item>
        <q-item clickable v-ripple>
            <q-item-section avatar>
                <q-icon name="signal_wifi_off" />
            </q-item-section>
            <q-item-section>Active</q-item-section>
            <q-item-section side>Side</q-item-section>
        </q-item>
    </q-list>
</template>
<script>
export default {
    name: "sidebar-expansion-example"
};
</script>
