import "../styles/BoxProjeto.css";

function BoxProjeto(prop) {
  return (
    <section className="container_box_projeto">
      <div className="container_box_projeto-box1">
        <h1>{prop.titulo}</h1>
        <p>
         {prop.texto}
        </p>
        <h2>Tecnologias usadas neste projeto</h2>

        <div>
          <img src="/imagens/icons/Html5.svg" alt="icone-html5"></img>
          <img src="/imagens/icons/CSS3.svg" alt="icone-css3"></img>
          <img src="/imagens/icons/JavaScript.svg" alt="icone-js"></img>
          <img src="/imagens/icons/React.svg" alt="icone-react"></img>
        </div>
      </div>

      <div className="container_box_projeto-box2">
        <div className="container_box_projeto-box2-div">
          <h1 className="container_box-h1">Mochila De Viagem </h1>
          <div className="container_box2-demo-codigo">
            <a
              className="container-text"
              href="https://google.com"
              target="_blank"
              rel="noreferrer "
            >
              <div>Demo</div>
            </a>
            <a
              className="container-text"
              href="https://google.com"
              target="_blank"
              rel="noreferrer "
            >
              <div>Código</div>
            </a>
            <a
              className="container-icone"
              href="https://google.com"
              target="_blank"
              rel="noreferrer "
            >
              <img src="/imagens/icons/Cancel.svg" alt="icone-fechar"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BoxProjeto;
