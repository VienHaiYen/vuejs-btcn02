import DBUltity from "../DBUltity.js";

export default {
  props: ["search"],
  data() {
    return { topLastestMovies: [] };
  },
  methods: {
    async getdata() {
      this.topLastestMovies = await DBUltity.fetch(
        `get/all-movie/${this.search}?page=1&perpage=15`
      ).then((res) => res.movies);
      console.log(this.topLastestMovies);
    },
  },
  watch: {
    search: function () {
      this.getdata();
    },
  },
  mounted() {
    this.getdata();
    console.log(123);
  },
  template: `{{search}}
      <div class="d-flex flex-wrap justify-content-center align-items-start my-2">
        <div class="card mt-3 mx-3" v-for="(i,index) in topLastestMovies" style="width:30%">
          <img class="card-img-top" :src='i.image' style="aspect-ratio:2/3" alt="Card image cap">
          <div class="card-body p-2 text-center">
            <h6 class="card-title">{{i.title}}</h6>
            <p class="card-text">( {{i.year}} )</p>
          </div>
        </div>
      </div>
    `,
};
