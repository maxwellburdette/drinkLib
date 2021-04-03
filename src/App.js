import { useState } from "react"
import Search from "./components/Search"
import Body from "./components/Body"
function App() {
	const [jsonBody, setJsonBody] = useState([])
	const [url, setUrl] = useState("")
	const [load, setLoad] = useState(false)
	return (
		<div className="App">
			<Search
				className="sticky-top"
				setUrl={setUrl}
				setJsonBody={setJsonBody}
				setLoad={setLoad}
			></Search>
			<Body
				jsonBody={jsonBody}
				setJsonBody={setJsonBody}
				url={url}
				load={load}
				setLoad={setLoad}
			></Body>
		</div>
	)
}

export default App
