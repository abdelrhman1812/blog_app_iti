import { request } from "@/services/clientService";

const getRequest = (url, token) => {
  return request(
    {
      method: "get",
      url: url,
    },
    token
  );
};

export default getRequest;
