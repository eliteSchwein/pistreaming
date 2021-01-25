<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-content-save</v-icon> Save Config</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn small color="primary" @click="saveConfig" :disabled="!valid">Save</v-btn>
        </v-toolbar>
    </v-card>
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
                        if(this.$store.state.config[validationcheck]==false){
                            valid=false;
                            break;
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
                    if(handler.$store.state.config[validationcheck]==false){
                        handler.$store.state.config[validationcheck]=true;
                    }
                }
            },500)
        },
    }
</script>