import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";

import { MovieDetails, MovieList, PageNotFound, Search } from "../pages/index";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/cini-bite/signup" element={<SignUp />} />
      <Route path="/cini-bite/signin" element={<SignIn />} />
      <Route
        path="/cini-bite"
        element={
          <PrivateRoute>
            <MovieList apiPath="/movie/now_playing" />
          </PrivateRoute>
        }
      />
      <Route
        path="/cini-bite/movie/:id"
        element={
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/cini-bite/movie/popular"
        element={
          <PrivateRoute>
            <MovieList apiPath="/movie/popular" />
          </PrivateRoute>
        }
      />
      <Route
        path="/cini-bite/movie/top"
        element={
          <PrivateRoute>
            <MovieList apiPath="/movie/top_rated" />
          </PrivateRoute>
        }
      />
      <Route
        path="/cini-bite/movie/upcoming"
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
