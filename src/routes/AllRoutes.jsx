import { Routes, Route } from "react-router-dom";

import { MovieDetails, MovieList, PageNotFound, Search } from "../pages/index";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList apiPath="movie/now_playing" />} />
      <Route path="/cini-bite" element={<MovieList apiPath="movie/now_playing" />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route
        path="/movie/popular"
        element={<MovieList apiPath="movie/popular" />}
      />
      <Route
        path="/movie/top"
        element={<MovieList apiPath="movie/top_rated" />}
      />
      <Route
        path="/movie/upcoming"
        element={<MovieList apiPath="movie/upcoming" />}
      />
      <Route path="/search" element={<Search apiPath="search/movie" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
