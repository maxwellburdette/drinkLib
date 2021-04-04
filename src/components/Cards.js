import { useState, useEffect } from "react"
import { Card, Button, Modal, ListGroup } from "react-bootstrap"

export default function Cards({ drink }) {
	const [show, setShow] = useState(false)
	const [ingredients, setIngredients] = useState([])

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	useEffect(() => {
		let array = []
		let obj1 = {
			ingredient: drink.strIngredient1,
			measurement: drink.strMeasure1,
		}
		array.push(obj1)
		let obj2 = {
			ingredient: drink.strIngredient2,
			measurement: drink.strMeasure2,
		}
		array.push(obj2)
		let obj3 = {
			ingredient: drink.strIngredient3,
			measurement: drink.strMeasure3,
		}
		array.push(obj3)
		let obj4 = {
			ingredient: drink.strIngredient4,
			measurement: drink.strMeasure4,
		}
		array.push(obj4)
		let obj5 = {
			ingredient: drink.strIngredient5,
			measurement: drink.strMeasure5,
		}
		array.push(obj5)
		let obj6 = {
			ingredient: drink.strIngredient6,
			measurement: drink.strMeasure6,
		}
		array.push(obj6)
		let obj7 = {
			ingredient: drink.strIngredient7,
			measurement: drink.strMeasure7,
		}
		array.push(obj7)
		let obj8 = {
			ingredient: drink.strIngredient8,
			measurement: drink.strMeasure8,
		}
		array.push(obj8)
		let obj9 = {
			ingredient: drink.strIngredient9,
			measurement: drink.strMeasure9,
		}
		array.push(obj9)
		let obj10 = {
			ingredient: drink.strIngredient10,
			measurement: drink.strMeasure10,
		}
		array.push(obj10)
		let obj11 = {
			ingredient: drink.strIngredient11,
			measurement: drink.strMeasure11,
		}
		array.push(obj11)
		let obj12 = {
			ingredient: drink.strIngredient12,
			measurement: drink.strMeasure12,
		}
		array.push(obj12)
		let obj13 = {
			ingredient: drink.strIngredient13,
			measurement: drink.strMeasure13,
		}
		array.push(obj13)
		let obj14 = {
			ingredient: drink.strIngredient14,
			measurement: drink.strMeasure14,
		}
		array.push(obj14)
		let obj15 = {
			ingredient: drink.strIngredient15,
			measurement: drink.strMeasure15,
		}
		array.push(obj15)
		setIngredients(array)
		// eslint-disable-next-line
	}, [])

	return (
		<div>
			{drink ? (
				<Card className="my-2" style={{ width: "18rem" }}>
					<Card.Img variant="top" src={drink.strDrinkThumb} />
					<Card.Body>
						<Card.Title>{drink.strDrink}</Card.Title>
						<Card.Text>{drink.strInstructions}</Card.Text>
						<Button onClick={handleShow} variant="primary">
							Show Ingredients
						</Button>
					</Card.Body>
				</Card>
			) : (
				""
			)}
			<Modal
				show={show}
				onHide={handleClose}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>{drink.strDrink} ingredients</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ListGroup>
						{ingredients.map((item) =>
							item.ingredient || item.measurement ? (
								<ListGroup.Item key={Math.random()}>
									{item.ingredient ? item.ingredient : ""}
									<br />
									{item.measurement ? <>Amount: {item.measurement}</> : ""}
								</ListGroup.Item>
							) : (
								""
							)
						)}
					</ListGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="success" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
