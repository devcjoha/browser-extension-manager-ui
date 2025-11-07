import CardExtension from "./CardExtension";

function ExtensionsList({ handleToggleCard, filterItems, handleRemove }) {

  return (
    <>
      {/* EXTENSION_LIST */}
      <section className="extensions-list-container flex flex-col justify-center">
               {/* LISTA DE CARDS */}
        <div className="extensions-cards-container flex flex-wrap gap-4 mt-5 lg:mt-0">
          {filterItems.map((item) => (
            <CardExtension
            key={item.id}
            id={item.id}
            logo={item.logo}
            name={item.name}
            description={item.description}
            isActive={item.isActive}
            detail={item.details}
            onToggle={handleToggleCard}
            handleRemove={handleRemove}
            />
          ))} 
          </div>     
      </section>
    </>
  );
}
export default ExtensionsList;
