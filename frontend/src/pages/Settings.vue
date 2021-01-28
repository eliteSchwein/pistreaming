<template>
    <v-row>
        <v-col class="col-sm-12 col-md-6" style="min-width:310px!important">
            <cam-stream></cam-stream>
        </v-col>
        <v-col class="col-sm-12 col-md-3" v-if="!readonly">
            <quality-settings class="mb-6"></quality-settings>
            <colorcorrection-settings class="mb-6"></colorcorrection-settings>
            <lightcorrection-settings class="mb-6"></lightcorrection-settings>
        </v-col>
        <v-col class="col-sm-12 col-md-3" v-if="!readonly">
            <resolution-settings class="mb-6"></resolution-settings>
            <alignment-settings class="mb-6"></alignment-settings>
            <modes-settings class="mb-6"></modes-settings>
            <gain-settings class="mb-6"></gain-settings>
            <save-settings></save-settings>
        </v-col>
        <v-col class="col-sm-12 col-md-6" v-if="readonly">
            <readonly-settings></readonly-settings>
        </v-col>
    </v-row>
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
            readonly: {
                get() {
                    return this.$store.state.config.data.readonly;
                },
            },
        },
    }
</script>