import  { useEffect, useState } from "react";
import Input from "../../../common/components/input/Input";
import Table from "../../../common/components/tables/Table";
import Button from "../../../common/components/button/Button";

import type { searchInterface } from "../../../common/interface/search/search";
import useForm from "../../../hooks/common/form/useForm";
import {
  useDeleteFavShows,
  useGetfavShows,
} from "../../../hooks/nonauth/movies/useMovies";
import useDebonce from "../../../hooks/common/debounce/debounce";
import {
  useGetShowType,
  useGetShowTypeById,
} from "../../../hooks/nonauth/movies/useMoviesType";
import { Outlet, useNavigate } from "react-router-dom";

function FavShowCollection() {

  const [search, setSearch] = useState("");
  const [id, setid] = useState(null);
  const navigate = useNavigate();
  const debouncedSearch = useDebonce(setSearch);
  const initialValues: searchInterface = {
    search_in: "",
  };
  //formik
  const formik = useForm(initialValues, (values) => {
    console.log(values);
  });
  //all show types
  const { data: showType, isLoading: isShowType } = useGetShowType();
  //all fav shows
  const { data: allFavShows, isLoading: isAllFavShows } = useGetfavShows({
    usre_id: 1,
    page: 1,
    limit: 10,
    search_in: search,
  });
  //fave shows by type
  const { data: allFavShowsById, isLoading: isAllFavShowsById } =
    useGetShowTypeById({
      usre_id: 1,
      page: 1,
      limit: 10,
      type_id: id,
      search_in: search,
    });

  //deelet show

  const { mutate: deleteFavShow, isPending: isDeleteFavShow } =
    useDeleteFavShows();
  //types click
  const handleClick = (id: any) => {
    console.log(id, "e");
    setid(id);
  };
  const data = allFavShowsById?.length ? allFavShowsById : allFavShows || [];
  //reusable colmn and data  satructure in table
  const columns = [
    { header: "#", accessor: "slNo" },
    { header: "Title", accessor: "title" },
    { header: "Director", accessor: "director" },
    { header: "Category", accessor: "catogery.name" },
    { header: "Budget", accessor: "budget" },
    { header: "Duration", accessor: "duration" },
    { header: "Year", accessor: "year" },
    { header: "User", accessor: "user.name" },
    { header: "Action", accessor: "Action" },
  ];
  //table dta
  const tableData = data?.map((item: any, i: number) => ({
    slNo: i + 1,
    id: item.id,
    ...item,

    formattedTime: new Date(item.time).toLocaleString(),
  }));
  //search
  useEffect(() => {
    debouncedSearch(formik.values.search_in);
  }, [formik.values.search_in, debouncedSearch]);
if(isAllFavShows || isShowType || isAllFavShowsById){
    <h1>Loading...</h1>
}
  return (
    <>
      <div className="sm:p-5    flex flex-col h-full  ">
        <div className="w-full flex flex-col space-y-6 h-full  gap-x-3    px-5">
          <div className="w-full flex flex-col sm:flex-row   gap-x-3    ">
            <Input
              placeholder={"Search titles"}
              className={
                "w-90 bg-primary text-text-secondary py-2 border-text-tertiary rounded-2xl px-5 text-base"
              }
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              name={"search_in"}
              value={formik.values.search_in}
              type="text"
            />
            <Button
              onClick={() => navigate("modal/add-fav-show/index")}
              className="bg-button-primary text-text-tetra  px-4 mt-3 sm:mt-0 py-2 rounded-lg"
              name="Add new entry"
            />
          </div>
          <div className="w-full">
            <div className=" flex h-full rounded-md w-full     bg-tertiary ">
            {showType?.map((item: any) => (
              <Button
                key={item + 1}
                onClick={() => handleClick(item?.id)}
                className=" text-white border-text-tetra  px-4 py-3 "
                name={ isDeleteFavShow?"deleting..":item?.name}
              />
            ))}
          </div>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full justify-center">
          <div className="h-[600px] overflow-auto   ">
            <Table
              columns={columns}
              data={tableData}
              deleteShow={deleteFavShow}
            />
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default FavShowCollection;
