import React, { Component } from 'react'
import { Link } from "react-router-dom";


class ThemesList extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { themes, loading } = this.props

		console.log(themes)
		if(loading == true) {
			return <h1>Loading...</h1>
		} else {
			return <div>
				{
					themes.map((t) => {
						return <div key={t.id}>
					        <Link to={`/themes/${t.id}`}><h1>{ t.title }</h1></Link>
							
						</div>
					})
				}
			</div>
		}
	}
}

export default ThemesList