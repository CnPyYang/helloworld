import { createApp } from 'vue'
import App from './index.vue'
import router from './router'
import { Collapse, CollapseItem, Field, Picker, Toast } from 'vant'

const app = createApp(App)
app.use(Field)
app.use(Picker)
app.use(Collapse)
app.use(CollapseItem)
app.use(Toast)

app.use(router).mount('#app')
