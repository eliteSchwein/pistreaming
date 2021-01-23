<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-hand-peace</v-icon>Welcome!</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-4 py-4 content">
            Hey There! <p/>
            Thank you that you installed PI-Streaming. <p/>
            <br>
            <br>
            PI-Streaming is designed for low latency PI-Cam Streaming at a good quality and low Usage!<p/>
            you can try the Stream or Picture and also get a URL for the raw Stream or Picture.<p/>
            you can also configure PI-Streaming in this Webinterface, but be warned there is no checkes (yet), so dont mess the settings up!
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