"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {
  item: {
    url?: string;
    name: string;
    icon: JSX.Element;
  };
};

const Navlink = ({ item }: Props) => {
  const path = usePathname();
  const isActive = path === item.url;
  return (
    <Link
      className={`flex gap-2 items-center py-5 px-5 hover:bg-gray-200 transition border-l-2 border-transparent ${
        isActive && "text-blue-500   border-blue-500 "
      }`}
      href={item.url || "/"}
    >
      {item.icon}
      <span className="nav-text"> {item.name}</span>
    </Link>
  );
};

export default Navlink;
