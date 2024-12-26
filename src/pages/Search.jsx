import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
const Search = ({ apiPath }) => {
  const [searchedParam] = useSearchParams();

  const queryTerm = searchedParam.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  console.log("movies", movies);
  return (
    <main>
      {movies.length !== 0 ? (
        <section className="max-w-7xl py-7 m-auto h-2/3">
          <h1 className="text-2xl font-bold my-3 text-center lg:text-left">
            Searched results for: {queryTerm}
          </h1>
          <div className="grid sm:grid-cols-3 lg:grid-cols2 gap-5">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      ) : (
        <section className="max-w-7xl py-7 m-auto h-2/3">
          <div className="grid sm:grid-cols-3 lg:grid-cols2 gap-5">
            <h1 className="text-2xl font-bold my-3 text-center lg:text-left">
              No results for: {queryTerm}
            </h1>
          </div>
        </section>
      )}
    </main>
  );
};

export default Search;
