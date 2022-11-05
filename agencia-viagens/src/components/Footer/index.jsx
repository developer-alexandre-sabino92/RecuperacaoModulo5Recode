import React from "react";
import "./style.css";
import "./style4.css";
import Imagem1 from "../../assets/img/facebook.png";
import Imagem2 from "../../assets/img/instagram.png";
import Imagem3 from "../../assets/img/Linkedin.png";


export default function Footer(){
    return(
        <footer className="container-fluid py-3">
           
            
          <div className="row">
              <div className="col-md-9">&copy;<strong>Desenvolvido por Alexandre Sabino</strong></div>
              <div className="col-md-1">
                <a href="/"><img width="20px" src={Imagem1} alt="facebook"/></a>
              </div>
              <div className="col-md-1">
                <a href="/"><img width="20px" src={Imagem2} alt="facebook"/></a>
              </div>
              <div className="col-md-1">
                <a href="/"><img src={Imagem3} width="20px" alt=""/></a>
              </div>
          </div>      
      
  
      </footer>
    )
}