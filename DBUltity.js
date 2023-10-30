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
    } else if (type == "details") {
      let data = getDetails(classN, pattern, params);
      return data;
    } else {
      return Promise.reject(new Error("Invalid type"));
    }
  },
};

const getNNewestMovies = (movies, n) => {
  let nLastestMovies = movies
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice(0, n);

  return nLastestMovies;
};

const getData = (classN, pattern, params) => {
  let perpage = parseInt(params.get("perpage")) || 15;
  let page = parseInt(params.get("page")) || 1;
  let movies = [];
  if (pattern) {
    movies = db.Movies.filter(
      (item) => item.fullTitle.toLowerCase().indexOf(pattern) != -1
    );
  } else {
    let listIdInMovies = db.Movies.map((item) => item.id);
    console.log(1222, listIdInMovies);
    switch (classN) {
      case "movie":
        movies = db.Movies.slice((page - 1) * perpage, page * perpage);
        break;
      case "5-lastest":
        movies = getNNewestMovies(db.Movies, 5);
        break;
      case "popular":
        movies = db.Top50Movies.filter((item) => {
          console.log("mm", listIdInMovies.indexOf(item.id));
          return listIdInMovies.indexOf(item.id) != -1;
        });
        movies = movies.slice((page - 1) * perpage, page * perpage);
        break;
      case "top-movies":
        movies = db.MostPopularMovies.filter((item) => {
          console.log("mm", listIdInMovies.indexOf(item.id));
          return listIdInMovies.indexOf(item.id) != -1;
        });
        movies = movies.slice((page - 1) * perpage, page * perpage);

        break;
      case "review":
        movies = db.Reviews.slice((page - 1) * perpage, page * perpage);
        break;
      default:
        alert("Error fetch");
    }
  }

  return Promise.resolve({
    page,
    perpage,
    totalpage: Math.ceil(movies.length / perpage),
    quantity: movies.length,
    movies,
  });
};

const getDetails = (classN, pattern) => {
  console.log("parr", pattern);
  let movies = [];
  let reviews = [];
  switch (classN) {
    case "movie":
      movies = db.Movies.filter((item) => item.id == pattern);
      console.log("mov", movies);
      reviews = db.Reviews.filter((item) => item.movieId == pattern)[0].items;
      break;

    default:
      alert("Error fetch");
  }

  return Promise.resolve({
    movies,
    reviews,
  });
};

export default DBUltity;
