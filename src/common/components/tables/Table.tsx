import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

export interface Column {
  header: string;
  accessor: string;
  
}

export interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  deleteShow:(payload: { user_id: number; show_id: number }) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, deleteShow }) => {
  const navigate = useNavigate();
  const getValue = (obj: any, path: string) => {
    return path.split(".").reduce((acc, part) => acc?.[part], obj);
  };

  return (
    <div className="overflow-x-auto  shadow-md rounded-3xl">
      <table className="min-w-full text-left rounded-2xl   border-2   border-[#121A27] ">
        <thead className="bg-secondary ">
          <tr className="rounded-3xl">
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="px-6 py-5 text-sm font-semibold text-text-hover"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((row, index) => (
              <tr
                key={index}
                className="border-2    border-[#121A27] hover:bg-tetra hover:text-text-hover text-[#d9d9d9]  transition duration-200"
              >
                {columns.map((col) => (
                  <td
                    key={col.accessor}
                    className="px-6 py-6 text-sm  hover:text-text-hover "
                  >
                    {col.accessor === "Action" ? (
                      <div className="flex gap-x-3">
                        <Button
                          className="border py-2 px-3"
                          name="edit"
                          onClick={() =>
                            navigate(`modal/add-fav-show/${row.id}`)
                          }
                        />
                        <Button
                          className="border py-2 px-3"
                          name="Delete"
                          onClick={() =>
                            deleteShow({
                              user_id: 1,
                              show_id: row?.id,
                            })
                          }
                        />
                      </div>
                    ) : (
                      getValue(row, col.accessor)
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-white py-6"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
