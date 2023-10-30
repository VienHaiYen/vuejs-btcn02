export default {
  data() {
    return { inputValue: "" };
  },
  methods: {
    search() {
      console.log(this.inputValue);
      this.$emit("changeData", this.inputValue);
    },
    returnHome() {
      this.$emit("returnHome");
    },
  },
  template: `
    <div
      class="navbar d-flex justify-content-between align-items-center p-2 rounded mt-2"
    >
      <button class="btn" @click="returnHome">Home</button>
      <div>
        <div class="search d-flex">
          <input
            class="p-1 mx-1 form-control"
            type="text"
            placeholder="Search"
            id="search"
            v-model="inputValue"
          />
          <button class="btn btn-outline-success px-2 py-0 m-1 fw-normal" @click="search">
            Search
          </button>
        </div>
      </div>
    </div>
    `,
};
