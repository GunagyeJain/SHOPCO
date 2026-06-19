import { ChevronRight, Minus, Plus, Star, StarHalf } from "lucide-react";
import { useParams } from "react-router";
import useFetchSingleProduct from "../hooks/useFetchSingleProduct";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchSingleProduct(id);

  if (loading) {
    return (
      <div className="mx-auto max-w-[var(--container-width)] px-4 py-20 text-center">
        Loading...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="mx-auto max-w-[var(--container-width)] px-4 py-20 text-center">
        Product not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[var(--container-width)] px-4 py-6">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-black/60">
        <span>Home</span>
        <ChevronRight size={14} />
        <span>Shop</span>
        <ChevronRight size={14} />
        <span className="text-black capitalize">{product.category}</span>
      </div>

      {/* Main Layout */}
      <div className="grid gap-5 md:grid-cols-[120px_1fr_1fr]">
        {/* Thumbnails (static for now — API gives one image) */}
        <div className="order-2 flex gap-3 md:order-1 md:flex-col">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className="bg-surface aspect-square w-24 overflow-hidden rounded-2xl"
            >
              <img
                src={product.image}
                alt=""
                className="h-full w-full object-contain p-2"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="order-1 md:order-2">
          <div className="bg-surface overflow-hidden rounded-3xl">
            <img
              src={product.image}
              alt={product.title}
              className="aspect-square w-full object-contain p-6"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-3">
          <h1 className="font-heading text-4xl leading-none md:text-5xl">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: Math.floor(product.rating.rate) }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ),
              )}
              {product.rating.rate % 1 !== 0 && (
                <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              )}
            </div>
            <span className="text-sm">{product.rating.rate}/5</span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-4xl font-bold">${product.price}</span>
          </div>

          {/* Description */}
          <p className="mt-5 border-b border-black/10 pb-6 text-black/60">
            {product.description}
          </p>

          {/* Colors (static) */}
          <div className="border-b border-black/10 py-6">
            <p className="mb-4 text-black/60">Select Colors</p>
            <div className="flex gap-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4F4631] text-white">
                ✓
              </button>
              <button className="h-10 w-10 rounded-full bg-[#314F4A]" />
              <button className="h-10 w-10 rounded-full bg-[#31344F]" />
            </div>
          </div>

          {/* Sizes (static) */}
          <div className="border-b border-black/10 py-6">
            <p className="mb-4 text-black/60">Choose Size</p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-surface rounded-full px-6 py-3 hover:bg-black hover:text-white">
                Small
              </button>
              <button className="bg-surface rounded-full px-6 py-3 hover:bg-black hover:text-white">
                Medium
              </button>
              <button className="rounded-full bg-black px-6 py-3 text-white">
                Large
              </button>
              <button className="bg-surface rounded-full px-6 py-3 hover:bg-black hover:text-white">
                X-Large
              </button>
            </div>
          </div>

          {/* Cart */}
          <div className="mt-6 flex gap-4">
            <div className="bg-surface flex items-center gap-6 rounded-full px-6 py-4">
              <button>
                <Minus size={18} />
              </button>
              <span>1</span>
              <button>
                <Plus size={18} />
              </button>
            </div>
            <button className="flex-1 rounded-full bg-black py-4 text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
