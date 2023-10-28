import db from "../db/data.js";

const get5NewestMovies = (movies, n) => {
  console.log(11, movies);
  let nLastestMovies = movies
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .splice(0, n);

  return nLastestMovies;
};

export default {
  data() {
    return { movies: [], topLastestMovies: [], active: 0 };
  },
  methods: {
    getdata() {
      this.movies = db.Movies;
      this.topLastestMovies = get5NewestMovies(this.movies, 5);
      console.log(this.topLastestMovies);
    },
    prev() {
      this.active =
        this.active == 0 ? this.topLastestMovies.length - 1 : this.active - 1;
    },
    next() {
      this.active =
        this.active == this.topLastestMovies.length - 1 ? 0 : this.active + 1;
      console.log("next");
    },
  },
  mounted() {
    this.getdata();
  },
  template: `
    <div id="carouselExampleFade" class="carousel slide carousel-fade m-2" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(i,index) in topLastestMovies" :class="{active:this.active==index}" >
          <img :src='i.image' class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" @click="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" @click="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `,
};
