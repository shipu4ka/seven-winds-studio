import "./MainHeader.style.scss";
import menuIcon from "../../assets/menu.svg?url";
import arrowIcon from "../../assets/arrow.svg?url";

export const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header__nav navigation">
          <li>
            <img className="header__item" src={menuIcon} alt="menu" />
          </li>
          <li>
            <img className="header__item" src={arrowIcon} alt="arrow" />
          </li>
          <li className="navigation__item navigation__item_active">Просмотр</li>
          <li className="navigation__item">Управление</li>
        </ul>
      </nav>
    </header>
  );
};
