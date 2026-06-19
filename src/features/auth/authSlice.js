import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { supabase } from "../../lib/supabaseClient";

//SIGN UP
export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }, { rejectWithValue }) => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) return rejectWithValue(error.message);

    return data.user;
  },
);

//Sign in
export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return rejectWithValue(error.message);

    return data.user;
  },
);

//Sign Out
export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    const { error } = await supabase.auth.signOut();
    if (error) return rejectWithValue(error.message);
    return null;
  },
);

//Restore session (runs once on app load, to check if JWT already exists)
export const restoreSession = createAsyncThunk(
  "auth/restoreSession",
  async () => {
    const { data } = await supabase.auth.getSession();
    return data.session?.user ?? null;
  },
);

//Slice
//initial state + reducers + auto actions

const initialState = {
  user: null, // the logged in user object or null
  status: "idle", // idle, loading, succeeded, failed
  error: null, // error message
  initialized: false, // finished the first session check?
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = "idle";
        state.user = null;
      })
      .addCase(restoreSession.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.initialized = true;
      })
      .addCase(restoreSession.rejected, (state) => {
        state.initialized = true;
      })
      .addMatcher(
        isAnyOf(signUp.pending, signIn.pending, signOut.pending),
        (state) => {
          state.status = "loading";
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(signUp.rejected, signIn.rejected, signOut.rejected),
        (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        },
      );
  },
});

export const { setUser, clearError } = authSlice.actions;
export default authSlice.reducer;
