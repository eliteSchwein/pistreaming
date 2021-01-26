<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-monitor</v-icon>Resolution</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-form v-model="valid">
                <v-row class="px-4">
                    <v-col>
                        <v-text-field
                            v-model="width"
                            label="Width"
                            :rules="widthRules"
                            type="number"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="height"
                            label="Height"
                            :rules="heightRules"
                            type="number"
                        ></v-text-field>
                    </v-col>
                    <v-col style="max-width:80px">
                        <v-select
                            :items="framerateItems"
                            v-model="framerate"
                            label="Framerate"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row class="px-2 py-0">
                    <v-col class="py-0 pr-4">
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
                framerateItems:[15,24,30,60],
                framerateRules: [ 
                    v => !!v || "This field is required",
                    v => ( v && v >= 1 ) || "Min is 1" ,
                    v => ( v && v <= 60 ) || "Max is 60",
                ],
                heightRules: [ 
                    v => !!v || "This field is required",
                    v => ( v && v >= 1 ) || "Min is 1" ,
                    v => ( v && v <= 1920 ) || "Max is 1920",
                ],
                widthRules: [ 
                    v => !!v || "This field is required",
                    v => ( v && v >= 1 ) || "Min is 1" ,
                    v => ( v && v <= 1920 ) || "Max is 1920",
                ],
            }
        },
        computed: {
            valid: {
                get() {
                    return this.$store.state.config.resolutionvalid;
                },
                set(newValid) {
                    return this.$store.dispatch('config/setSettings', {resolutionvalid: newValid });
                }
            },
            width: {
                get() {
                    return this.$store.state.config.data.width;
                },
                set(newWidth) {
                    return this.$store.dispatch('config/setSettings', { data: { width: newWidth}});
                }
            },
            height: {
                get() {
                    return this.$store.state.config.data.height;
                },
                set(newHeight) {
                    return this.$store.dispatch('config/setSettings', { data: { height: newHeight}});
                }
            },
            framerate: {
                get() {
                    return Number(this.$store.state.config.data.framerate);
                },
                set(newFramerate) {
                    return this.$store.dispatch('config/setSettings', {data: { framerate: newFramerate}});
                }
            },
        },
    }
</script>