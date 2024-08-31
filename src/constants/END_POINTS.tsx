const BASE_URL = "https://upskilling-egypt.com:3003/api/v1";
export const BASE_IMG_URL = "https://upskilling-egypt.com:3003";

// USERS URL
const BASE_USERS = `${BASE_URL}/Users`;

export const USERS_URLS = {
  login: `${BASE_USERS}/Login`,
  register: `${BASE_USERS}/Register`,
  changePass: `${BASE_USERS}/ChangePassword`,
  currentUser: `${BASE_USERS}/currentUser`,
  verify: `${BASE_USERS}/verify`,
};

export const TASKS_URLS = {
  tasksManger: `${BASE_URL}/Task/manager`,
  delete: (id: number) => `${BASE_URL}/Task/${id}`,
};

// HEADERS TOKEN
export const BASE_HEADERS = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
