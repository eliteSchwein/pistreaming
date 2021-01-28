<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-view-dashboard</v-icon>Modes</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
                <v-row class="px-4 py-0">
                    <v-col class="px-2 py-0 pt-2">
                        <v-select
                            style="margin-bottom:-8px"
                            :items="awbModeItems"
                            v-model="awbMode"
                            label="AwbMode"
                        ></v-select>
                    </v-col>
                    <v-col class="px-2 py-0 pt-2">
                        <v-select
                            style="margin-bottom:-8px"
                            :items="exModeItems"
                            v-model="exMode"
                            label="ExposureMode"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row class="px-2 py-0">
                    <v-col class="pl-5 px-0 mt-1 py-0" style="max-width:115px">
                        Exposure Time
                    </v-col>
                    <v-col class="py-0 pr-4">
                        <v-slider
                            style="margin-bottom:-15px"
                            v-model="compensation"
                            max="10"
                            min="-10"
                            thumb-color="primary"
                            track-color="secondary"
                            color="secondary"
                            thumb-label
                            dense
                        ></v-slider>
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
                exModeItems: ['Off','Auto', 'Nightl', 'NightPreview', 'Backlight', 'Spotlight', 'Sports', 'Beach', 'VeryLong', 'FixedFps', 'AntiShake', 'Fireworks'],
                awbModeItems: ['Off','Auto', 'Sun', 'Cloud', 'Shade', 'Tungsten', 'Fluorescent', 'Incandescent', 'Flash', 'Horizon', 'GreyWorld']
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