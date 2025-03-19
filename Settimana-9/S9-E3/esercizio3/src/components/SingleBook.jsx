// Importiamo Component per creare un componente a stato (Class Component)
import { Component } from "react";
// Importiamo il componente Card di Bootstrap
import { Card } from "react-bootstrap";

// Creiamo la classe SingleBook che rappresenta un singolo libro
class SingleBook extends Component {
  // Lo stato iniziale tiene traccia se il libro è selezionato o meno
  state = {
    selected: false,
  };

  render() {
    return (
      // La card rappresenta un libro e cambia bordo se viene selezionato
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        // Se il libro è selezionato, aggiunge un bordo rosso, altrimenti nessuno
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
      >
        {/* Immagine del libro */}
        <Card.Img variant="top" src={this.props.book.img} />

        {/* Titolo del libro */}
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

// Esportiamo SingleBook per poterlo usare in altri file
export default SingleBook;
