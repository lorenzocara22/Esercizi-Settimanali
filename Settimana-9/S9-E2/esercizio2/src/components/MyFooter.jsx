// Creiamo il componente del piè di pagina
const MyFooter = () => (
  <footer className="d-flex bg-dark mt-2">
    <span className="text-white m-auto p-2">
      {/* Mostra il copyright con l'anno corrente */}
      <strong>EPICODE</strong> - Copyright {new Date().getFullYear()}
    </span>
  </footer>
);

// Esportiamo il piè di pagina per poterlo usare in altri file
export default MyFooter;
