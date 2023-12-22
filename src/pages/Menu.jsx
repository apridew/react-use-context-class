import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Navbar from "../components/Navbar";
import { MenuContext } from "../context/MenuProvider";

const Menu = () => {
  const { theme } = useContext(ThemeContext);
  const { list } = useContext(MenuContext);

  // console.log(list);

  return (
    <div className={theme ? "dark-theme" : "light-theme"}>
      <Navbar />
      <div className="content">
        <h1>Menu</h1>
        <div className="card-wrapper d-flex gap-3 flex-wrap flex-md-nowrap">
          {!list.length ? (
            <div className="wrapper-spinner">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden"></span>
              </div>
            </div>
          ) : (
            list.map((item) => (
              <div
                className={`card ${theme ? "dark-content" : "light-content"}`}
                key={item.id}
              >
                <img src={item.imageUrl} alt={item.name} className="shadow" />
                <div className="card-body d-flex flex-column gap-2">
                  <p className="card-title text-uppercase fw-bold border-bottom border-3 pb-3">
                    {item.name}
                  </p>
                  <p className="fst-italic">{item.description}</p>
                  <p className="fw-bold">{item.priceFormatted}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
