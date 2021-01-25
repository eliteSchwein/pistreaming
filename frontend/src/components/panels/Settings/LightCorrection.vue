<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-invert-colors</v-icon>Light Correction</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-form v-model="valid">
                <v-row class="px-4 py-0">
                    <v-col class="px-3 py-0">
                        <v-switch
                            style="margin-bottom:-5px"
                            v-model="autoISO"
                            label="Auto ISO"
                            dense
                        ></v-switch>
                    </v-col>
                </v-row>
                <v-row class="px-2 py-0" v-if="!autoISO">
                    <v-col class="pl-5 px-0 mt-1 py-0" style="max-width:90px">
                        ISO
                    </v-col>
                    <v-col class="py-0 pr-4">
                        <v-slider
                            style="margin-bottom:-15px"
                            v-model="iso"
                            max="800"
                            min="100"
                            thumb-color="primary"
                            track-color="secondary"
                            thumb-label
                            dense
                        ></v-slider>
                    </v-col>
                </v-row>
                <v-row class="px-2 py-0">
                    <v-col class="pl-5 px-0 mt-1 py-0" style="max-width:90px">
                        Brightness
                    </v-col>
                    <v-col class="py-0 pr-4">
                        <v-slider
                            v-model="brightness"
                            max="100"
                            min="0"
                            thumb-color="primary"
                            track-color="secondary"
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
                    return this.$store.state.config.lightcorrectionvalid;
                },
                set(newValid) {
                    return this.$store.dispatch('config/setSettings', {lightcorrectionvalid: newValid });
                }
            },
            autoISO: {
                get() {
                    if(this.$store.state.config.data.iso==0){
                        return true
                    }
                    return false;
                },
                set(newAutoIso) {
                    if(newAutoIso){
                        return this.$store.dispatch('config/setSettings', { data: { iso: 0 }});
                    }
                    return this.$store.dispatch('config/setSettings', { data: { iso: 100 }});
                }
            },
            iso: {
                get() {
                    return this.$store.state.config.data.iso;
                },
                set(newISO) {
                    return this.$store.dispatch('config/setSettings', { data: { iso: newISO }});
                }
            },
            brightness: {
                get() {
                    return this.$store.state.config.data.brightness;
                },
                set(newBrightness) {
                    return this.$store.dispatch('config/setSettings', { data: { brightness: newBrightness }});
                }
            },
        },
    }
</script>