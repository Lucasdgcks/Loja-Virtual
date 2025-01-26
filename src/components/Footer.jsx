import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Loja Virtual. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
