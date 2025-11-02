// import iconDevLens from "../assets/logo-devlens.svg";
function CardExtension({ logo, name, description }) {
  return (
    <>
      <div className="card-container flex flex-col place-content-between w-85 h-45 p-4 border-transparent rounded-xl   bg-[#fcfdff] ">
        {/* CARD ICON TEXT */}
        <div className="card-icon-text-container flex flex-row">
          <div className="card-icon-container w-15 h-15 mr-4 border-transparentrounded-lg">
            <img src={logo} alt="icon" />
          </div>
          <div className="card-text-container">
            <h2 className="font-bold text-[1.3rem]">{name}</h2>
            <p className="text-[1rem] mt-1.5 w-58 max-h-20 leading-5 line-clamp-3 text-[#545969]">
              {description}{" "}
            </p>
          </div>
        </div>
        {/* CARD BUTTONS */}
        <div className="card-buttons-container flex flex-row justify-between align-middle">
          {/* Button Remove */}
          <button
            type="button"
            className="button-remove flex w-16 h-7 items-center justify-center text-[.8rem] p-1 border border-[#c7c7c7] rounded-2xl"
          >
            Remove
          </button>
          {/* Toggle */}
          <div className="toggle-card relative inline-block w-8 h-4 pt-1 not-first:select-none transition duration-200 ease-in">
            <div className="toggle-active-card relative inline-block w-8 h-4">
              <input
                //   checked
                id="toggle-input"
                type="checkbox"
                className="peer appearance-none w-8 h-4 bg-slate-100 rounded-full checked:bg-[#c7221a] cursor-pointer transition-colors duration-300"
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
