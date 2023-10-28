export default {
  data() {
    return {};
  },
  template: `
    <div
      class="d-flex justify-content-between align-items-center bg-bland-grey px-2 rounded"
    >
      <span>20120633</span>
      <h5>Movies info</h5>
      <div>
        <div class="my-2 text-center">key</div>
        <div class="my-2 form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"
            >Dark mode</label
          >
        </div>
      </div>
    </div>
    `,
};
