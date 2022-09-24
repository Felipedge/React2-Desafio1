import Logo from "../Logo/Logo.png";
import '../styles/home.css'


export default function Home() {
    return (
        <div className="home-page" >
            <h1 className="titulo" >Bienvenidos a <strong>Happy Cake</strong> </h1>
            <h4 className="subtitulo" >El lugar de los pasteles felices </h4>
            <img className="img-logo" src={Logo} alt="" />

        </div>
    );
}
