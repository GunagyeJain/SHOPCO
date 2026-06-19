import { ChevronRight, Minus, Plus, Star, StarHalf } from "lucide-react";

import useFetchProduct from "../hooks/useFetchProduct";

const ProductDetail = () => {
  const products = useFetchProduct();
  console.log(products);
  return (
    <div className="mx-auto max-w-[var(--container-width)] px-4 py-6">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-black/60">
        <span>Home</span>
        <ChevronRight size={14} />
        <span>Shop</span>
        <ChevronRight size={14} />
        <span>Men</span>
        <ChevronRight size={14} />
        <span className="text-black">T-shirts</span>
      </div>

      {/* Main Layout */}
      <div className="grid gap-5 md:grid-cols-[120px_1fr_1fr]">
        {/* Thumbnails */}
        <div className="order-2 flex gap-3 md:order-1 md:flex-col">
          <button className="bg-surface border-border aspect-square w-24 overflow-hidden rounded-2xl border">
            <img
              src="/placeholder.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </button>

          <button className="bg-surface aspect-square w-24 overflow-hidden rounded-2xl">
            <img
              src="/placeholder.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </button>

          <button className="bg-surface aspect-square w-24 overflow-hidden rounded-2xl">
            <img
              src="/placeholder.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </button>
        </div>

        {/* Main Image */}
        <div className="order-1 md:order-2">
          <div className="bg-surface overflow-hidden rounded-3xl">
            <img
              src={products.image}
              alt="Product"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-3">
          {/* Title */}
          <h1 className="font-heading text-4xl leading-none md:text-5xl">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>

            <span className="text-sm">4.5/5</span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-4xl font-bold">$260</span>

            <span className="text-4xl font-bold text-black/30 line-through">
              $300
            </span>

            <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-500">
              -40%
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 border-b border-black/10 pb-6 text-black/60">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Colors */}
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

          {/* Sizes */}
          <div className="border-b border-black/10 py-6">
            <p className="mb-4 text-black/60">Choose Size</p>

            <div className="flex flex-wrap gap-3">
              <button className="bg-surface rounded-full px-6 py-3">
                Small
              </button>

              <button className="bg-surface rounded-full px-6 py-3">
                Medium
              </button>

              <button className="rounded-full bg-black px-6 py-3 text-white">
                Large
              </button>

              <button className="bg-surface rounded-full px-6 py-3">
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
