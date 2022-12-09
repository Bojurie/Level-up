import axios from 'axios'

const apiUrl = "http://localhost:5001/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGJhMzQzNjY5MTM5ZDg2ZmU5MGZjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDE3MjA1OSwiZXhwIjoxNjcxMDM2MDU5fQ.xf3J1JOH5mhPlhvQVzsmky3u1luYC9YAAsOPoBv7YCE"


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: apiUrl,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
