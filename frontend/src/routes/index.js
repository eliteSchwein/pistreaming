import Dashboard from '../pages/Dashboard.vue'
import Stream from '../pages/Stream.vue'
import Snapshot from '../pages/Snapshot.vue'
import Settings from '../pages/Settings.vue'

const routes = [
    {
        title: "Dashboard",
        path: '/',
        icon: 'monitor-dashboard',
        component: Dashboard,
        alwaysShow: true,
    },
    {
        title: "Stream",
        path: '/stream-example',
        icon: 'video',
        component: Stream,
        alwaysShow: true,
    },
    {
        title: "Snapshot",
        path: '/snapshot-example',
        icon: 'camera',
        component: Snapshot,
        alwaysShow: true,
    },
    {
        title: "Settings",
        path: '/settings',
        icon: 'cog',
        component: Settings,
        alwaysShow: true,
    },


];

export default routes;