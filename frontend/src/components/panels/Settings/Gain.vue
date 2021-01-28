<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-gauge</v-icon>Gain Correction</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-form v-model="valid"> 
                <v-row class="px-2 py-0 pt-4">
                    <v-col class="pl-5 px-0 mt-1 py-0" style="max-width:70px">
                        Digital
                    </v-col>
                    <v-col class="py-0 pr-4">
                        <v-slider
                            style="margin-bottom:-15px"
                            v-model="digital"
                            max="64.0"
                            min="1.0"
                            step="0.1"
                            thumb-color="primary"
                            track-color="secondary"
                            color="secondary"
                            thumb-label
                            dense
                        ></v-slider>
                    </v-col>
                </v-row>
                <v-row class="px-2 py-0">
                    <v-col class="pl-5 px-0 mt-1 py-0" style="max-width:70px">
                        Analog
                    </v-col>
                    <v-col class="py-0 pr-4">
                        <v-slider
                            v-model="analog"
                            max="12.0"
                            min="1.0"
                            step="0.1"
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
            digital: {
                get() {
                    return this.$store.state.config.data.digitalGain;
                },
                set(newDigitalGain) {
                    return this.$store.dispatch('config/setSettings', { data: { digitalGain: newDigitalGain }});
                }
            },
            analog: {
                get() {
                    return this.$store.state.config.data.analogGain;
                },
                set(newAnalogGain) {
                    return this.$store.dispatch('config/setSettings', { data: { analogGain: newAnalogGain }});
                }
            },
        },
    }
</script>