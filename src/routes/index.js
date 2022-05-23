import { Home } from '../Pages'
import { DisCoverContainer } from '../Pages';
import { Short } from '../Pages';
import { Subscribe } from '../Pages';
import { Library } from '../Pages';
import { History } from '../Pages';
import { HistoryComunity } from '../Pages';
import { HomeChannel } from '../Pages';
import { VideoChannel } from '../Pages';
import { Channel } from '../Pages';
import { About } from '../Pages';
import { UserSubscribe } from '../Pages';
import { UserLibrary } from '../Pages';
import Login from '../Firebase/Login';
const publicRoute = [
    { path: '/', component: Home },
    { path: '/discover', component: DisCoverContainer },
    { path: '/short', component: Short },
    { path: '/subscriptions', component: Subscribe },
    { path: '/library', component: Library },
    { path: '/history', component: History },
    { path: '/history/comunity_history', component: HistoryComunity },
]

const publicRouteSpecial = [
    { path: '/login', component: Login },
]

const privateRouteSpecial = [

    { path: '/user/subscriptions', component: UserSubscribe },
    { path: '/user/library', component: UserLibrary },
]

const privateRoute = [
    { path: '/yourchannel/featured', component: HomeChannel },
    { path: '/yourchannel/video', component: VideoChannel },
    { path: '/yourchannel/channel', component: Channel },
    { path: '/yourchannel/about', component: About },
]

export { publicRoute, privateRoute, privateRouteSpecial, publicRouteSpecial };