import DBUltity from "../DBUltity.js";
let scaleNum = 1.02;

export default {
  data() {
    return { topLastestMovies: [], active: 0 };
  },
  methods: {
    async getdata() {
      this.topLastestMovies = await DBUltity.fetch(
        "get/5-lastest/?page=1&perpage=5"
      ).then((res) => res.movies);
    },

    prev() {
      this.active =
        this.active == 0 ? this.topLastestMovies.length - 1 : this.active - 1;
    },
    next() {
      let nextIndex =
        this.active == this.topLastestMovies.length - 1 ? 0 : this.active + 1;
      this.active = nextIndex;
    },
    scale(e) {
      e.target.parentElement.parentElement.style.transform = `scale(${scaleNum})`;
      e.target.parentElement.querySelector(".movie-short-info").style.display =
        "block";
    },
    reset(e) {
      let scaleValue = 1 / scaleNum;
      e.target.parentElement.parentElement.style.transform = `scale(${scaleValue})`;

      e.target.parentElement.querySelector(".movie-short-info").style.display =
        "none";
    },
  },
  mounted() {
    this.getdata();
  },
  template: `
    <div id="carouselExampleFade" class="carousel slide carousel-fade m-2 d-flex align-items-center justify-content-center" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="slide-item carousel-item d-flex align-items-center flex-column position-relative" v-for="(i,index) in topLastestMovies"  :class="{active:this.active==index}">
          <img :src='i.image' @mouseover="scale" @mouseout="reset" alt="..." />
          <div class="movie-short-info px-2 py-1" style="position:absolute;bottom:0;left:50%;transform:translateX(-50%); line-spacing:2px">
            <li>{{i.title}} - {{i.year}}</li>
            <li>Rating - {{i.ratings.imDb}}</li>
            <li>Thời gian - {{i.runtimeStr}}</li>
          </div>
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
