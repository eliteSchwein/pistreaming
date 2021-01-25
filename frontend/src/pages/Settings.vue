<template>
    <v-row>
        <v-col class="col-sm-12 col-md-6" style="min-width:310px!important">
            <cam-stream></cam-stream>
        </v-col>
        <v-col class="col-sm-12 col-md-3">
            <quality-setting class="mb-6"></quality-setting>
            <colorcorrection-setting class="mb-6"></colorcorrection-setting>
            <lightcorrection-setting class="mb-6"></lightcorrection-setting>
        </v-col>
        <v-col class="col-sm-12 col-md-3">
            <resolution-setting class="mb-6"></resolution-setting>
            <alignment-setting class="mb-6"></alignment-setting>
            <modes-setting class="mb-6"></modes-setting>
            <save-settings></save-settings>
        </v-col>
    </v-row>
</template>