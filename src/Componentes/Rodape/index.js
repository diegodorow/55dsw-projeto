import "./rodape.css";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";

const Rodape = () => {
  return (
    <footer className="footer">
      <section className="footer">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/AluraCursosOnline/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="ícone do facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/aluraonline?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="ícone do twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/aluraonline/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="ícone do instagram" />
            </a>
          </li>
        </ul>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
