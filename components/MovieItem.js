import DBUltity from "../DBUltity.js";

export default {
  props: ["id"],
  data() {
    return { movieDetails: {} };
  },
  methods: {
    async getdata() {
      this.movieDetails = await DBUltity.fetch(
        `details/movie/tt4154796?page=1&perpage=15`
        // `details/movie/${this.id}?page=1&perpage=15`
      ).then((res) => res.movies[0]);
      console.log("ww", this.movieDetails);
    },
  },
  mounted() {
    this.getdata();
    console.log(123);
  },
  template: `
      <div class="card mb-3 d-flex flex-row">
        <img class="card-img-top" :src="movieDetails.image" style="width:20vw; object-fit: contain" alt="Card image cap">
        <div class="p-3 d-flex flex-column justify-content-center">
          <h2 class="card-title">{{movieDetails.title}}</h2>
          <p class="card-title"><b>Year: </b>{{movieDetails.year}}</p>
          <p class="card-title"><b>Introduce: </b>{{movieDetails.plot}}</p>
          <p class="card-text"><b>Director</b>: <span v-for="(i,index) in movieDetails.directorList"><span v-if="index!=0">, </span>{{i.name}}</span></p>
          <p class="card-text"><b>Actor</b>: <span v-for="(i,index) in movieDetails.actorList"><span v-if="index!=0">, </span>{{i.name}}</span></p>
          <p class="card-text"><b>Genre</b>: <span v-for="(i,index) in movieDetails.genreList"><span v-if="index!=0">, </span>{{i.value}}</span></p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Review</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <img class="card-img-bottom" src="..." alt="Card image cap">
      </div>
    `,
};
