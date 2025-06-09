import { request } from "@/services/clientService";

const postRequest = (url, data, token) => {
  console.log(token);
  return request(
    {
      method: "post",
      url: url,
      data,
    },
    token
  );
};

export default postRequest;
