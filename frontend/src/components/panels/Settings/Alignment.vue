<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-angle-acute</v-icon>Alignment</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-row class="px-4">
                <v-col>
                    <v-select
                        :items="rotationItems"
                        v-model="rotation"
                        label="Rotation"
                    ></v-select>
                </v-col>
                <v-col>
                    <v-select
                        :items="flipItems"
                        v-model="flip"
                        label="Flip"
                    ></v-select>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        components: {
        },
        data: () => ({
            rotationItems: [0, 90, 180, 270],
            flipItems: ['None', 'Horizontal', 'Vertical', 'Both'],
        }),
        computed: {
            rotation: {
                get() {
                    return this.$store.state.config.data.rotation;
                },
                set(newRotation) {
                    return this.$store.dispatch('config/setSettings', { data: { rotation: newRotation }});
                }
            },
            flip: {
                get() {
                    return this.$store.state.config.data.flip;
                },
                set(newFlip) {
                    return this.$store.dispatch('config/setSettings', { data:{ flip: newFlip }});
                }
            },
        },
    }
</script>