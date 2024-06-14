import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { SiProton } from "react-icons/si";
import { LinkContainer } from "react-router-bootstrap";

const header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                   <LinkContainer to="/">
                   <Navbar.Brand ><SiProton /> ProShop</Navbar.Brand>
                   </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                           <LinkContainer to="/cart">
                           <Nav.Link ><FaShoppingCart /> </Nav.Link>
                           </LinkContainer>
                           <LinkContainer to="/user">
                           <Nav.Link href="/"><FaUser />Sign in</Nav.Link>
                           </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default header