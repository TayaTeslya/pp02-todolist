import '../App.css';

function Header() {
  return (
    <header className="header-wrapper conteiner">
        <h1 className="header-date">Июнь 2022</h1>
        <div className="header-button-wrapper">
            <button className="header-button">
            <span className="material-symbols-outlined header-button-content">
                chevron_left
            </span>
            </button>
            <button className="header-button">
                <span className="material-symbols-outlined header-button-content">
                    chevron_right
                </span>
            </button>
        </div>
    </header>
  );
}

export default Header;
