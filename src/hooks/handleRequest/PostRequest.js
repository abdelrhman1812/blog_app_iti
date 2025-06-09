import { request } from "@/services/clientService";

const postRequest = (url, data) => {
  return request({
    method: "post",
    url: url,
    data,
  });
};

export default postRequest;
