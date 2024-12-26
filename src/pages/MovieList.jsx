import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const MovieList = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);

//   console.log("data", movies);
  return (
    <main className="min-h-screen">
      <section className="max-w-7xl py-7 m-auto h-2/3">
        <div className="grid sm:grid-cols-3 lg:grid-cols2 gap-5">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
