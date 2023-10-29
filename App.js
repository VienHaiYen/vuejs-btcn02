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
    return {
      key: 20633,
      seachValue: "",
      isSeaching: false,
    };
  },
  methods: {
    receiveData(data) {
      this.seachValue = data;
      console.log(233, data);
      this.isSeaching = true;
    },
  },
  template: `
    <Header key="20633"/>
    <Navbar  @changeData="receiveData"/>
    <Main :home="!isSeaching" :search="seachValue"/>
    <Footer />
    `,
};
