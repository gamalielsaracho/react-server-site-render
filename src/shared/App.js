// Entry point aplication.
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

const App = () => {
	return (
		<div>
		<h1>menuuu.</h1>
		<Switch>
			{ 
				routes.map(({path, exact, component: C, ...rest}) => {
					return <Route 
						key={path}
						path={path}
						exact={exact}
						render={(props) => (
							<C {...props} {...rest} />
						)}
					/>
				})
			}
		</Switch>
		</div>
	)
}

export default App