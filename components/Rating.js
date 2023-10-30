import DBUltity from "../DBUltity.js";
import Slide3Item from "./Slide3Item.js";

export default {
  components: { Slide3Item },
  data() {
    return {
      movies: [],
      topPopularMovies: [],
      active: 0,
    };
  },
  methods: {
    async getdata() {
      this.topPopularMovies = await DBUltity.fetch("get/top-movies/").then(
        (res) => res.movies
      );
      console.log(22211, this.topPopularMovies);
    },
  },

  mounted() {
    this.getdata();
    console.log(11111, this.topPopularMovies);
  },
  template: `
    <Slide3Item title="Most Popular" :topLastestMovies="topPopularMovies" />
  `,
};
