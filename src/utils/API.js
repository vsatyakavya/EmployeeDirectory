import axios from "axios";
const URL = "https://randomuser.me/api/?page=1&results=25&seed=abc&inc=gender,name,email,dob,id,location";

export default {
  search: function() {
    return axios.get(URL);
  }
};