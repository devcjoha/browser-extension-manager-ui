import Filter from "./Filter";
import CardExtension from "./CardExtension";

function ExtensionsList({ items }) {
  console.log("EXTLIS", items);

  return (
    <>
      <section className="extensions-list-container flex flex-col items-center w-full mt-3 lg:mt-3 ">
        {/* HEADER EXTENSIONS LIST */}
        <div className="extension-list-header flex flex-row flex-wrap h-16 mt-5 lg:mt-0 mb-6 lg:mb-0 items-center
         justify-center w-full lg:justify-between">
          <h1 className="extension-list-title text-3xl mb-5 lg:mb-0 font-bold items-center">
            Extensions List
          </h1>
          <Filter />
        </div>
        {/* LISTA DE CARDS */}
        <div className="extensions-cards-container flex flex-wrap justify-between gap-4  mt-11 lg:mt-0">
          {items.map((item) => (
            <CardExtension
              key={item.id}
              logo={item.logo}
              name={item.name}
              description={item.description}
              isActive={item.isActive}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default ExtensionsList;
