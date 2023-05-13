import { FaSearch } from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <section className="header-logo">
          <img src="./assets/logo.jpeg" alt="logo" />
        </section>
        <section className="header-menu">
          <img src="./assets/menu.jpeg" alt="menu" />
        </section>
      </header>
      <div className="home">
        <section className="home-img">
          <section className="home-bg-img">
            <h1>
              Be a Part <br />
              of Something Big
            </h1>
          </section>
        </section>
        <section className="home-form">
          <section>
            <p>
              SEARCH ALL <br />
              DEALLER JOBS{" "}
            </p>
          </section>
          <form className="form-input">
            <input
              type="text"
              placeholder="Job Title, Keyworkd, Category, or Dealership"
            />
            <input type="text" placeholder="City or Postal Code" />
            <button className="btn-search">
              <i>
                <FaSearch />{" "}
              </i>
            </button>
          </form>
          <a href="" className="home-info">
            View All Jobs at John Deere Dealerships
          </a>
        </section>
      </div>
      <div className="main"></div>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
