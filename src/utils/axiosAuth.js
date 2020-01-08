import axios from "axios";

export const axiosAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    },
    baseURL: "https://pizza-party-bw.herokuapp.com"
  });
};
