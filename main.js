import DBUltity from "./DBUltity.js";
const { createApp } = Vue;
import App from "./App.js";
createApp(App).mount("#app");

$("#flexSwitchCheckDefault").click(() => {
  $("html").toggleClass("--dark-mode");
});
