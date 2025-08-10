import axios from "axios";

const clientApi = axios.create({
  // baseURL: "https://blog-app-node-js-pi.vercel.app",
  baseURL: "http://localhost:3000",
});

export const request = async (options, token) => {
  console.log(options);
  try {
    if (token) {
      clientApi.defaults.headers.token = token;
    }
    const res = await clientApi.request(options);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export default clientApi;
