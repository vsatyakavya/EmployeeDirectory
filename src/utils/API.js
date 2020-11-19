import axios from "axios";
const URL = "https://randomuser.me/api/?page=1&results=25&seed=abc&inc=gender,name,email,location,id";

export default {
  search: function() {
    return axios.get(URL);
  }
};