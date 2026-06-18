const Navbar = () => {
  return (
    <div className="mx-auto flex h-[100px] w-full max-w-[var(--container-width)] items-center justify-between gap-7 px-10">
      {/* hamburger */}
      {/* logo */}
      <div className="flex items-center justify-center gap-2">
        <div>☰</div>
        <h1 className="font-heading text-3xl leading-none font-bold">
          SHOPCOP
        </h1>
      </div>
      {/* navlinks */}
      <ul className="flex items-center justify-between gap-7">
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#on-sale">On Sale</a>
        </li>
        <li>
          <a href="#new-arrivals">New Arrivals</a>
        </li>
        <li>
          <a href="#brands">Brands</a>
        </li>
      </ul>
      {/* searchbar */}
      <div className="bg-surface flex grow items-center justify-center gap-2 rounded-2xl p-2">
        🔍
        <input type="text" className="grow outline-0" />
      </div>
      {/* cta */}
      <ul className="flex items-center justify-center gap-3">
        <li>
          <a href="#cart">🛒</a>
        </li>
        <li>
          <a href="#profile">👨🏻</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
