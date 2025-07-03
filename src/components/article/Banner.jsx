function Banner({ cover, title }) {
  return (
    <>
      <div className="overflow-hidden rounded-2xl mb-6 shadow">
        <img alt={title} className="w-full h-64 object-cover" src={cover} />
      </div>
    </>
  );
}

export default Banner;
