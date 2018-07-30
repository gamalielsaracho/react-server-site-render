export function fetchThemes() {
	// body...
	return fetch('http://localhost:3000/api/themes')
		.then(response => response.json())
}

