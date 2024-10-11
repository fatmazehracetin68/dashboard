import { FaBox, FaChartArea, FaCog, FaHeart, FaUsers, FaDiceD6 } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { TiHome } from "react-icons/ti";

export const sections = [
  {
    icon: <TiHome />,
    name: "Anasayfa",
    url: "/",
  },
  {
    icon: <FaUsers />,
    name: "Kullanıcılar",
    url: "/users",
  },
  {
    icon: <FaDiceD6 />,
    name: "Ürünler",
    url: "/products",
  },
  {
    icon: <IoIosPricetags />,
    name: "Siparişler",
    url: "/orders",
  },
  {
    icon: <FaHeart />,
    name: "Favoriler",
  },
  {
    icon: <FaChartArea />,
    name: "Grafikler",
  },

  {
    icon: <FaCog />,
    name: "Ayarlar",
  },
  {
    icon: <FaBox />,
    name: "Envanter",
  },
];
