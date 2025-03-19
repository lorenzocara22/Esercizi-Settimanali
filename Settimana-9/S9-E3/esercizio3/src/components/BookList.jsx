// Importiamo Component per creare un componente a stato (Class Component)
import { Component } from "react";
// Importiamo il componente SingleBook per mostrare i singoli libri
import SingleBook from "./SingleBook";
// Importiamo alcuni elementi di Bootstrap
import { Col, Form, Row } from "react-bootstrap";

// Creiamo la classe BookList che riceve una lista di libri (books) come props
class BookList extends Component {
  // Lo stato iniziale del componente contiene solo la stringa di ricerca
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        {/* Righe e colonne per centrare il campo di ricerca */}
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            {/* Campo di input per cercare un libro */}
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro" // Testo dentro l'input
                value={this.state.searchQuery} // Il valore è legato allo stato
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                // Ogni volta che l'utente scrive, aggiorniamo lo stato
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Sezione per mostrare i libri */}
        <Row className="g-2 mt-3">
          {/* Filtriamo i libri in base alla ricerca e li mostriamo */}
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            ) // Mantiene solo i libri con un titolo che contiene la ricerca
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                {/* Passiamo ogni libro come prop al componente SingleBook */}
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

// Esportiamo BookList per poterlo usare in altri file
export default BookList;
