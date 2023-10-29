export default {
  data() {
    return {};
  },
  template: `
    <div
      class="navbar d-flex justify-content-between align-items-center p-2 rounded mt-2"
    >
      <span>Home</span>
      <div>
        <div class="search d-flex">
          <input
            class="p-1 mx-1 form-control"
            type="text"
            placeholder="Search"
            id="search"
          />
          <button class="btn btn-outline-success px-2 py-0 m-1 fw-normal">
            Search
          </button>
        </div>
      </div>
    </div>
    `,
};
