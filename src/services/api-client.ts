import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "450d9a6704a249cda3ad235aeea95562",
  },
});
