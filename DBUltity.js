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
  if (pattern) {
    console.log("da vaopp", pattern);
    movies = db.Movies.filter(
      (item) => item.fullTitle.toLowerCase().indexOf(pattern) !== -1
    );
  } else {
    switch (classN) {
      case "all-movie":
        movies = db.Movies.splice((page - 1) * perpage, page * perpage);
        break;
      case "5-lastest":
        movies = getNNewestMovies(db.Movies, 5);
        break;
      case "popular":
        movies = db.Top50Movies.splice((page - 1) * perpage, page * perpage);
        break;
      case "top-movies":
        movies = db.MostPopularMovies.splice(
          (page - 1) * perpage,
          page * perpage
        );
        break;
      case "review":
        movies = db.Reviews.splice((page - 1) * perpage, page * perpage);
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

export default DBUltity;
