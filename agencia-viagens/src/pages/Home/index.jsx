import React from "react";
import "./style.css";
import "./style2.css";


import Imagem1 from "../../assets/img/rj1.jpg";
import Imagem2 from "../../assets/img/alagoas1.jpg";
import Imagem3 from "../../assets/img/arraialdocabo1.jpg";
import Imagem4 from "../../assets/img/aviao.svg";
import Imagem5 from "../../assets/img/cartao.svg";
import Imagem6 from "../../assets/img/navio.svg";
import Imagem7 from "../../assets/img/fotocasal2.jpg";
import Imagem8 from "../../assets/img/cruzeiro2.jpg";
import Imagem9 from "../../assets/img/dentrodoaviao.jpg";









export default function Home() {
  return (
    <main>
      <section className="one">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Imagem1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h1 ><strong>Rio de Janeiro</strong></h1>
                      <p><strong>Passe 3 noites incríveis no maior cartão postal do Brasil</strong>.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={Imagem2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h1 className="h1-1" ><strong>Alagoas</strong></h1>
                      <p><strong>Venha curtir sua lua de mel nesse local paradisíaco</strong>.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={Imagem3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h1><strong>Arraial do Cabo</strong></h1>
                      <p><strong>Considerado o "Caribe Brasileiro", conheça Arraial do Cabo</strong>.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="two">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 text-center">
              <img src={Imagem4} className="bd-placeholder-img rounded-circle border border-dark p-3 " width="120" height="120" />
              <h2 className="fw-arial mt-2 text-center">Passagem </h2>
              <p className="ms-2 text-center">Aqui sua passagem de avião sai muito mais barato.</p>
              <p className="btn btn-dark">Comprar Agora</p>
            </div>
            <div className="col-lg-4 text-center">
              <img src={Imagem5} className="btn btn-dark text-center" width="120" height="120" />
              <h2 className="fw-arial mt-2 text-center"> Pagamento</h2>
              <p className="ms-2 text-center">Facilitamos seu pagamento em 12x <br></br>sem juros. </p>
              <p className="btn btn-dark">Comprar Agora</p>
            </div>
            <div className="col-lg-4 text-center ">
              <img src={Imagem6} className="bd-placeholder-img rounded-circle border border-dark p-3 ms-5" width="120" height="120" />
              <h2 className="fw-arial mt-2 text-center">Cruzeiros</h2>
              <p className="text-center">Temos parcerias com os melhores cruzeiros do mundo.</p>
              <p className="btn btn-dark">Comprar Agora</p>
            </div>
          </div>
        </div>
      </section>
      <section className="three">
        <div className="container">
          <div className="row featurette rounded">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-arial  ms-5">AQUI TEMOS DESTINOS INCRÍVEIS PARA VOCÊ APROVEITAR COM QUEM AMA.</h2>
              <p className="lead fw-arial ms-5">Não perca tempo e faça agora sua reserva.</p>
              <p id="centralizabotao" className="btn btn-dark">Comprar Agora</p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid rounded" src={Imagem7} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="four">
        <div className="container">
          <div className="row featurette" >
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-arial">DIVIRTA-SE EM UM DOS MAIORES CRUZEIROS DO MUNDO.</h2>
              <p className="lead fw-arial ms-5">Encontre com artistas e famosos, a bordo de um dos maiores transatlânticos do mundo, a felicidade esta à beira-mar.</p>
              <p id="centralizabotao" className="btn btn-dark">Comprar Agora</p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid rounded" src={Imagem8} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="five">
        <div className="container">
          <div className="row featurette rounded" >
            <div className="col-md-7">
              <h2 className="featurette-heading fw-arial">CUIDAMOS DA SUA PASSAGEM AÉREA.</h2>
              <p className="lead fw-arial ms-5">Economize tempo e dinheiro, nós iremos cuidar de toda parte burocrática para você.</p>
              <span id="centralizabotao" className="btn btn-dark">Comprar Agora</span>
            </div>
            <div className="col-md-5">
              <img className="img-fluid rounded" src={Imagem9} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main >
  )
}

