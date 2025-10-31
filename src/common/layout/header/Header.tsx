import React from "react";
import Button from "../../components/button/Button";
import { Menu } from "lucide-react";

interface HeaderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setOpen, open }) => {
  return (
    <div className="py-5 px-4 border-b border-[#121A27] flex gap-x-6 items-center bg-[#0F1724] text-text-secondary">
      <Button
        className="sm:hidden p-2 border-none text-white"
        onClick={() => setOpen(!open)}
        name={<Menu size={26} />}
      />
      <h1>Showss</h1>
    </div>
  );
};

export default Header;
