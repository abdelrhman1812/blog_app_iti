import { request } from "@/services/clientService";

const deleteRequest = (url, token) => {
  console.log(token);
  return request(
    {
      method: "delete",
      url,
    },
    token
  );
};

export default deleteRequest;
