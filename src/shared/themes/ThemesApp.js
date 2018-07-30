import React, { Component } from 'react'
import ThemesList from './ThemesList'

class ThemesApp extends Component {
	constructor(props) {
		super(props)

		// console.log('props.staticContext')
		// console.log(props.staticContext)

		let initialData
		if(props.staticContext) {
			initialData = props.staticContext.initialData
		} else {
			initialData = window.__initialData__;
			delete window.__initialData__;
		}

		// console.log('props.initialData')
		// console.log(props.initialData)

		this.state = {
			loading: initialData ? false : true,
			themes: initialData
		}

		this.fetchThemes = this.fetchThemes.bind(this)
	}

	fetchThemes() {
		this.setState({ loading:true })

		this.props.fetchInitialData()
		.then((data) => this.setState({ loading:false, themes: data }))
	}

	componentDidMount() {
		if (!this.state.themes) {
			console.log('this.props.match.params')
			console.log(this.props.match.params)

			this.fetchThemes()
		}
	}

	render() {

		const { themes, loading } = this.state

		return <ThemesList loading={loading} themes={themes}/>
	}
}

export default ThemesApp