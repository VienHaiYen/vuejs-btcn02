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
      isDetail: false,
    };
  },
  template: `
    <div v-if="!home && isDetail">
      <MovieItem />
    </div>
      <div v-if="!home &&!isDetail">
        <SearchResult :search="search"/>
      </div>
    <div v-if="home && !isDetail">
      <BigPoster />
      <Popular />
      <Rating />
    </div>
    `,
};
