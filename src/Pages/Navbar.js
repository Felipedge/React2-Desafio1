import Logo from "../Logo/Logo.png";
import '../styles/navbar.css'
import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-danger">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav text-white">
                        <li class="nav-item">
                            <NavLink to="/" class="nav-link text-white " href="#">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="Contact" class="nav-link text-white" href="#">Contact</NavLink>
                        </li>

                    </ul>
                </div>
                <img className="logo" src="{Logo}" />
                <a class="navbar-brand text-white" href="/">HAPPYCAKE</a>

            </div>
        </nav>


    );
}

