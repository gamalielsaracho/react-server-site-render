import React, { Component } from 'react'

class App extends Component {

	render() {
		return <div>
			<h3>Menú</h3>

			{ this.props.childen }

			<h3>Footer.</h3>
		</div>
	}
}

export default App