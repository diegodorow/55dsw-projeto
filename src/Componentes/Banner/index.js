import banner from "./banner.png";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <h1>Seja bem vindo</h1>
      <img src={banner} alt="Imagem da terra vista do espaço" />
    </div>
  );
}
