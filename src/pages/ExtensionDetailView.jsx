import { useEffect, useState } from "react";
import CardExtensionDetail from "../components/CardExtensionDetail";
import { useParams} from "react-router-dom";


function ExtensionDetailView({ items }) {
  const { id } = useParams();
  const [extension, setExtension] = useState(null);

  useEffect(() => {
    const found = items.find(item => item.id === id);
    setExtension(found || null);
  }, [id, items]);

  if (!extension) return <p>No se encontró la extensión</p>;

  return (
    <>
        <CardExtensionDetail
          key={extension.id}
          id={extension.id}
          name={extension.name}
          logo={extension.logo}
          description={extension.description}
          version={extension.details.version}
          author={extension.details.author}
          features={extension.details.features}
          permissions={extension.details.permissions}
          lastUpdated={extension.details.lastUpdated}
          website={extension.details.website}
        /> 
        
    </>
  );
}
export default ExtensionDetailView;
