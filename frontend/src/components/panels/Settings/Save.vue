<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-content-save</v-icon></span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn small color="primary" @click="saveConfig">Save</v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        components: {
        },
        computed: {
        },
        methods:{
            saveConfig:function(){
                var state =  this.$store.state.config
                this.$store.dispatch('config/upload', { state });
            }
        }
    }
</script>