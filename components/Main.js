import BigPoster from "./BigPoster.js";
import Popular from "./Popular.js";
import Rating from "./Rating.js";
export default {
  components: {
    BigPoster,
    Popular,
    Rating,
  },
  data() {
    return {};
  },
  template: `
    <BigPoster />
    <Popular />
    <Rating />
    `,
};
