import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { user, initialized } = useSelector((state) => state.auth);

  if (!initialized) {
    return <div className="py-20 text-center">Checking session...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/profile" replace />;
};

export default ProtectedRoute;
