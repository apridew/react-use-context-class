import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const SwitchTheme = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          onChange={handleTheme}
          checked={theme}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          {theme ? (
            <i className="bi bi-moon-stars-fill"></i>
          ) : (
            <i className="bi bi-sun-fill text-warning"></i>
          )}
        </label>
      </div>
    </>
  );
};

export default SwitchTheme;
