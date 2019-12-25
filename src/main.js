import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.Goto = function (path) {
	this.$router.push(path);
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
