import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";

import { MovieDetails, MovieList, PageNotFound, Search } from "../pages/index";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MovieList apiPath="/movie/now_playing" />
          </PrivateRoute>
        }
      />
      <Route
        path="/movie/:id"
        element={
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/movie/popular"
        element={
          <PrivateRoute>
            <MovieList apiPath="/movie/popular" />
          </PrivateRoute>
        }
      />
      <Route
        path="/movie/top"
        element={
          <PrivateRoute>
            <MovieList apiPath="/movie/top_rated" />
          </PrivateRoute>
        }
      />
      <Route
        path="/movie/upcoming"
        element={
          <PrivateRoute>
            <MovieList apiPath="/movie/upcoming" />
          </PrivateRoute>
        }
      />
      <Route
        path="/search"
        element={
          <PrivateRoute>
            <Search apiPath="search/movie" />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
