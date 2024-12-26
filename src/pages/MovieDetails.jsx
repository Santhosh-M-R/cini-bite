import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/Options";

import { Audio } from "react-loader-spinner";
const MovieDetails = () => {
  const param = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${param.id}`,
        options
      );

      const data = await response.json();

      setData(data);
      setLoading(false);
    }
    fetchMovies();
  }, []);

  const {
    id,
    original_title,
    overview,
    poster_path,
    vote_average,
    vote_count,
    genres,
  } = data;

  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const emptyStar = (
    <svg
      class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );

  const colorStar = (
    <svg
      class="w-4 h-4 text-yellow-300 ms-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );

  if (loading) {
    return (
      <div role="status" className="w-5 text-center m-auto h-48">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5 items-center">
        <div className="max-w-sm pr-5">
          <img src={image} alt="" srcset="" />
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {original_title}
          </h1>
          <p className="text-center lg:text-left">{overview}</p>
          <p className="my-7 flex flex-wrap gap-4 justify-center lg:justify-start">
            {genres
              ? genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="mr-2 border border-gray-700 rounded p-2"
                  >
                    {genre.name}
                  </span>
                ))
              : ""}
          </p>
          <div>
            <div class="flex items-center gap-3">
              <div className="flex items-center">
                {colorStar}
                {colorStar}
                {colorStar}
                {colorStar}
                {emptyStar}
              </div>
              <div className="flex items-center">
                <p>{vote_average}</p>
                <p>({vote_count})</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
