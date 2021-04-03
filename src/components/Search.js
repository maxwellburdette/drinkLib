import React from "react"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import axios from "axios"

export default function Search({ setUrl, setJsonBody, setLoad }) {
	function searchDrink(e) {
		setUrl(e.target.childNodes[0].value)
		e.target.childNodes[0].value = ""
	}
	async function generateLink() {
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

	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Drink Library</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link onClick={generateLink}>Generate Random Drink</Nav.Link>
				</Nav>
				<Form onSubmit={searchDrink} inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button type="submit" variant="outline-info">
						Search
					</Button>
				</Form>
			</Navbar>
		</div>
	)
}
