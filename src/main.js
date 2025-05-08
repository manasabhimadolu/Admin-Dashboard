import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHeart,
  faMessage,
  faStore,
  faList,
  faBox,
  faTag,
  faCalendar,
  faClipboardList,
  faPhone,
  faFileInvoice,
  faChartBar,
  faUsers,
  faTable,
  faCog,
  faSignOutAlt,
  faBars,
  faMagnifyingGlass,
  faBell,
  faUser,
  faCircleChevronDown,
  faChartLine,
  faClockRotateLeft,
  faArrowUp,
  faArrowDown,
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHeart,
  faMessage,
  faStore,
  faList,
  faBox,
  faTag,
  faCalendar,
  faClipboardList,
  faPhone,
  faFileInvoice,
  faChartBar,
  faUsers,
  faTable,
  faCog,
  faSignOutAlt,
  faBars,
  faMagnifyingGlass,
  faBell,
  faUser,
  faCircleChevronDown,
  faChartLine,
  faClockRotateLeft,
  faArrowUp,
  faArrowDown,
  faBoxOpen,
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(naive)

app.mount('#app')
