import "./MainPage.style.scss";
import classNames from "classnames";
import itemIcon from "../../assets/menu-item-icon.svg?url";
import arrowDownIcon from "../../assets/arrow-down.svg?url";

const menuItems = [
  "По проекту",
  "Объекты",
  "РД",
  "МТО",
  "СМР",
  "График",
  "МиМ",
  "Рабочие",
  "Капвложения",
  "Бюджет",
  "Финансирование",
  "Панорамы",
  "Камеры",
  "Поручения",
  "Контрагенты",
];

export const MainPage = () => {
  return (
    <main className="main">
      <section className="menu">
        <div className="menu__header">
          <div>
            <p>Название проекта</p>
            <p className="menu__small-text">Аббревиатура</p>
          </div>
          <img src={arrowDownIcon} alt="arrow" />
        </div>
        <ul className="menu__project-list project-list">
          {menuItems.map((item) => (
            <li
              className={classNames("project-list__item", {
                "project-list__item_active": item === "СМР",
              })}
              key={item}
            >
              <img className="project-list__icon" src={itemIcon} alt="icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="table">
        <div className="table__title">Строительно-монтажные работы</div>
      </section>
    </main>
  );
};
