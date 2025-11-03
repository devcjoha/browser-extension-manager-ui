
function CardExtensionDetail({id, name, logo, description, version, lastUpdated, website}){
// console.log("cardDetail", version)

    return(
        <>
        <section>
          <div className="card-detail-container flex flex-col  dark:text-[#9fa2ad]"id={id}>
            <div className="flex items-center justify-center">
            <img src={`/${logo}`} alt="logo" className="img-card-detail flex w-25 h-25"/>
            </div>
            <h1 className="dark:text-white text-[2rem] font-bold">{name}</h1>
            <h3 className="text-white">Version:<span className="text-[#9fa2ad]"> {version}</span></h3> 
              <h3 className="text-white">Last Update:<span className="text-[#9fa2ad]"> {lastUpdated}</span></h3> 
           
            <p>{description}</p>
            
            <p>{website}</p>
          </div>
            </section>
        </>
    )

};
export default CardExtensionDetail;