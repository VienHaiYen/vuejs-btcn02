export default {
  data() {
    return { key: 20633 };
  },
  methods: {},
  template: `
    <div
      class="header d-flex justify-content-between align-items-center px-2 rounded"
    >
      <span>20120633</span>
      <h5>Movies info</h5>
      <div>
        <div class="my-2 text-center">{{key}}</div>
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
