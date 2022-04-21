import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Star Wars</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="/films" end>Films</Nav.Link>
						<Nav.Link as={NavLink} to="/people" end>People</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		</div>
	)
}

export default Navigation
