import DBUltity from "../DBUltity.js";

export default {
  data() {
    return { topLastestMovies: [] };
  },
  methods: {
    async getdata() {
      this.topLastestMovies = await DBUltity.fetch(
        "get/popular/?page=1&perpage=15"
      ).then((res) => res.movies);
      // console.log(this.topLastestMovies);
    },
  },
  mounted() {
    this.getdata();
    console.log(123);
  },
  template: `
      <div class="d-flex flex-wrap justify-content-around">
        <div class="card mt-3" v-for="(i,index) in topLastestMovies" style="width:30%">
          <img class="card-img-top" :src='i.image' style="aspect-ratio:2/3" alt="Card image cap">
          <div class="card-body p-2 text-center">
            <h6 class="card-title">{{i.title}}</h6>
            <p class="card-text">( {{i.year}} )</p>
          </div>
        </div>
        
      </div>
    `,
};
