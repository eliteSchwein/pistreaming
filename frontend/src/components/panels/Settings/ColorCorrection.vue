<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-palette</v-icon>Color Correction</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-form v-model="valid"> 
                <v-row class="px-2 py-0 pt-4">
                    <v-col class="pl-5 px-0 mt-1 py-0" style="max-width:90px">
                        Contrast
                    </v-col>
                    <v-col class="py-0 pr-4">
                        <v-slider
                            style="margin-bottom:-15px"
                            v-model="contrast"
                            max="100"
                            min="-100"
                            thumb-color="primary"
                            track-color="secondary"
                            color="secondary"
                            thumb-label
                            dense
                        ></v-slider>
                    </v-col>
                </v-row>
                <v-row class="px-2 py-0">
                    <v-col class="pl-5 px-0 mt-1 py-0" style="max-width:90px">
                        Saturation
                    </v-col>
                    <v-col class="py-0 pr-4">
                        <v-slider
                            v-model="saturation"
                            max="100"
                            min="-100"
                            thumb-color="primary"
                            track-color="secondary"
                            color="secondary"
                            thumb-label
                            dense
                        ></v-slider>
                    </v-col>
                </v-row>
            </v-form>
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
            valid: {
                get() {
                    return this.$store.state.config.colorcorrectionvalid;
                },
                set(newValid) {
                    return this.$store.dispatch('config/setSettings', {colorcorrectionvalid: newValid });
                }
            },
            contrast: {
                get() {
                    return this.$store.state.config.data.contrast;
                },
                set(newContrast) {
                    return this.$store.dispatch('config/setSettings', { data: { contrast: newContrast }});
                }
            },
            saturation: {
                get() {
                    return this.$store.state.config.data.saturation;
                },
                set(newSaturation) {
                    return this.$store.dispatch('config/setSettings', { data: { saturation: newSaturation }});
                }
            },
        },
    }
</script>