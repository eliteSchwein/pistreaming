<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-webcam</v-icon>Stream</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <img :src="this.$store.state.config.ipaddress+'/stream'" width="100%">
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        components: {
        },
        computed: {
        },
    }
</script>