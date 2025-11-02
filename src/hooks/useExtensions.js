import { useEffect, useState } from "react";
import data from "../../public/data.json";

export function useExtensions() {
  const [extensions, setExtensions] = useState([]);

  useEffect(() => {
    setExtensions(data);
  }, []);

  return extensions;
};
