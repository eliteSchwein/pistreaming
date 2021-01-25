<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-view-dashboard</v-icon>Modes</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
                <v-row class="px-4">
                    <v-col>
                        <v-select
                            :items="awbModeItems"
                            v-model="awbMode"
                            label="AwbMode"
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-select
                            :items="exModeItems"
                            v-model="exMode"
                            label="ExposureMode"
                        ></v-select>
                    </v-col>
                    <v-col style="max-width:80px">
                        <v-form v-model="valid">
                            <v-text-field
                                v-model="compensation"
                                label="Strength"
                                :rules="compensationRules"
                                type="number"
                            ></v-text-field>
                        </v-form>
                    </v-col>
                </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                exModeItems: ['Auto', 'Nightl', 'NightPreview', 'Backlight', 'Spotlight', 'Sports', 'Beach', 'VeryLong', 'FixedFps', 'AntiShake', 'Fireworks'],
                awbModeItems: ['Auto', 'Sun', 'Cloud', 'Shade', 'Tungsten', 'Fluorescent', 'Incandescent', 'Flash', 'Horizon', 'GreyWorld'],
                compensationRules: [ 
                    v => !!v || "This field is required",
                    v => ( v && v >= 0 ) || "Min is 0" ,
                    v => ( v && v <= 100 ) || "Max is 100",
                ],
            }
        },
        computed: {
            valid: {
                get() {
                    return this.$store.state.config.modesvalid;
                },
                set(newValid) {
                    return this.$store.dispatch('config/setSettings', {modesvalid: newValid });
                }
            },
            compensation: {
                get() {
                    return this.$store.state.config.data.exposureCompensation;
                },
                set(newExposureCompensation) {
                    return this.$store.dispatch('config/setSettings', {data: { exposureCompensation: newExposureCompensation}});
                }
            },
            exMode: {
                get() {
                    return this.$store.state.config.data.exposureMode;
                },
                set(newExposureMode) {
                    return this.$store.dispatch('config/setSettings', { data:{ exposureMode: newExposureMode }});
                }
            },
            awbMode: {
                get() {
                    return this.$store.state.config.data.awbMode;
                },
                set(newAwbMode) {
                    return this.$store.dispatch('config/setSettings', { data:{ awbMode: newAwbMode }});
                }
            },
        },
    }
</script>