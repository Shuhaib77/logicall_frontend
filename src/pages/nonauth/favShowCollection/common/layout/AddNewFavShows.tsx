import React, { useEffect, useState } from "react";
import Button from "../../../../../common/components/button/Button";
import Modal from "../../../../../common/components/Modal/Modal";
import Input from "../../../../../common/components/input/Input";
import useForm from "../../../../../hooks/common/useForm";
import type { FavShowFormValues } from "../../../../../common/interface/movies/movieInterfaces";
import {
  useAddFavShows,
  useEditFavShows,
  useGetfavShowsById,
} from "../../../../../hooks/nonauth/movies/useMovies";
import { useGetShowType } from "../../../../../hooks/nonauth/movies/useMoviesType";
import Select from "../../../../../common/components/input/Select";
import { useNavigate, useParams } from "react-router-dom";
import { formatForDateTimeLocal } from "../../../../../utils/dateTime/formatForDateTimeLocal";

const AddNewFavShows = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutate: addFavShow, isPending: isAddFavShow } = useAddFavShows();
  const { mutate: editFavShow, isPending: isEditFavShow } = useEditFavShows();
  const { data: showType, isLoading: isShowType } = useGetShowType();
  const { data: favShowById, isLoading: isFavShowById } = useGetfavShowsById({
    user_id: 1,
    show_id: id,
  });

  console.log(favShowById, "favShowById");

  const initialValues: FavShowFormValues = {
    title: "",
    director: "",
    type_id: "",
    budget: "",
    location: "",
    duration: "",
    year: "",
    time: "",
  };

  const formik = useForm(initialValues, (values) => {
    if (favShowById && id) {
      editFavShow({
        ...values,
        show_id: id,
        time: new Date(values.time),
      });
    } else {
      addFavShow({
        ...values,
        time: new Date(values.time),
      });
    }
  });
  const data: {
    palceholder: string;
    name: keyof FavShowFormValues;
    type: string;
    label?: string;
    options?: { label: string; value: string }[];
  }[] = [
    { palceholder: "Enter title", name: "title", type: "text", label: "Title" },
    { palceholder: "director", name: "director", type: "text" },
    {
      palceholder: "Movies/Tvshow",
      name: "type_id",
      type: "select",
      options: [
        { label: "Select Type", value: "" },
        ...(Array.isArray(showType)
          ? showType.map((item) => ({
              label: item?.name || "",
              value: item?.id || "",
            }))
          : []),
      ],
    },
    { palceholder: "Enter budget", name: "budget", type: "text" },
    { palceholder: "Enter location", name: "location", type: "text" },
    { palceholder: "Enter duration", name: "duration", type: "text" },
    { palceholder: "Enter year", name: "year", type: "Year" },
    { palceholder: "Enter time", name: "time", type: "datetime-local" },
  ];
  useEffect(() => {
    if (favShowById && id) {
      formik.setValues({
        ...formik.values,
        title: favShowById?.title || "",
        director: favShowById?.director || "",
        type_id: favShowById?.type_id || "",
        budget: favShowById?.budget || "",
        location: favShowById?.location || "",
        duration: favShowById?.duration || "",
        year: favShowById?.year || "",
        time: formatForDateTimeLocal(favShowById?.time) || "",
      });
    }
  }, [favShowById, id]);
  console.log(favShowById);

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center border-b px-5 border-gray-300 dark:border-gray-600 ">
        <h1 className="text-text-secondary text-2xl">Product</h1>
        <Button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-800 px-4 py-2 dark:hover:text-gray-200  "
          name="x"
        />
      </div>
      <div className="px-5">
        <form action="" className="space-y-5" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-3">
            {data.slice(0, 1).map((item, i) => (
              <div key={i + 1} className="flex flex-col">
                <label htmlFor="">{item?.label}</label>
                <Input
                  className={
                    "w-full bg-primary text-text-secondary py-2 border-text-tertiary rounded-2xl px-5 text-base"
                  }
                  placeholder={item?.palceholder}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  name={item?.name}
                  value={formik.values[item?.name]}
                  type={item?.type}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {data.slice(1, 3).map((item, i) =>
              item?.type === "select" ? (
                <Select
                  onChange={formik.handleChange}
                  options={item?.options}
                  value={formik.values[item?.name]}
                  name={item.name}
                  onBlur={formik.handleBlur}
                  className={
                    "w-full bg-primary border rounded-2xl text-text-secondary py-3 border-text-tertiary  px-5 text-base"
                  }
                />
              ) : (
                <div key={i + 1} className="flex flex-col">
                  <label htmlFor="">{item?.label}</label>
                  <Input
                    className={
                      "w-full bg-primary text-text-secondary py-2 border-text-tertiary rounded-2xl px-5 text-base"
                    }
                    placeholder={item?.palceholder}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    name={item?.name}
                    value={formik.values[item?.name]}
                    type={item?.type}
                  />
                </div>
              )
            )}
          </div>
          <div className="grid grid-cols-1 gap-3">
            {data.slice(3, 6).map((item, i) => (
              <div key={i + 1} className="flex flex-col">
                <label htmlFor="">{item?.label}</label>
                <Input
                  className={
                    "w-full bg-primary text-text-secondary py-2 border-text-tertiary rounded-2xl px-5 text-base"
                  }
                  placeholder={item?.palceholder}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  name={item?.name}
                  value={formik.values[item?.name]}
                  type={item?.type}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {data.slice(6).map((item, i) => (
              <div key={i + 1} className="flex flex-col">
                <label htmlFor="">{item?.label}</label>
                <Input
                  className={
                    "w-full bg-primary text-text-secondary py-2 border-text-tertiary rounded-2xl px-5 text-base"
                  }
                  placeholder={item?.palceholder}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  name={item?.name}
                  value={formik.values[item?.name]}
                  type={item?.type}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-x-5 text-text-secondary  justify-end">
            <Button
              onClick={() => navigate(-1)}
              className="bg-primary  px-4 py-2 rounded-lg mt-4"
              name="Close"
            />
            <Button
              className="bg-button-primary text-text-tetra  px-4 py-2 rounded-lg mt-4"
              name="Submit"
              type={"submit"}
            />
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default AddNewFavShows;
