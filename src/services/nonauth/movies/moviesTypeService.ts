import api from "../../common/api";

export const getShowTypes = async () => {
  const res = await api.get(`movies-types`);

  return res.data.data;
};

export const getShowTypesById = async (payload:any) => {
  const { user_id = 1, page = 1, limit = 10, type_id, search_in } = payload;
  const res = await api.get(`movies/${user_id}/${page}/${limit}/${type_id}`, {
    params: {  search_in },
  });
  console.log(res);

  return res.data.data;
};


