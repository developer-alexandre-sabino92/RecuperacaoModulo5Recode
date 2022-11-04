import React from "react";
import "./style.css";
import "./style3.css";
import Imagem1 from "../../assets/img/balão.png";


export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <xpto>
                    <img id="logo" src={Imagem1} alt="logo" /><br></br>
                    VIA <span class="yello">JANDO</span>
                </xpto>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav  mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a id="white" class="nav-link active" aria-current="page" href="/">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a id="white" class="nav-link" href="/">DESTINO</a>
                        </li>
                        <li class="nav-item">
                            <a id="white" class="nav-link" href="/">CONTATO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-item nav-link active" href="/">
                                <button id="estilo" type="submit" class="btn btn-primary">PROMOÇÕES</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}