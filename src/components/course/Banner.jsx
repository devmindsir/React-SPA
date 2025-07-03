function Banner({ image, title }) {
  return (
    <img src={image} alt={title} className="w-full h-[300px] object-cover" />
  );
}

export default Banner;
