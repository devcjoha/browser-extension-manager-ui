import { Link } from "react-router-dom";

function CardExtension({ id, logo, name, description, isActive }) {
  const hadleToggleIsActive = (e) => {
    e.preventDefault();
    !isActive ? isActive : !isActive;
  };


  return (
    <>
      <div className="card-container flex flex-col place-content-between w-85 h-45 p-4 border border-[#d6e2f5] dark:border-[#545969] rounded-xl   bg-[#fcfdff] dark:bg-[#212636] shadow-lg "
      >
        <Link to={`/detail/${id}`} state={id} className="block">
          {/* CARD ICON TEXT */}
          <div className="card-icon-text-container flex flex-row">
            <div className="card-icon-container w-14 h-14 mr-4 border-transparentrounded-lg">
              <img src={`/${logo}`} alt="icon" />
            </div>
            <div className="card-text-container">
              <h2 className="font-bold text-[1.1rem]">{name}</h2>
              <p className="text-[.9rem] mt-1.5 w-58 max-h-20 leading-5 line-clamp-3 text-[#545969] dark:text-[#9fa2ad]">
                {description}
              </p>
            </div>
          </div>
        </Link>
        {/* CARD BUTTONS */}
        <div className="card-buttons-container flex flex-row justify-between align-middle">
          {/* Button Remove */}
          <button
            type="button"
            className="button-remove flex w-19 h-8 items-center justify-center text-[.8rem] p-1 shadow-md border border-[#d6e2f5] dark:border-[#545969] rounded-2xl dark:hover:bg-[#de473f] hover:bg-[#c7221a] hover:text-white dark:hover:text-black dark:hover:border-transparent cursor-pointer"
          >
            Remove
          </button>

          {/* Toggle */}
          <div className="toggle-card relative inline-block w-8 h-4 pt-1 not-first:select-none transition duration-200 ease-in">
            <div className="toggle-active-card relative inline-block w-8 h-4">
              <input
                checked={isActive}
                id="toggle-input"
                type="checkbox"
                className="peer appearance-none w-8 h-4 bg-slate-100 dark:bg-[#545969] rounded-full checked:bg-[#c7221a] cursor-pointer transition-colors duration-300"
                onChange={hadleToggleIsActive}
              />
              <label
                htmlFor="toggle-swich"
                className="absolute top-0 left-0 w-4 h-4 mt-[.1rem] bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-4 peer-checked:border-[#c7221a] cursor-pointer"
              ></label>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}
export default CardExtension;
