// routes configuration.
import { fetchThemes } from './themes/api'

import Home from './home'
import ThemesApp from './themes/ThemesApp'
import ShowTheme from './themes/ShowTheme'


const routes = [
	{
		path: '/',
		component: Home,
		exact: true
	}, 
	{
		path:'/themes',
		component: ThemesApp,
		fetchInitialData: () => fetchThemes()
	},
	{
		path:'/themes/:idTheme',
		component: ShowTheme
	}
	
]

export default routes