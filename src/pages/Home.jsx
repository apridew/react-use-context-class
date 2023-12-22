import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Navbar from "../components/Navbar";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [showPopUp, setShowPopUp] = useState(false);

  // console.log(theme);
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    setShowPopUp(!showPopUp);
  };

  const handleReset = () => {
    setForm({
      username: "",
      password: "",
    });
    setShowPopUp(!showPopUp);
  };

  return (
    <div className={theme ? "dark-theme" : "light-theme"}>
      <Navbar />
      <div className="content">
        <h1>Home</h1>
        <div className="content">
          <div className="form d-flex gap-2 flex-column">
            <label htmlFor="inputUsername" className="form-label">
              Username
            </label>
            <input
              id="inputUsername"
              onChange={handleInput}
              name="username"
              type="text"
              className="form-control"
              autoComplete="off"
              value={form.username}
            />
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              id="inputPassword"
              onChange={handleInput}
              name="password"
              type="password"
              className="form-control"
              autoComplete="off"
              value={form.password}
            />
            <div className="wrapper-button d-flex gap-3 my-3">
              <button onClick={handleLogin} className="btn btn-primary w-100">
                {showPopUp ? "Close" : "Login"}
              </button>
              <button onClick={handleReset} className="btn btn-danger w-100  ">
                Reset
              </button>
            </div>
            {showPopUp && (
              <div className="border text-center p-3">
                <p className="fw-bold">This is your data</p>
                <p>Username : {form.username}</p>
                <p>Password : {form.password}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
