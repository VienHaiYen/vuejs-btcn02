import BigPoster from "./BigPoster.js";
import Popular from "./Popular.js";
import Rating from "./Rating.js";
import SearchResult from "./SearchResult.js";
import MovieItem from "./MovieItem.js";
export default {
  props: ["home", "search"],

  components: {
    BigPoster,
    Popular,
    Rating,
    SearchResult,
    MovieItem,
  },
  data() {
    return {
      isDetail: true,
      crrId: "",
    };
  },
  methods: {
    getDetailMovieID(data) {
      this.crrId = data;
      this.isDetail = true;
    },
  },
  template: `
    <div v-if=" isDetail">
      <MovieItem :id="crrId"/>
    </div>
      <div v-if="!home &&!isDetail">
        <SearchResult :search="search" @showDetails="getDetailMovieID"/>
      </div>
    <div v-if="home && !isDetail">
      <BigPoster />
      <Popular />
      <Rating />
    </div>
    `,
};
