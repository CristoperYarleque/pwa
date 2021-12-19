function Footer() {
  return (
    <footer className="text-white fixed-bottom bg-black">
      <div className="container">
        <nav>
          <div className="container">
            <p className="text-center">
              &copy;{new Date().getFullYear()} Pokedex Todos los derechos
              reservados | Terminos y Condiciones | Politicas de Privacidad
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
