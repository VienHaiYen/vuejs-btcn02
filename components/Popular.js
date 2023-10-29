import db from "../db/data.js";

const getNMostPopularMovies = (movies, n) => {
  let nMostPopularMovies = movies
    .sort((a, b) => b.imDbRatingCount - a.imDbRatingCount)
    .splice(0, n);

  return nMostPopularMovies;
};
function chunkMaxLength(arr, chunkSize, maxLength) {
  let group = Array.from({ length: maxLength }, () => arr.splice(0, chunkSize));
  return group;
}

export default {
  data() {
    return {
      movies: [],
      topLastestMovies: [],
      groupPopularMovie: [[]],
      active: 0,
    };
  },
  methods: {
    getdata() {
      this.movies = db.MostPopularMovies;
      this.topPopularMovies = getNMostPopularMovies(this.movies, 15);

      this.groupPopularMovie = chunkMaxLength(
        this.topPopularMovies,
        3,
        Math.ceil(this.topPopularMovies.length / 3)
      );
    },
    prev() {
      this.active =
        this.active == 0 ? this.groupPopularMovie.length - 1 : this.active - 1;
    },
    next() {
      this.active =
        this.active == this.groupPopularMovie.length - 1 ? 0 : this.active + 1;
    },
  },
  mounted() {
    this.getdata();
  },
  template: `
    <h5 class=" pt-3 ob-1">Top Rating</h5>
    <div id="carouselExampleFade" class="carousel slide carousel-fade m-2" style="height:200px" data-bs-ride="carousel">
      <div class="carousel-inner  d-flex justify-content-around h-100" style="position:static; width:100%">
        <div v-for="(i,index) in groupPopularMovie[active]" style="flex:1; margin:0 3rem" class="active d-flex justify-content-center">
          <img :src='i.image' class="fill" alt="...">
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
