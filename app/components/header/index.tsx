import React from "react";
import Input from "./input";
import { BiSolidBellRing } from "react-icons/bi";
import Image from "next/image";
Image;

const Header = () => {
  return (
    <div className="border p-3 flex justify-between">
      <Input />
      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer" />
        <div className="flex gap-3">
          <Image className="object-contain" width={40} height={40} src={""} alt="user" />
          <div>
            <h4 className="font-semibold">Fatma Çetin</h4>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
