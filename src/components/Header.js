import Troll from "../img/troll.jpg";
export default function Header() {
  return (
    <header className="header">
      <img src={Troll} className="header-image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
