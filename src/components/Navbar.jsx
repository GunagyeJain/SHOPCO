import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto flex h-[100px] w-full max-w-[var(--container-width)] items-center justify-between gap-7 px-7">
      {/* hamburger */}
      {/* logo */}
      <div className="flex items-center justify-center gap-2">
        <div>☰</div>
        <Link to="/">
          <h1 className="font-heading text-3xl leading-none font-bold">
            SHOPCO
          </h1>
        </Link>
      </div>
      {/* navlinks */}
      <ul className="hidden items-center justify-between gap-7 md:flex">
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
      <div className="bg-surface flex hidden grow items-center justify-center gap-2 rounded-2xl p-2 md:flex">
        🔍
        <input type="text" className="grow outline-0" />
      </div>
      {/* cta */}
      <ul className="flex items-center justify-center gap-3">
        <li className="md:hidden">
          <Link to="/search">🔍</Link>
        </li>
        <li>
          <Link to="/cart">🛒</Link>
        </li>
        {user ? (
          <li>
            <button onClick={() => dispatch(signOut())} title={user.email}>
              🚪
            </button>
          </li>
        ) : (
          <li>
            <Link to="/profile">👨🏻</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
