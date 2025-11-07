import { useEffect, useState } from "react";
import data from "../../public/data.json";
import { v4 as uuidv4 } from "uuid";

export function useExtensions() {
  const [extensions, setExtensions] = useState([]);
  const BASE_PATH = import.meta.env.BASE_URL;
  const newData = () => {
    const newData = data.map((item) => {
      const logoPath = `${BASE_PATH}assets/${item.logo}`;
      return {
         id: uuidv4(),
         ...item, 
         logo: logoPath };
    });
    return newData;
  };

  useEffect(() => {
    setExtensions(newData);
  }, []);
  return extensions;
};