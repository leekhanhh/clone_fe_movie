import UseCallApi from "../hooks/UseCallApi";

const { UseGet, UsePost, UseEdit, UseDelete } = UseCallApi();
export const getUserProfileApi = (param: string) => {
  const url = `/v1/user/get/${param}`;
  return UseGet({ url, requiredToken: true });
};
export const getProfileApi = () => {
  const url = `/v1/account/me`;
  return UseGet({ url, requiredToken: true });
};
