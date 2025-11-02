function Filter (){
    return(
        <>
        <div className="filters-container flex flex-row w-1xl gap-3 place-content-around">  
        <button className="btn-all w-14 h-10 bg-[#c7221a] border text-white dark:text-black rounded-3xl">All</button>
        <button className="btn-active btn-all w-20 h-10 bg-[#fcfdff] border border-[#c4c5c7] dark:text-white text-black rounded-3xl">Active</button>
        <button className="btn-active btn-all w-24 h-10 bg-[#fcfdff] border border-[#c4c5c7] dark:text-white text-black rounded-3xl">Inactive</button>
        </div>
        </>
    )
}
export default Filter;