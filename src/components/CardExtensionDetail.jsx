function CardExtensionDetail({
  id,
  name,
  logo,
  description,
  version,
  lastUpdated,
  website,
  author,
  features,
  permissions,
}) {

const h3Style ="dark:text-white font-bold";
const spanStyle = "text-[#9fa2ad] font-normal";
  return (
    <>
    {/* CARD DETAIL EXT */}
      <section>
        <div
          className="card-detail-container flex flex-col  dark:text-[#9fa2ad]"
          id={id}
        >
          <div className="flex items-center justify-center">
            <img
              src={`/${logo}`}
              alt="logo"
              className="img-card-detail flex w-25 h-25"
            />
          </div>
          <h1 className="dark:text-white text-black text-[2rem] font-bold">
            {name}
          </h1>
          <h3 className={h3Style}>
            Version:<span className={spanStyle}> {version}.</span>
          </h3>
          <h3 className={h3Style}>
            Author:<span className={spanStyle}> {author}.</span>
          </h3>
          <h3 className={h3Style}>
            Last Update:<span className={spanStyle}> {lastUpdated}.</span>
          </h3>
          <h3 className={h3Style}>
            Description:<span className={spanStyle}> {description}</span>
          </h3>
          <h3 className={h3Style}>
            Features:
            <span className={spanStyle}> {features.join(", ")}.</span>
          </h3>
          <h3 className={h3Style}>
            Permissions:
            <span className={spanStyle}> {permissions.join(", ")}.</span>
          </h3>
          <h3 className={h3Style}>
            Web:
            <span className={spanStyle}> {website}</span>
          </h3>
          <p></p>
        </div>
      </section>
    </>
  );
}
export default CardExtensionDetail;
