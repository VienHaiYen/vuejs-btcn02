export default {
  data() {
    return { showingSpinner: false };
  },
  methods: {
    showSpinner() {
      console.log("spin");
      this.showingSpinner = true; // Hiển thị spinner
      setTimeout(() => {
        this.showingSpinner = false; // Ẩn spinner
      }, 2000); // Thay đổi số 3000 thành số thời gian bạn muốn
    },
  },
  mounted() {
    this.showSpinner();
  },
  template: `
      <div v-if="showingSpinner" class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `,
};
