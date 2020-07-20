import Link from "next/link";

export interface NavProps {}

const Nav: React.SFC<NavProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        BIEF Company
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto" style={{marginLeft: 20}}>
          <li className="nav-item" style={{marginRight: 10}}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="nav-item" style={{marginRight: 10}}>
            <Link href="/martin">
              <a>Martín</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/mauro">
              <a>Mauro</a>
            </Link>
          </li>
        </ul>
        <span className="navbar-text">SSR simple CRUD with TS</span>
      </div>
    </nav>
  );
};

export default Nav;
