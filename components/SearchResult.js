import DBUltity from "../DBUltity.js";

export default {
  props: ["search"],
  data() {
    return { topLastestMovies: [] };
  },
  methods: {
    async getdata() {
      this.topLastestMovies = await DBUltity.fetch(
        `get/movie/${this.search}?page=1&perpage=15`
      ).then((res) => res.movies);
    },
    showDetails(i) {
      console.log(i);
      this.$emit("showDetails", i);
    },
  },
  watch: {
    search: function () {
      this.getdata();
    },
  },
  mounted() {
    this.getdata();
  },
  template: `{{search}}
      <div class="d-flex flex-wrap justify-content-center align-items-start my-2" >
        <div class="card mt-3 mx-3" v-for="(i,index) in topLastestMovies" @click="showDetails(i.id)" style="width:30%">
          <img class="card-img-top" :src='i.image' style="aspect-ratio:2/3" alt="Card image cap">
          <div class="card-body p-2 text-center">
            <h6 class="card-title">{{i.title}}</h6>
            <p class="card-text">( {{i.year}} )</p>
          </div>
        </div>
      </div>
    `,
};
