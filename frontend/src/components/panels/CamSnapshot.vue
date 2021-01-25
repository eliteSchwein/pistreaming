<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-webcam</v-icon>Snapshot</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab x-small color="primary" @click="recapture"><v-icon>mdi-camera</v-icon></v-btn>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <img :src="webcamimg" width="100%">
        </v-card-text>
    </v-card>
</template>

<script>
    import axios from 'axios';
    export default {
        components: {
        },
        data:function(){
            return{
                webcamimg:this.$store.state.config.ipaddress+"/snapshot"
            }
        },
        computed: {
        },
        methods:{
            recapture: function(){
                this.webcamimg=require("@/assets/snapshot-load.jpg")
                var handler = this
                setTimeout(function(){
                    handler.recaptureget()
                },1000)
            },
            recaptureget: function(){
                var handler = this
                axios.get(this.$store.state.config.ipaddress+'/snapshot', { responseType: "arraybuffer" })
                .then(function (response) {
                    let base64String = btoa(
                        String.fromCharCode.apply(null, new Uint8Array(response.data))
                    );
                    handler.webcamimg="data:image/jpg;base64," + base64String;
                })
                .catch(function (error) {
                    handler.webcamimg=require("@/assets/snapshot-error.jpg")
                    console.log(error);
                });

            }
        }
    }
</script>