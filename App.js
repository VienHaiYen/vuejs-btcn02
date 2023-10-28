import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
export default {
  components: {
    Header,
    Navbar,
    Main,
    Footer,
  },
  data() {
    return { count: 0 };
  },
  template: `
    <Header />
    <Navbar />
    <Main />
    `,
  // <Footer />
};
