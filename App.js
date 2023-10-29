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
    return { key: 20633 };
  },
  template: `
    <Header key="20633"/>
    <Navbar />
    <Main />
    <Footer />
    `,
  // <Footer />
};
