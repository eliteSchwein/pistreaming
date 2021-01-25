<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-palette</v-icon>Color Correction</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-form v-model="valid">
                <v-row class="px-4">
                    <v-col>
                        <v-text-field
                            v-model="contrast"
                            label="Contrast"
                            :rules="contrastRules"
                            type="number"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="saturation"
                            label="Saturation"
                            :rules="saturationRules"
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
                contrastRules: [ 
                    v => !!v || "This field is required",
                    v => ( v && v >= -100 ) || "Min is -100" ,
                    v => ( v && v <= 100 ) || "Max is 100",
                ],
                saturationRules: [ 
                    v => !!v || "This field is required",
                    v => ( v && v >= -100 ) || "Min is -100" ,
                    v => ( v && v <= 100 ) || "Max is 100",
                ],
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