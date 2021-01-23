<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-book-open-variant</v-icon>Usage</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-4 py-4 content">
            The Stream URL is:
            <code style="background-color:#000;color:#b5b5b5">{{currentUrl}}/stream</code> 
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        components: {
        },
        computed: {
        currentUrl: {
            get() {
                return "http://"+window.location.hostname+(window.location.port !== 80 && window.location.port !== '' ? ':'+window.location.port : '')
            }
        },
        },
    }
</script>