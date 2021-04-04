import React from "react"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import axios from "axios"

export default function Search({ setUrl, setJsonBody, setLoad }) {
	function searchDrink(e) {
		e.preventDefault()
		setUrl(e.target.childNodes[0].value)
		e.target.childNodes[0].value = ""
	}
	async function generateLink() {
		setLoad(true)
		return await axios
			.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
			.then(function (response) {
				// handle success]
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
		<Navbar collapseOnSelect sticky="top" bg="dark" variant="dark" expand="lg">
			<Navbar.Brand href="#home">Drink Library</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto py-2">
					<Nav.Link onClick={generateLink} href="#home">
						Generate Random Drink
					</Nav.Link>
				</Nav>
				<Form collapseOnSelect onSubmit={searchDrink} inline>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2 py-2"
					/>
					<Button type="submit" className="my-2" variant="outline-primary">
						Search
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	)
}
