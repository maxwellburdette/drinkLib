import { useEffect } from "react"
import axios from "axios"
import { Container, Spinner } from "react-bootstrap"
import Cards from "./Cards"

export default function Body({ jsonBody, setJsonBody, url, load, setLoad }) {
	async function getJson() {
		setLoad(true)
		return await axios
			.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + url)
			.then(function (response) {
				// handle success

				setJsonBody(response.data.drinks)
				setLoad(false)
			})
			.catch(function (error) {
				// handle error
				console.log(error)
			})
			.then(function () {
				// always executed
			})
	}

	async function random() {
		setLoad(true)
		return await axios
			.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
			.then(function (response) {
				// handle success
				setJsonBody(response.data.drinks)
				setLoad(false)
			})
			.catch(function (error) {
				// handle error
				console.log(error)
			})
			.then(function () {
				// always executed
			})
	}

	useEffect(() => {
		if (url === "") return
		getJson()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url])

	useEffect(() => {
		random()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div>
			<Container
				style={{ height: "100vh" }}
				className="d-flex flex-column py-2 my-2 align-items-center"
			>
				{load ? (
					<div className="sticky-top my-2">
						<Spinner animation="border" role="status" size="lg">
							<span className="sr-only">Loading...</span>
						</Spinner>
					</div>
				) : jsonBody ? (
					<div className="flex-grow-1 my-2">
						{jsonBody.map((drink) => (
							<Cards key={Math.random()} drink={drink} />
						))}
					</div>
				) : (
					<h1>No Results</h1>
				)}
			</Container>
		</div>
	)
}
