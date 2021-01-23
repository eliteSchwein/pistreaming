<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-monitor</v-icon>Resolution</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-row class="px-4">
                <v-col>
                    <v-text-field
                        v-model="width"
                        label="Width"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="height"
                        label="Height"
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
            width: {
                get() {
                    return this.$store.state.config.width;
                },
                set(newWidth) {
                    return this.$store.dispatch('config/setSettings', { width: newWidth});
                }
            },
            height: {
                get() {
                    return this.$store.state.config.height;
                },
                set(newHeight) {
                    console.log(newHeight)
                    return this.$store.dispatch('config/setSettings', { height: newHeight});
                }
            },
        },
    }
</script>