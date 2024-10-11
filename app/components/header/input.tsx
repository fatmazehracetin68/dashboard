"use client";

import { GoSearch } from "react-icons/go";

const Input = () => {
  return (
    <div className="flex gap-2 items-center text-grayy-500">
      <GoSearch />
      <input className="p-1 outline-none" placeholder="ara" type="text" />
    </div>
  );
};

export default Input;
