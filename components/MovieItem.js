import DBUltity from "../DBUltity.js";

export default {
  data() {
    return { topLastestMovies: [] };
  },
  methods: {
    async getdata() {
      this.topLastestMovies = await DBUltity.fetch(
        "get/popular/movies?page=1&perpage=15"
      ).then((res) => res.movies);
      // console.log(this.topLastestMovies);
    },
  },
  mounted() {
    this.getdata();
    console.log(123);
  },
  template: `
      <div class="card mb-3">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <img class="card-img-bottom" src="..." alt="Card image cap">
      </div>
    `,
};
