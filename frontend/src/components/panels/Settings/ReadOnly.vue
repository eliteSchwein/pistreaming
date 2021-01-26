<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading" style="color:#FF0000"><v-icon left style="color:#FF0000">mdi-content-save-alert</v-icon>API Read Only</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-2 py-2 content">
            API Read Only Mode is enabled for the configuration!<br><br>
            To disable this Mode please replace in the config.json in the PI-Streaming: <br>
            <code style="background-color:#000;color:#b5b5b5">"readonly":true</code> <br>
            with: <br>
            <code style="background-color:#000;color:#b5b5b5">"readonly":false</code> <br>
            and then stop the PI-Streaming server by pressing: <br>
            <v-btn x-small class="mr-3 my-2" color="primary">Ctrl</v-btn>+<v-btn x-small class="ml-3" color="primary">C</v-btn><br>
            and execute in the PI-Streaming Directory: <br>
            <code style="background-color:#000;color:#b5b5b5">$ npm start</code> <br>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {

            }
        },
        computed: {

        },
    }
</script>