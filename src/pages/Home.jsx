import Hero from "../components/Hero";
import BrandsBanner from "../components/BrandsBanner";
import BrowsePeekView from "../components/BrowsePeekView";

// import newarrivalsProductImage1 from "../assets/new-arrivals-1.png";
// import newarrivalsProductImage2 from "../assets/new-arrivals-2.png";
// import newarrivalsProductImage3 from "../assets/new-arrivals-3.png";
// import newarrivalsProductImage4 from "../assets/new-arrivals-4.png";
import topsellingProductImage1 from "../assets/top-selling-1.png";
import topsellingProductImage2 from "../assets/top-selling-2.png";
import topsellingProductImage3 from "../assets/top-selling-3.png";
import topsellingProductImage4 from "../assets/top-selling-4.png";

import useFetchProduct from "../hooks/useFetchProduct";

const Home = () => {
  const products = useFetchProduct();

  // const newArrivalsData = [
  //   {
  //     id: 1,
  //     name: "T-shirt with Tape Details",
  //     rating: 4.5,
  //     price: 120,
  //     image: newarrivalsProductImage1,
  //   },
  //   {
  //     id: 2,
  //     name: "Skinny Fit Jeans",
  //     rating: 3.5,
  //     price: 240,
  //     originalPrice: 260,
  //     discount: 20,
  //     image: newarrivalsProductImage2,
  //   },
  //   {
  //     id: 3,
  //     name: "Checkered Shirt",
  //     rating: 4.5,
  //     price: 180,
  //     image: newarrivalsProductImage3,
  //   },
  //   {
  //     id: 4,
  //     name: "Sleeve Striped T-shirt",
  //     rating: 4.5,
  //     price: 130,
  //     originalPrice: 160,
  //     discount: 30,
  //     image: newarrivalsProductImage4,
  //   },
  // ];

  const topSellingData = [
    {
      id: 1,
      name: "Vertical Striped Shirt",
      rating: 5.0,
      price: 212,
      originalPrice: 232,
      discount: 20,
      image: topsellingProductImage1,
    },
    {
      id: 2,
      name: "Courage Graphic T-shirt",
      rating: 4.0,
      price: 145,
      image: topsellingProductImage2,
    },
    {
      id: 3,
      name: "Loose Fit Bermuda Shorts",
      rating: 3.0,
      price: 80,
      image: topsellingProductImage3,
    },
    {
      id: 4,
      name: "Faded Skinny Jeans",
      rating: 4.5,
      price: 210,
      image: topsellingProductImage4,
    },
  ];

  return (
    <div>
      <Hero />
      <BrandsBanner />
      <BrowsePeekView title="NEW ARRIVALS" data={products} />
      <BrowsePeekView title="TOP SELLING" data={topSellingData} />
    </div>
  );
};

export default Home;
