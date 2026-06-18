import { Star, StarHalf } from "lucide-react";

const ProductCard = ({ image, name, stars, price }) => {
  const calculateStars = (stars) => {
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return { fullStars, hasHalfStar, emptyStars };
  };

  const { fullStars, hasHalfStar, emptyStars } = calculateStars(stars);

  return (
    <div className="w-[250px]">
      {/* Image */}
      <div className="bg-surface overflow-hidden rounded-[20px]">
        <img
          src={image}
          alt="T-shirt with Tape Details"
          className="aspect-square w-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="mt-4 text-xl font-[700]">{name}</h3>

      {/* Rating */}
      <div className="mt-2 flex items-center gap-2">
        <div className="flex">
          {/* Full stars */}
          {Array.from({ length: fullStars }).map((_, index) => (
            <Star
              key={`full-${index}`}
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
            />
          ))}

          {/* Half star */}
          {hasHalfStar && (
            <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          )}

          {/* Empty stars */}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <Star key={`empty-${index}`} className="h-5 w-5 text-yellow-400" />
          ))}
        </div>

        <span className="text-sm text-black/60">
          {stars}
          <span className="text-black">/5</span>
        </span>
      </div>

      {/* Price */}
      <div className="mt-3">
        <span className="text-3xl font-bold">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
