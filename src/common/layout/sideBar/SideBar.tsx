import React from "react";
import { useNavigate } from "react-router-dom";

interface SideBarItem {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

interface SideBarProps {
  SideBardata: SideBarItem[];
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({ SideBardata, setOpen, open }) => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#09121B] border-r border-[#121A27] flex flex-col text-text-tertiary w-[260px]">

      <div className="py-5 flex justify-between items-center bg-[#0F1724] text-text-secondary px-5">
        <div className="flex items-center gap-x-3">
          <h1>icon</h1>
          <h1>Favourites</h1>
        </div>
        {setOpen && (
          <h1 className="sm:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            X
          </h1>
        )}
      </div>
      <div className="flex flex-col mt-10 gap-y-3">
        {SideBardata.map((item, i) => (
          <div
            key={i}
            className="flex py-4 px-10 hover:bg-tertiary hover:text-text-hover cursor-pointer gap-x-5"
            onClick={() => {
              navigate(item.url);
              if (setOpen) setOpen(false); 
            }}
          >
            <h1>{item.icon}</h1>
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
