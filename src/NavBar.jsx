import Search from "./Search";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav id="NavBar" className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MirrowIA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="container-fluid navbar-nav d-flex justify-content-between">
            <div className="d-flex">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
              <div className="dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item my-2" type="button">
                     Categoria 1
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item my-2" type="button">
                    Categoria 2
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item my-2" type="button">
                    Categoria 3
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item my-2" type="button">
                    Categoria 4
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item my-2" type="button">
                    Categoria 5
                    </button>
                  </li>
                </ul>
              </div>
              <a className="nav-link" href="#">
                Publicar
              </a>
              <Search />
            </div>
            <div className="d-flex">
              <CartWidget />
              <div>
                <a className="navbar-brand ms-3" href="#">
                  Usuario
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
