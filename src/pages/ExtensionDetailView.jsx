

function ExtensionDetailView ({items}){
  
    
    return(
        <>
           <div className="extensions-cards-container flex flex-wrap mt-10 ">
        {items.map((item) => (
          <CardExtensionDetail
            key={item.id}
            logo={item.logo}
            name={item.name}
            description={item.description}
            isActive={item.isActive}
          />
        ))}
        </div>
        </>
    )
}
export default ExtensionDetailView;