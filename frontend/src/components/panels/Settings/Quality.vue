<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-image</v-icon>Quality</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-row class="px-4">
                <v-col>
                    <v-text-field
                        v-model="bitrate"
                        label="Bitrate"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="framerate"
                        label="Framerate"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        components: {
        },
        computed: {
            bitrate: {
                get() {
                    return this.$store.state.config.bitrate;
                },
                set(newBitrate) {
                    return this.$store.dispatch('config/setSettings', { bitrate: newBitrate});
                }
            },
            framerate: {
                get() {
                    return this.$store.state.config.framerate;
                },
                set(newFramerate) {
                    return this.$store.dispatch('config/setSettings', { framerate: newFramerate});
                }
            },
        },
    }
</script>