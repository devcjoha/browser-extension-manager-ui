function Filter (){
    const buttonStyle = "btn-active btn-all w-20 h-10 bg-[#fcfdff] dark:bg-[#2f364b] shadow-md dark:text-white text-black rounded-3xl cursor-pointer hover:bg-[#c7221a] hover:text-white dark:hover:bg-[#545969]";
    return(
        <>
        <div className="filters-container flex flex-row w-1xl gap-3 place-content-around">  
        <button className="btn-active btn-all w-20 h-10 bg-[#fcfdff] dark:bg-[#2f364b] shadow-md dark:text-white text-black rounded-3xl cursor-pointer hover:bg-[#c7221a] hover:text-white dark:hover:bg-[#de473f] dark:hover:text-black">All</button>
        <button className={buttonStyle}>Active</button>
        <button className={buttonStyle}>Inactive</button>
        </div>
        </>
    )
}
export default Filter;