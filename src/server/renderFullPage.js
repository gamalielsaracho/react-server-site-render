
export default function renderFullPage(html, preloadedState) {
	return `<!DOCTYPE html>
		<html>
		<head>
			<title>Server site react</title>
			<script src='/bundle.js' defer></script>
			<script>
				window.__initialData__ = ${JSON.stringify(preloadedState)}
			</script>

		</head>
		<body>
		<div id='app'>${html}</div>
	</body>
	</html>`
}