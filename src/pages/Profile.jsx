import { useState } from "react";

const Profile = () => {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const isLogin = mode === "login";

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // clear the error for a field as soon as the user types in it
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.email.trim()) newErrors.email = true;
    if (!form.password.trim()) newErrors.password = true;
    if (!isLogin && !form.confirmPassword.trim())
      newErrors.confirmPassword = true;

    setErrors(newErrors);

    // stop if any field is empty
    if (Object.keys(newErrors).length > 0) return;

    // hook up your auth logic here
    console.log(`${mode} submitted`, form);
  };

  const switchMode = (next) => {
    setMode(next);
    setErrors({}); // reset errors when switching tabs
  };

  // shared input classes + conditional red fill when that field has an error
  const inputClass = (field) =>
    `w-full rounded-full px-6 py-4 outline-none transition-colors ${
      errors[field]
        ? "bg-red-100 placeholder:text-red-400"
        : "bg-surface placeholder:text-black/40"
    }`;

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="border-border w-full max-w-[450px] rounded-3xl border bg-white p-8 shadow-sm md:p-10">
        {/* Title */}
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

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-8 flex flex-col gap-4"
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

          {/* Confirm password — only on signup */}
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

          {/* Forgot password — only on login */}
          {isLogin && (
            <a href="#forgot" className="text-sm text-black/60 underline">
              Forgot password?
            </a>
          )}

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-black py-4 text-white transition-opacity hover:opacity-90"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Footer link */}
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
