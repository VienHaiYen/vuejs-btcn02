import BigPoster from "./BigPoster.js";
import Popular from "./Popular.js";
import Rating from "./Rating.js";
import SearchResult from "./SearchResult.js";
import MovieItem from "./MovieItem.js";
import Spinner from "./Spinner.js";
export default {
  props: ["home", "search"],

  components: {
    BigPoster,
    Popular,
    Rating,
    SearchResult,
    MovieItem,
    Spinner,
  },
  data() {
    return {
      isDetail: false,
      crrId: "",
    };
  },
  watch: {
    home: function () {
      console.log("home", this.home);
      if (this.home == true) {
        this.isDetail = false;
      }
    },
    search: function () {
      console.log(this.search);
      this.isDetail = false;
      // this.home = false;
    },
  },
  methods: {
    getDetailMovieID(data) {
      this.crrId = data;
      console.log(this.crrId);
      this.isDetail = true;
      this.returnNotHome();
    },
    returnNotHome() {
      this.$emit("returnNotHome");
    },
  },
  template: `
    <Spinner/>
    <div v-if="!home && isDetail">
      <MovieItem :id="crrId"/>
    </div>
      <div v-if="!home &&!isDetail">
        <SearchResult :search="search" @showDetails="getDetailMovieID"/>
      </div>
    <div v-if="home && !isDetail" >
      <BigPoster  @showDetails="getDetailMovieID" />
      <Popular  @showDetails="getDetailMovieID"/>
      <Rating  @showDetails="getDetailMovieID"/>
    </div>
    `,
};
