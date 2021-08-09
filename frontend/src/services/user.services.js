import axios from "axios";

// const debug = process.env.NODE_ENV !== "production";

export const userService = {
  login,
  logout,
  register,
  update,
};

const service = axios.create({
  baseURL: "http://localhost:8002/api/user/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// service.interceptors.request.use(
//   (config) => {
//     if (debug) {
//       console.info("config:", config);
//     }
//     return config;
//   },
//   (error) => {
//     if (debug) {
//       console.error("error:", error);
//     }
//     return Promise.reject(error);
//   }
// );

// service.interceptors.response.use(
//   (response) => {
//     if (debug) {
//       console.info("response:", response);
//     }
//     return response;
//   },
//   (error) => {
//     if (debug) {
//       console.error("error:", error);
//     }
//     return Promise.reject(error);
//   }
// );

function login(user) {
  return service
    .post(
      "login/",
      new URLSearchParams({
        email: user.username,
        password: user.password,
      })
    )
    .then(resp => {
      if (resp.data.access_token) {
        localStorage.setItem("user", JSON.stringify(resp.data));
      }
      return resp.data
    });
}

function logout() {
  return service.post(
    "logout/",
    new URLSearchParams({
      access_token: JSON.parse(localStorage.getItem("user")).access_token,
    })
  ).then(
    localStorage.removeItem("user")
  )
}

function register(user) {
  return service
    .post(
      "register/",
      new URLSearchParams({
        grant_type: "password",
        username: user.username,
        password: user.password,
        confirm_password: user.confirm_password,
      })
    )
    .then((resp) => {
      const user = resp.data;
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
}

function update(user) {
  return user;
}
