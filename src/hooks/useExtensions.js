import { useEffect, useState } from "react";
import data from "../../public/data.json";
import { v4 as uuidv4 } from "uuid";
console.log(data);
export function useExtensions() {
  const [extensions, setExtensions] = useState([]);
  const BASE_PATH = import.meta.env.BASE_URL;

  console.log("EXTENSIONS", extensions);

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
}

// export function useExtensions() {
//   const [extensions, setExtensions] = useState([]);

//   function resolveLogoPath(path) {
//     if (!path) {
//       return null;
//     }
//     return new URL(`../${path}`, import.meta.url).href;
//   }
//   const newData = () => {
//     const newData = data.map((item) => ({
//       id: uuidv4(),
//       ...item,
//       logo: resolveLogoPath(item.logo),
//       // logo: `/browser-extension-manager-ui/src/${item.logo}`,
//     }));
//     console.log("items:", newData);
//     return newData;
//   };

//   useEffect(() => {
//     setExtensions(newData);
//   }, []);
//   return extensions;
// }
