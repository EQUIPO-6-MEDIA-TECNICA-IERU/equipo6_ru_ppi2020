import React from "react";
import "../Style/Style.css";
import Camapana_img from "../Images/campana.png";

class InicioUsuarios extends React.Component {
  render() {
    return (
      <div>
        <div>
          <header class="bg-primary text-white text-center">
            <div id="tNotificacion">
              <h1>Notificaciones</h1>
            </div>
          </header>

          <br />

          <h4 id="aviso" class="text-center text-danger">
            Aquí podrás ver la información
            <br/> de tu alerta
          </h4>

          <br />
          <br />

          <section>
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="d-flex justify-content-center notificacion">
                    <img
                      src={Camapana_img}
                      alt="icon"
                      class="img-thumbnail imgc"
                    />
                    <a class="letra text-center" href="/vistaAlerta3">Se ha finalizado el reporte s2e3</a>
                  </div>
                </div>
              </div>

              <br />

              <div class="col">
                <div class="d-flex justify-content-center notificacion">
                  <img
                    src={Camapana_img}
                    alt="icon"
                    class="img-thumbnail imgc"
                  />
                  <a class="letra text-center" href="/vistaAlerta3"> La docente Laura ha actualizado 
                    <br/> tu reporte</a>
                </div>
              </div>

              <br />

              <div class="col">
                <div class="d-flex justify-content-center notificacion">
                  <img
                    src={Camapana_img}
                    alt="icon"
                    class="img-thumbnail imgc"
                  />
                  <a class="letra text-center" href="/vistaAlerta3">Tu proceso está activo en este mo-
                    <br/>mento
                     </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default InicioUsuarios;
