import ProductCard from "./ProductCard";

const BrowsePeekView = ({ title, data }) => {
  return (
    <div className="mx-auto flex min-h-[75vh] max-w-[var(--container-width)] flex-col items-center md:h-[90vh]">
      <h1 className="font-heading py-20 text-5xl font-[900]">{title}</h1>
      <div className="w-full overflow-x-auto md:overflow-visible">
        <div className="grid auto-cols-[250px] grid-flow-col gap-5 pl-5 md:auto-cols-auto md:grid-flow-row md:grid-cols-4 md:pl-0">
          {data.slice(0, 4).map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.title}
                stars={product.rating.rate}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
      <button className="border-border hover:bg-surface mt-20 rounded-full border px-15 py-3 transition-colors">
        View All
      </button>
    </div>
  );
};

export default BrowsePeekView;
