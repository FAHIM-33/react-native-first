// read access token : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmNlNWQ0Y2FjMjgxNWU3NmRkNzFkM2VmZWE3NzhlNCIsIm5iZiI6MTc2NDk5NjYyNi44MjcwMDAxLCJzdWIiOiI2OTMzYjYxMmNkN2Y2NGVlNjdjMWVlOWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tzMG0A3A2E90fOeVgZsEM50WT2dc8NZ_DwNcQX1PqjE

// key: bbce5d4cac2815e76dd71d3efea778e4

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmNlNWQ0Y2FjMjgxNWU3NmRkNzFkM2VmZWE3NzhlNCIsIm5iZiI6MTc2NDk5NjYyNi44MjcwMDAxLCJzdWIiOiI2OTMzYjYxMmNkN2Y2NGVlNjdjMWVlOWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tzMG0A3A2E90fOeVgZsEM50WT2dc8NZ_DwNcQX1PqjE'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

export const TMDB_CONFIG = {
  BaseUrl: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BaseUrl}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BaseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    //@ts-ignore
    throw new Error("Failed to fetch movies", response.statusText);
  }

  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (id: string) => {
  try {
    const response = await fetch(
      `${TMDB_CONFIG.BaseUrl}/movie/${id}?api_key=${TMDB_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
