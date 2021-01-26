<style>
    @import './assets/styles/fonts.css';
    @import './assets/styles/toastr.css';
    @import './assets/styles/keyboard.css';
    @import './assets/styles/misc.css';
    @import './assets/styles/scrollbar.css';

    .button-min-width-auto {
        min-width: auto !important;
    }

    #page-container {
        max-width: 1400px;
    }
    #sidebarVersions {
        position: absolute;
        left: 0;
        bottom: 0;
    }
</style>

<template>
    <v-app>
        <vue-headful title="PI-Streaming" />
        <v-navigation-drawer
            class="sidebar-wrapper" disable-resize-watcher persistent v-model="drawer" fixed app
            color="#181818DD"
            
        >
            <div id="nav-header">
                <img :src="require('./assets/logo.svg')" />
                <v-toolbar-title>
                    PI-Streaming <p class="mb-0 text-body-2 pl-0 pb-2" style="font-size: 11px!important;line-height: 2px;">v{{ getVersion }}</p>
                </v-toolbar-title>
            </div>
            <ul class="navi" :expand="$vuetify.breakpoint.mdAndUp">
                <li v-for="(category, index) in routes" :key="index" :prepend-icon="category.icon"
                    :class="[category.path !== '/' && currentPage.includes(category.path) ? 'active' : '', 'nav-item']"
                    :value="true"
                    >
                    <router-link
                        slot="activator" class="nav-link" exact :to="category.path" @click.prevent>
                        <v-icon>mdi-{{ category.icon }}</v-icon>
                        <span class="nav-title">
                            {{ category.title }}
                        </span>
                        <v-icon class="nav-arrow" v-if="category.children && category.children.length > 0">mdi-chevron-down</v-icon>
                    </router-link>
                </li>
            </ul>
            <template v-slot:append>
                <div class="pa-2" align="center">
                    <v-btn fab elevation="0" small href="https://github.com/eliteSchwein/pistreaming" target="_blank">
                        <v-icon>mdi-github</v-icon>
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        
        <v-app-bar app elevate-on-scroll color="#181818DD">
            
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-main id="content" v-bind:style="{backgroundImage:'url('+require('@/assets/background.jpg')+')',backgroundAttachment:'fixed',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}">
            
            <v-scroll-y-transition>
                <v-container fluid id="page-container" class="container px-sm-6 px-3 mx-auto">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </v-container>
            </v-scroll-y-transition>
        </v-main>
    </v-app>
</template>

<script>
    import axios from "axios";
    import routes from './routes'
    import { mapState, mapGetters } from 'vuex';

export default {
    props: {
        source: String,
    },
    components: {

    },
    data: () => ({
        drawer: false,
        activeClass: 'active',
        routes: routes.filter((element) => element.title)
    }),
    created () {
        this.$vuetify.theme.dark = true;
        var handler = this;
        axios.get( handler.$store.state.config.ipaddress+'/getconfig/', {})
        .then(function (response) {
            var data = response.data
            handler.$store.state.config.data=data
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    computed: {
        ...mapState({
            
        }),
        ...mapGetters([
            'getTitle',
            'getVersion'
        ]),
        currentPage: function() {
          return this.$route.fullPath;
        },
    },
    mounted() {

    },
    methods: {
        drawFavicon(val) {
            let favicon16 = document.querySelector("link[rel*='icon'][sizes='16x16']")
            let favicon32 = document.querySelector("link[rel*='icon'][sizes='32x32']")

            if (val > 0 && val < 100) {
                let faviconSize = 64;

                let canvas = document.createElement('canvas');
                canvas.width = faviconSize;
                canvas.height = faviconSize;
                let context = canvas.getContext('2d');
                let centerX = canvas.width / 2;
                let centerY = canvas.height / 2;
                let radius = 32;
                let percent = val * 100;

                /* draw the grey circle */
                context.beginPath();
                context.moveTo(centerX, centerY);
                context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                context.closePath();
                context.fillStyle = "#ddd";
                context.fill();
                context.strokeStyle = "rgba(200, 208, 218, 0.66)";
                context.stroke();

                /* draw the green circle based on percentage */
                let startAngle = 1.5 * Math.PI;
                let endAngle = 0;
                let unitValue = (Math.PI - 0.5 * Math.PI) / 25;
                if (percent >= 0 && percent <= 25) endAngle = startAngle + (percent * unitValue);
                else if (percent > 25 && percent <= 50) endAngle = startAngle + (percent * unitValue);
                else if (percent > 50 && percent <= 75) endAngle = startAngle + (percent * unitValue);
                else if (percent > 75 && percent <= 100) endAngle = startAngle + (percent * unitValue);

                context.beginPath();
                context.moveTo(centerX, centerY);
                context.arc(centerX, centerY, radius, startAngle, endAngle, false);
                context.closePath();
                context.fillStyle = "#e41313";
                context.fill();

                favicon16.href = canvas.toDataURL('image/png')
                favicon32.href = canvas.toDataURL('image/png')
            } else {
                favicon16.href = "/img/icons/favicon-16x16.png"
                favicon32.href = "/img/icons/favicon-32x32.png"
            }
        }
    },
    watch: {
        
    },
}
</script>

<style>
    body {
      background: #121212;
    }
    /*.sidebar-wrapper:before {
        position: absolute;
        content: ' ';
        top: 0; right: 0; bottom: 0; left: 0;
        background: #000;
        opacity: .5;
    }*/
    #nav-header {
        text-align: center;
        border-bottom: 1px solid #ffffff40;
        margin-bottom: 1em;
        padding: .75em 0 .75em 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #nav-header img {
        height: 40px;
        margin-right: 1em;
    }
    #nav-header .v-toolbar__title {
        font-size: 24px;
        vertical-align: middle;
    }
    .v-navigation-drawer__content {
        z-index: 10;
    }
    nav ul.navi {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    nav ul.navi li.nav-item {
        padding: 0;
        margin: 0;
    }
    nav ul.navi .nav-link {
        display: block;
        color: white;
        border-radius: .5em;
        line-height: 30px;
        font-size: 14px;
        font-weight: 600;
        padding: 10px 15px;
        opacity: .85;
        transition: all .15s ease-in;
        text-decoration: none;
        margin: 0.5em 1em;
    }
    nav ul.navi .nav-link:hover,
    nav ul.navi li.active>.nav-link,
    nav ul.navi .nav-link.router-link-active {
        background: rgba(255,255,255,.3);
        opacity: 1;
    }
    nav ul.navi li.active>.nav-link i.nav-arrow ,
    nav ul.navi .nav-link.router-link-active i.nav-arrow {
        transform: rotate(0);
    }
    nav ul.navi .nav-link>i.v-icon {
        color: white;
        font-size: 1.7em;
        margin-right: .5em;
    }
    nav ul.navi .nav-link>span.nav-title {
        line-height: 30px;
        font-weight: 600;
        text-transform: uppercase;
        white-space: nowrap;
        letter-spacing: 1px;
    }
    nav ul.navi .nav-link>.nav-arrow {
        float: right;
        margin-top: 5px;
        margin-right: 0;
        transform: rotate(90deg);
    }
    nav ul.navi .nav-link>.nav-arrow.right {
        transform: rotate(-90deg);
    }
    nav ul.navi>li>ul.child {
        display: none;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    nav ul.navi>li>a.router-link-active+ul.child,
    nav ul.navi>li.active>ul.child {
        display: block;
    }
    nav ul.navi>li>ul.child .nav-link {
        padding: 5px 15px 5px 15px;
    }
    nav ul.navi>li>ul.child .nav-link:hover,
    nav ul.navi>li>ul.child .nav-link.router-link-active {
        background: rgba(255,255,255,.2);
    }
    nav ul.navi>li>ul.child .nav-link>span.nav-title {
        text-transform: capitalize;
        font-weight: 400;
        font-size: 14px;
    }
    .v-btn--absolute.v-btn--bottom, .v-btn--fixed.v-btn--bottom {
        bottom: 52px;
    }



</style>
