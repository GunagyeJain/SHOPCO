import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signIn, signUp, clearError } from "../features/auth/authSlice";

const Profile = () => {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const isLogin = mode === "login";

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // READ from the store
  const { user, status, error } = useSelector((state) => state.auth);
  const isLoading = status === "loading";

  // If already logged in (or right after a successful auth), leave this page
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  // Clear any server error when switching tabs
  useEffect(() => {
    dispatch(clearError());
  }, [mode, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // --- our own client-side empty checks (the red fill) ---
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = true;
    if (!form.password.trim()) newErrors.password = true;
    if (!isLogin && !form.confirmPassword.trim())
      newErrors.confirmPassword = true;
    if (!isLogin && form.password !== form.confirmPassword) {
      newErrors.confirmPassword = true;
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // --- dispatch the right thunk and wait for the result ---
    const action = isLogin
      ? signIn({ email: form.email, password: form.password })
      : signUp({ email: form.email, password: form.password });

    const result = await dispatch(action);

    // .match() tells us if it ended in fulfilled. Navigation is also handled
    // by the useEffect above once `user` is set, but this is explicit.
    if (signIn.fulfilled.match(result) || signUp.fulfilled.match(result)) {
      navigate("/");
    }
  };

  const switchMode = (next) => {
    setMode(next);
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full rounded-full px-6 py-4 outline-none transition-colors ${
      errors[field]
        ? "bg-red-100 placeholder:text-red-400"
        : "bg-surface placeholder:text-black/40"
    }`;

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="border-border w-full max-w-[450px] rounded-3xl border bg-white p-8 shadow-sm md:p-10">
        <h1 className="font-heading text-center text-3xl md:text-4xl">
          {isLogin ? "LOGIN" : "SIGN UP"}
        </h1>

        {/* Toggle */}
        <div className="bg-surface mt-8 flex rounded-full p-1">
          <button
            type="button"
            onClick={() => switchMode("login")}
            className={`flex-1 rounded-full py-3 transition-colors ${
              isLogin ? "bg-black text-white" : "text-black/70"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => switchMode("signup")}
            className={`flex-1 rounded-full py-3 transition-colors ${
              !isLogin ? "bg-black text-white" : "text-black/70"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Server error from Supabase */}
        {error && (
          <p className="mt-4 rounded-2xl bg-red-100 px-4 py-3 text-sm text-red-500">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-6 flex flex-col gap-4"
        >
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className={inputClass("email")}
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className={inputClass("password")}
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={inputClass("confirmPassword")}
            />
          )}
          {isLogin && (
            <a href="#forgot" className="text-sm text-black/60 underline">
              Forgot password?
            </a>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 w-full rounded-full bg-black py-4 text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {isLoading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-black/60">
          {isLogin ? "Not a member? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => switchMode(isLogin ? "signup" : "login")}
            className="font-medium text-black underline"
          >
            {isLogin ? "Signup now" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Profile;
