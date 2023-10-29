import BigPoster from "./BigPoster.js";
import Popular from "./Popular.js";
import Rating from "./Rating.js";
export default {
  props: ["display"],

  components: {
    BigPoster,
    Popular,
    Rating,
  },
  data() {
    return {};
  },
  template: `
    <div v-if="display">
      
    </div>
    <div v-if="!display">
      <BigPoster />
      <Popular />
      <Rating />
    </div>
    `,
};
