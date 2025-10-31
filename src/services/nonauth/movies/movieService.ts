import api from "../../common/api";

export const addFavShows = async (payload: any) => {
  const { user_id, type_id } = payload;

  console.log(payload, "payload");

  const res = await api.post(`movies/${1}/${type_id}`, {
    ...payload,
  });

  return res.data;
};

export const getFvaShow = async (payload: any) => {
  const { user_id = 1, page = 1, limit = 10, search_in, type_id } = payload;
  const res = await api.get(`movies/${user_id}/${page}/${limit}`, {
    params: { search_in },
  });

  console.log(res);

  return res?.data?.data;
};

export const getFvaShowById = async (payload: any) => {
  const { user_id = 1, show_id } = payload;
  const res = await api.get(`movies/${1}/${show_id}`);
  console.log(res);
  return res?.data?.data;
};

export const editFavShows = async (payload: any) => {
  const { user_id = 1, show_id } = payload;
  console.log(payload, "payload");
  const res = await api.put(`movies/${user_id}/${show_id}`, {
    ...payload,
  });

  return res.data;
};

export const deleteFavShows = async (payload: any) => {
  const { user_id = 1, show_id } = payload;
  console.log(payload, "payload");
  const res = await api.delete(`movies/${user_id}/${show_id}`);

  return res.data;
};
