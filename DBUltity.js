// import data from "./db/data";

const DBUltity = {
  fetch: (queryString) => {
    const [type, classN, pattern, query] = queryString.split("/");
    const params = new URLSearchParams(query);
    console.log(params.toString());
  },
};
export default DBUltity;
