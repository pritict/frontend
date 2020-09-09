import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './components/MainPage'
import TodoPage from './components/TodoPage'
import CalculPage from './components/CalculPage'
import KakaoApi from './components/KakaoApi'

Vue.use(Router)

export default new Router({
	mode : 'history',
	routes : [
		{
			path : '/',
			name : 'main',
			component : MainPage
		},
		{
			path : '/todo',
			name : 'todo',
			component : TodoPage
		},
		{
			path : '/calcul',
			name : 'calcul',
			component : CalculPage
		},
		{
			path : '/kakaoapi',
			name : 'kakaoapi',
			component : KakaoApi
		}
	]
})