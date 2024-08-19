import "./MainHeader.style.scss";

export const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header__nav navigation">
          <li>
            <img
              className="header__item"
              src="../../assets/menu.svg"
              alt="menu"
            />
          </li>
          <li>
            <img
              className="header__item"
              src="../../assets/arrow.svg"
              alt="arrow"
            />
          </li>
          <li className="navigation__item navigation__item_active">Просмотр</li>
          <li className="navigation__item">Управление</li>
        </ul>
      </nav>
    </header>
  );
};
