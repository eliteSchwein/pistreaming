<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-invert-colors</v-icon>Light Correction</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-form v-model="valid">
                <v-row class="px-4">
                    <v-col>
                        <v-text-field
                            v-model="iso"
                            label="ISO"
                            :rules="isoRules"
                            type="number"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="brightness"
                            label="Brightness"
                            :rules="brightnessRules"
                            type="number"
                        ></v-text-field>
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
                isoRules: [ 
                    v => !!v || "This field is required",
                    v => ( v  && (v == 0 || v >= 100) ) || "Min is 100 or 0",
                    v => ( v && v <= 800 ) || "Max is 800",
                ],
                brightnessRules: [ 
                    v => !!v || "This field is required",
                    v => ( v && v >= 0 ) || "Min is 0" ,
                    v => ( v && v <= 100 ) || "Max is 100",
                ],
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