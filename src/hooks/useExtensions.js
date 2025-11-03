import { useEffect, useState } from "react";
import data from "../../public/data.json";
import { v4 as uuidv4 } from "uuid";

export function useExtensions() {
  const [extensions, setExtensions] = useState([]);
 
  const newData = () => {
    const newData = data.map((item) => ({
      id: uuidv4(),
      ...item,
      logo: item.logo.replace(/^public\//, ""),
    }));
    return newData;
  };
  
  useEffect(() => {
    setExtensions(newData);
  }, []);
  return extensions;
}
