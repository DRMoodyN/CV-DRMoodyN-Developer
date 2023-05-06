import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <section className="section-left">
          <div className="perfil">
            <figure className="img-perfil">
              <img src="./assets/perfil.jpeg" alt="" />
            </figure>
          </div>
          <h2>Educacion</h2>
          <hr className="linia" />
          <div className="information">
            <li>
              <ul>Bachiller Ciencias y Letras</ul>
              <p className="info-text">Gaspar Garcia Laviana</p>
              <p className="info-text">2014</p>
              <ul>Estudiante de Ingeniera de Sistema</ul>
              <p className="info-text">Universidad Nacional Ingenieria</p>
              <p className="info-text">2020-2023 | Actualmente</p>
              <ul>Estudiante en Udemy.com</ul>
              <p className="info-text">Plataforma virtual</p>
              <p className="info-text">2023 | Actualmente</p>
            </li>
            <h2>Referencias</h2>
            <hr className="linia" />
            <div className="information">
              <li>
                <ul>Ingeniero Edman Mena</ul>
                <p className="info-text">
                  Cordinador de Desarrollo | Lafise group
                </p>
                <p className="info-text">Full Stack</p>
                <p className="info-text">2019</p>
              </li>
            </div>
          </div>
          <h2 className="contacto">Contacto</h2>
          <hr className="linia" />
          <div className="information">
            <li className="li-final">
              <ul className="ul-container">
                <section className="linie-style"></section>
                <section className="ul-style">Direccion</section>
              </ul>
              <p className="info-text">Managua-Tipitapa</p>
              <ul className="ul-container">
                <section className="linie-style"></section>
                <section className="ul-style">Telefono</section>
              </ul>
              <p className="info-text">+505 7661-0944</p>

              <ul className="ul-container">
                <section className="linie-style"></section>
                <section className="ul-style">Correo</section>
              </ul>
              <p className="info-text">drmoodyn@gmail.com</p>
              <ul className="ul-container">
                <section className="linie-style"></section>
                <section className="ul-style">Github</section>
              </ul>
              <p className="info-text">
                <a>https://github.com/DRMoodyN</a>
              </p>
            </li>
          </div>
        </section>
        <section className="section-right">
          <section className="section-separador"></section>
          <section className="section-nombre">
            <blockquote>
              <h1 className="nombre">David Moody</h1>
              <h2 className="profesion">Analista Programador Backend</h2>
            </blockquote>
          </section>
          <ul>
            <li>
              <h3>Acerca de mi</h3>
              <hr className="hr-h"></hr>
              <p>
                Soy una persona responsable, respetuosa, honesta, siempre me
                gusta aprender nuevas cosas, me gusta la musica, las peliculas y
                la comida
              </p>
            </li>
            <li>
              <h3>Experiencia</h3>
              <hr className="hr-h"></hr>
              <div className="experiencia">
                <section className="experiencia-1">
                  <h4>2023 | Actualmente</h4>
                </section>
                <section className="experiencia-2 title-2">
                  <h4>Analista Programador</h4>
                  <h5>Lafise Group</h5>
                </section>
              </div>
            </li>
            <li>
              <h3>Actitudes</h3>
              <hr className="hr-h"></hr>
              <ul className="ul-titulos">
                <li className="li-title">
                  <h4 className="title-4">Base de datos</h4>
                  <ul>
                    <li className="li-title-sub">1-SQL Server</li>
                    <li className="li-title-sub">2-Mongo</li>
                  </ul>
                  <h4 className="title-4">Net Core 6</h4>
                  <ul>
                    <li className="li-title-sub">1-C#</li>
                    <li className="li-title-sub">2-LINQ</li>
                    <li className="li-title-sub">3-EF</li>
                    <li className="li-title-sub">4-WebAPIs</li>
                    <li className="li-title-sub">5-AspNetCore</li>
                  </ul>
                  <h4 className="title-4">Python</h4>
                  <ul>
                    <li className="li-title-sub">1-Django</li>
                    <li className="li-title-sub">2-Rest-Framework</li>
                  </ul>
                  <h4 className="title-4">NodeJs</h4>
                  <ul>
                    <li className="li-title-sub">1-Sequealize</li>
                    <li className="li-title-sub">2-Express</li>
                  </ul>
                  <h4 className="title-4">Web Basic</h4>
                  <ul>
                    <li className="li-title-sub">1-Html</li>
                    <li className="li-title-sub">2-Css</li>
                    <li className="li-title-sub">3-JavaScript</li>
                    <li className="li-title-sub">4-React</li>
                  </ul>
                  <h4 className="title-4">Otros</h4>
                  <ul>
                    <li className="li-title-sub">1-Slack</li>
                    <li className="li-title-sub">2-Trello</li>
                    <li className="li-title-sub">3-AWS</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
