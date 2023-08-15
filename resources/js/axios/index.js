import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL

axios.interceptors.request.use(
  (config) => {
    // add token to header, using it when api protected
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.access_token;
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const authErrorCode = 401;
    const ErrorCodes = [
      {
        code: 500,
        message: "une erreur est survenue !",
      },
      {
        code: 400,
        message: "Manque certaines informations essentielles à la demande. !",
      },
      {
        code: 422,
        message: "Veuillez remplir tous les champs obligatoires!.",
      },
      {
        code: 403,
        message: "cette action ne peut pas être executée !",
      },
    ];
    if (error.response.status === authErrorCode) {
      // redirect to login
    }
    const errorReceived = error.response.status;
    const foundError = ErrorCodes.find((error) => error.code === errorReceived);
    if (foundError) {
      // display notification
    }
    return Promise.reject(error);
  }
);

export default axios;
//
