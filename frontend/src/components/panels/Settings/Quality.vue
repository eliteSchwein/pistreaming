<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-image</v-icon>Quality</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-form v-model="valid">
                <v-row class="px-4 py-0">
                    <v-col class="px-3 py-2 pb-0">
                        <v-select
                            style="margin-bottom:-8px"
                            item-text="text"
                            item-value="value"
                            :items="bitrateItems"
                            v-model="bitrate"
                            label="Bitrate"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row class="px-2 py-0">
                    <v-col class="pl-5 px-0 mt-1 py-0" style="max-width:90px">
                        Sharpness
                    </v-col>
                    <v-col class="py-0 pr-4">
                        <v-slider
                            v-model="sharpness"
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
                bitrateItems: [
                    {
                        text:"25MBit",
                        value: 25000000
                    },
                    {
                        text:"20MBit",
                        value: 20000000
                    },
                    {
                        text:"15MBit",
                        value: 15000000
                    },
                    {
                        text:"10MBit",
                        value: 10000000
                    },
                    {
                        text:"5MBit",
                        value: 5000000
                    },
                    {
                        text:"1MBit",
                        value: 1000000
                    }
                ],
                bitrateRules: [ 
                    v => !!v || "This field is required",
                    v => ( v && v >= 0 ) || "Min is 0" ,
                    v => ( v && v <= 25000000 ) || "Max is 25000000",
                ],
            }
        },
        computed: {
            valid: {
                get() {
                    return this.$store.state.config.qualityvalid;
                },
                set(newValid) {
                    return this.$store.dispatch('config/setSettings', {qualityvalid: newValid });
                }
            },
            bitrate: {
                get() {
                    return Number(this.$store.state.config.data.bitrate);
                },
                set(newBitrate) {
                    console.log(newBitrate)
                    return this.$store.dispatch('config/setSettings', { data: { bitrate: newBitrate}});
                }
            },
            sharpness: {
                get() {
                    return this.$store.state.config.data.sharpness;
                },
                set(newSharpness) {
                    return this.$store.dispatch('config/setSettings', {data: { sharpness: newSharpness}});
                }
            },
        },
    }
</script>