import express from 'express'

import cors from 'cors'

import { renderToString } from 'react-dom/server'
import renderFullPage from './renderFullPage'
import React from 'react'

import { StaticRouter, matchPath } from 'react-router-dom'
import routes from '../shared/routes'

import 'isomorphic-fetch';

import App from '../shared/App'


var app = express()

app.use(cors())

app.use(express.static('public')) 

app.get('/api/themes', function(req, res) {
	res.json([
		{
			id:1,
			upvotes: 234,
			title: 'React',
			author: 'gamaliel Saracho',
			date: new Date()
		},
		{
			id:2,
			upvotes: 8000,
			title: 'Pwa',
			author: 'gamaliel Saracho',
			date: new Date()
		}
	])
})

app.get('*', function(req, res, next) {
	const activeRoute = routes.find(route => matchPath(req.url, route)) || {}

	console.log('activeRoute')
	console.log(activeRoute)

	// requestInitialData here.
	console.log('req.path')
	console.log(req.path)
	
	const requestInitialData = 
	activeRoute.fetchInitialData && activeRoute.fetchInitialData(req.path)
	

	Promise.resolve(requestInitialData)
	.then(initialData => {
		console.log('solicitud de dato inicial segun la ruta.')
		console.log(requestInitialData)

		const context = {initialData}

		var markup = renderToString(
			<StaticRouter location={req.url} context={context}>
				<App/>
			</StaticRouter>
		)

		console.log('hola')


		// initialData = []
		res.send(renderFullPage(markup, initialData))
	})
	.catch((error) => {
		console.log(error)
	})
})

app.listen(3000, function() {
	console.log('Server is listening on port 3000')
})