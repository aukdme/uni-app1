import Vue from 'vue'
import App from './App'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

Vue.prototype.$Classification = {
	BASEURL: 'https://agent.edu212.com',
	userToken: '',
	userid: '',
	loginUrl: '',
	commonUrl: '',
	loginToUrl: () => {},
	connectSocketInit: () => {},
	iv: '',
	encryptedData: '',
	uniqueFlag: '',
	BASEWS: '',
	openid: ''
}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
