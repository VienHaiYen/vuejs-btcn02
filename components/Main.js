import BigPoster from "./BigPoster.js";
import Popular from "./Popular.js";
import Rating from "./Rating.js";
import SearchResult from "./SearchResult.js";
export default {
  props: ["display"],

  components: {
    BigPoster,
    Popular,
    Rating,
    SearchResult,
  },
  data() {
    return {};
  },
  template: `
    <div v-if="display">
      <SearchResult />
    </div>
    <div v-if="!display">
      <BigPoster />
      <Popular />
      <Rating />
    </div>
    `,
};
