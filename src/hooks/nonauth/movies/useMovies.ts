import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addFavShows,
  deleteFavShows,
  editFavShows,
  getFvaShow,
  getFvaShowById,
} from "../../../services/nonauth/movies/movieService";
import { toast } from "sonner";

export const useAddFavShows = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addFavShow"],
    mutationFn: addFavShows,
    onSuccess: (data) => {
      console.log("success", data);
      toast.success(data?.message || "Added Successfully");
      queryClient.invalidateQueries({ queryKey: ["data"] });
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message;

      if (message && typeof message === "object") {
        const firstError = Object.values(message)[0];
        toast.error(firstError as string);
      } else {
        toast.error(message || err?.message || "Add show failed");
      }
    },
  });
};

export const useGetfavShows = (payLoad: any) => {
  return useQuery({
    queryKey: ["favShows", payLoad],
    queryFn: () => getFvaShow(payLoad),
  });
};

export const useGetfavShowsById = (payLoad: any) => {
  return useQuery({
    queryKey: ["favShow", payLoad],
    queryFn: () => getFvaShowById(payLoad),
  });
};

export const useEditFavShows = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["editFavShow"],
    mutationFn: editFavShows,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["favShows"] });
      queryClient.invalidateQueries({ queryKey: ["favShow"] });
      console.log("success", data);
      toast.success(data?.message || "edited Successfully");
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message;

      if (message && typeof message === "object") {
        const firstError = Object.values(message)[0];
        toast.error(firstError as string);
      } else {
        toast.error(message || err?.message || "Edut failed");
      }
    },
  });
};

export const useDeleteFavShows = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteFavShow"],
    mutationFn: deleteFavShows,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["favShows"] });
      queryClient.invalidateQueries({ queryKey: ["favShow"] });
      console.log("success", data);
      toast.success(data?.message || "Show Deleted Successfully");
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message;

      if (message && typeof message === "object") {
        const firstError = Object.values(message)[0];
        toast.error(firstError as string);
      } else {
        toast.error(message || err?.message || "Deletion failed");
      }
    },
  });
};
