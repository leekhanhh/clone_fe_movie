import UseCallApi from "../hooks/UseCallApi";

const { UsePost } = UseCallApi();
export const loginApi = (params: object) => {
  const url = "/auth/login";
  return UsePost({ url, params });
};
export const registerApi = (params: object) => {
  const url = "/v1/user/register";
  return UsePost({ url, params });
};
