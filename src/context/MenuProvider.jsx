import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getMenuList();
  }, []);

  const getMenuList = async () => {
    try {
      const res = await axios.get(`
            https://api.mudoapi.tech/menus`);

      setList(res.data.data.Data);
      console.log(res.data.data.Data);

      return res;
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <MenuContext.Provider value={{ list }}>{children}</MenuContext.Provider>
  );
};
