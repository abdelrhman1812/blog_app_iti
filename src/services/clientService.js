import axios from "axios";

const clientApi = axios.create({
  baseURL: "https://blog-app-node-js-pi.vercel.app",
});

export const request = async (options, token) => {
  try {
    if (token) {
      clientApi.defaults.headers.token = token;
    }
    const res = await clientApi.request(options);
    console.log(res);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      throw error;
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export default clientApi;
