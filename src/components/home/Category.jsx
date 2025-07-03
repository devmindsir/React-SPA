import categories from "../../data/categories";

function Category() {
  return (
    <>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">دسته‌بندی‌ها</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white shadow rounded p-4 text-center hover:bg-blue-50 cursor-pointer">
              {cat.name}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Category;
