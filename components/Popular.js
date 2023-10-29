import DBUltity from "../DBUltity.js";
let scaleNum = 1.1;

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
    async getdata() {
      this.topPopularMovies = await DBUltity.fetch("get/popular/").then(
        (res) => res.movies
      );

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
    scale(e) {
      e.target.parentElement.style.transform = `scale(${scaleNum})`;
      e.target.parentElement.querySelector(".movie-short-info").style.display =
        "block";
    },
    reset(e) {
      let scaleValue = 1 / scaleNum;
      e.target.parentElement.style.transform = `scale(${scaleValue})`;

      e.target.parentElement.querySelector(".movie-short-info").style.display =
        "none";
    },
  },
  mounted() {
    this.getdata();
  },
  template: `
    <h5 class=" pt-3 ob-1">Top Rating</h5>
    <div id="carouselExampleFade" class="carousel slide carousel-fade m-2" style="height:200px" data-bs-ride="carousel">
      <div class="carousel-inner  d-flex justify-content-around h-100" style="position:relative; width:100%">
        <div v-for="(i,index) in groupPopularMovie[active]" style="flex:1; width:32%" class="active d-flex justify-content-center flex-column">
        <img :src='i.image' @mouseover="scale" @mouseout="reset" class="fill" alt="...">
        <div class="movie-short-info px-2 py-1 mb-2" style="position:absolute;bottom:0;left:0;right:0; width:100%;">{{i.title}} - {{i.year}}</div>
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
