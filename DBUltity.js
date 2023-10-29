import db from "./db/data.js";

const DBUltity = {
  fetch: (queryString) => {
    const [query, _params] = queryString.split("?");
    const [type, classN, pattern] = query.split("/");
    console.log([type, classN, pattern]);
    const params = new URLSearchParams(_params);
    // console.log("xx", type, classN, pattern, params.get("perpage"));

    if (type == "get") {
      let data = getData(classN, pattern, params);
      return data;
    } else {
      return Promise.reject(new Error("Invalid type"));
    }
  },
};

const getNNewestMovies = (movies, n) => {
  let nLastestMovies = movies
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .splice(0, n);

  return nLastestMovies;
};

const getData = (classN, pattern, params) => {
  let perpage = parseInt(params.get("perpage")) || 15;
  let page = parseInt(params.get("page")) || 1;
  let movies = [];
  if (classN == "all-movie") {
    movies = db.Movies.splice((page - 1) * perpage, page * perpage);
  } else if (classN == "5-lastest") {
    movies = getNNewestMovies(db.Movies, 5);
  } else if (classN == "top-movies") {
    movies = db.Top50Movies.splice((page - 1) * perpage, page * perpage);
  } else if (classN == "popular") {
    movies = db.MostPopularMovies.splice((page - 1) * perpage, page * perpage);
  } else if (classN == "review") {
    movies = db.Reviews.splice((page - 1) * perpage, page * perpage);
  }

  return Promise.resolve({
    page,
    perpage,
    totalpage: Math.ceil(movies.length / perpage),
    quantity: movies.length,
    movies,
  });
};

export default DBUltity;
