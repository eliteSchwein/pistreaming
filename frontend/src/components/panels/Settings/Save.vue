<template>
    <v-btn color="primary" @click="saveConfig" :disabled="!valid" width="100%"><v-icon left>mdi-content-save</v-icon> Save Config</v-btn>
</template>

<script>
    export default {
        components: {
        },
        computed: {
            valid: {
                get(){
                    var valid = true;
                    for(var validationcheck in this.$store.state.config){
                        if(validationcheck!="ipaddress"){
                            if(this.$store.state.config[validationcheck]==false){
                                valid=false;
                                break;
                            }
                        }
                    }
                    return valid
                }
            }
        },
        methods:{
            saveConfig:function(){
                var state =  this.$store.state.config.data
                this.$store.dispatch('config/upload', { state });
            }
        },
        created() {
            var handler = this;
            setTimeout(function(){
                for(var validationcheck in handler.$store.state.config){
                    if(validationcheck!="ipaddress"){ 
                        if(handler.$store.state.config[validationcheck]==false){
                            handler.$store.state.config[validationcheck]=true;
                        }
                    }
                }
            },500)
        },
    }
</script>