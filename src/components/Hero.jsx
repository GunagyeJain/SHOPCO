import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-surface h-[853px] overflow-hidden md:h-[663px]">
      <div className="mx-auto max-w-[var(--container-width)] px-4 md:px-0">
        <div className="grid items-stretch md:grid-cols-2">
          {/* content */}
          <div className="flex max-h-170 flex-col justify-center py-10 md:py-6">
            <h1 className="font-heading text-[2.25rem] leading-none md:text-[4rem]">
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </h1>

            <p className="mt-5 text-sm text-black/60 md:max-w-[545px] md:text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <button className="mt-6 h-13 w-full rounded-full bg-black text-white md:w-[210px]">
              Shop Now
            </button>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-y-4 md:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold md:text-[2.5rem]">200+</h3>
                <p className="text-xs text-black/60 md:text-base">
                  International Brands
                </p>
              </div>

              <div className="md:border-l md:border-black/10 md:pl-8">
                <h3 className="text-3xl font-bold md:text-[2.5rem]">2,000+</h3>
                <p className="text-xs text-black/60 md:text-base">
                  High-Quality Products
                </p>
              </div>

              <div className="col-span-2 text-center md:col-span-1 md:border-l md:border-black/10 md:pl-8 md:text-left">
                <h3 className="text-3xl font-bold md:text-[2.5rem]">30,000+</h3>
                <p className="text-xs text-black/60 md:text-base">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative translate-y-[-100px] scale-70 overflow-hidden md:min-h-[450px] md:translate-y-0 md:scale-100">
            <img
              src={heroImage}
              alt="hero image"
              className="h-full w-full object-cover object-center"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
