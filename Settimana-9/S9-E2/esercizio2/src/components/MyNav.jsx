// Importiamo gli elementi di navigazione di Bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";

// Creiamo un componente chiamato MyNav
const MyNav = () => (
  <Navbar
    expand="lg" // Rende la navbar espandibile su schermi grandi
    className="bg-body-tertiary mb-3"
    bg="dark" // Colore di sfondo scuro
    data-bs-theme="dark" // Tema scuro
  >
    <Container fluid>
      {/* Nome del nostro sito */}
      <Navbar.Brand href="#">EpiBooks</Navbar.Brand>

      {/* Bottone per aprire la navbar su schermi piccoli */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Contenuto della navbar */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* Link di navigazione */}
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

// Esportiamo la navbar per usarla in altri file
export default MyNav;
