import DBUltity from "../DBUltity.js";

export default {
  props: ["id"],
  data() {
    return { movieDetails: {}, reviews: [] };
  },
  methods: {
    async getdata() {
      let info = await DBUltity.fetch(
        `details/movie/tt4154796?page=1&perpage=15`
        // `details/movie/${this.id}?page=1&perpage=15`
      );
      this.movieDetails = info.movies[0];
      this.reviews = info.reviews;
      console.log("ww", this.reviews);
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
      <h3>Reviews</h3>
      <div class="card mt-2" v-for="(i,index) in reviews">
        <div class="card-body" >
          <h5 class="card-title">{{i.username}} <i style="color:#333; font-size:10px">{{i.date}}</i></h5>
          <p class="card-text">{{i.title}}</p>
          <p class="card-text">{{i.content}}</p>
        </div>
      </div>
    `,
};
