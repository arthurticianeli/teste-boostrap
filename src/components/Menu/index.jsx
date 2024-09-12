export function Menu() {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="navbar-collapse collapse" id="menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link">Home</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Exemplo 1</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Exemplo 2</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
