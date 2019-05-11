import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-faeea.firebaseio.com/"
});

export default instance;
