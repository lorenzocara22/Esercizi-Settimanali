// Importiamo alcuni elementi grafici da Bootstrap
import { Card, Col, Row } from "react-bootstrap";

// Importiamo la lista di libri dal file JSON
import fantasy from "../data/fantasy.json";

// Creiamo il componente che mostra i libri
const AllTheBooks = () => {
  return (
    <Row className="g-2">
      {/* Per ogni libro nel file JSON, creiamo una card */}
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover d-flex flex-column">
              {/* Immagine del libro */}
              <Card.Img variant="top" src={book.img} />

              {/* Titolo del libro */}
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

// Esportiamo il componente per poterlo usare in altri file
export default AllTheBooks;
