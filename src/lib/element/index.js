import Vue from 'vue'
import { Message, Pagination, Button, Progress } from 'element-ui'

Vue.use(Pagination)
Vue.use(Button)
Vue.use(Progress)

Vue.prototype.$m = Message
