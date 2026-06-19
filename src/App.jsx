import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";

import { restoreSession, setUser } from "./features/auth/authSlice";
import { supabase } from "./lib/supabaseClient";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreSession());

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setUser(session?.user ?? null));
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  return <AppRoutes />;
};

export default App;
