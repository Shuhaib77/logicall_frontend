import { useQuery } from "@tanstack/react-query";
import {
  getShowTypes,
  getShowTypesById,
} from "../../../services/nonauth/movies/moviesTypeService";

export const useGetShowType = () => {
  return useQuery({
    queryFn: getShowTypes,
    queryKey: ["showTypes"],
  });
};

export const useGetShowTypeById = (payLoad: any) => {
  return useQuery({
    queryFn: () => getShowTypesById(payLoad),
    queryKey: ["showType", payLoad],
  });
};
