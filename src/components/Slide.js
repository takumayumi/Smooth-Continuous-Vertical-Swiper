function Slide(props) {
  const { alt, desc, img, title } = props.data;

  return (
    <>
      <img
        className="absolute h-full w-full top-0 left-0 object-cover -z-10"
        src={`/assets/images/${img}`}
        alt={alt}
      />
      <div className="absolute top-0 w-full h-full left-0 bg-gradient-to-tr bg-licorice/80 -z-10" />
      <div className="w-full h-full flex flex-col text-gray text-left lg:w-1/2 mx-auto place-content-center">
        <h3 className="font-bold text-7xl w-full mb-10">{title}</h3>
        <p className="w-full font-light text-3xl">{desc}</p>
      </div>
    </>
  );
}

export default Slide;
