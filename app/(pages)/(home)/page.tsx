import InfoCard from "./InfoCard";
import icon1 from "@/app/assets/Images/icon-1.png";
import icon2 from "@/app/assets/Images/icon-2.png";
import icon3 from "@/app/assets/Images/icon-3.png";

import { Suspense } from "react";
import SlesGraph from "./SlesGraph";
import GraphLoader from "@/app/components/GraphLoader";
import { getValues } from "@/app/fetch";

const Home = async () => {
  const data = await getValues();

  const cards = [
    {
      icon: icon1,
      label: "Toplam Kullanıcı",
      value: data.totalUser,
    },
    {
      icon: icon2,
      label: "Toplam Sipariş",
      value: data.totalOrder,
    },
    {
      icon: icon3,
      label: "Toplam Satış",
      value: data.totalIncome,
    },
    {
      icon: icon2,
      label: "Ürün Sayısı",
      value: data.productsCount,
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {cards.map((i) => (
          <InfoCard icon={i.icon} label={i.label} value={i.value} />
        ))}
      </section>

      <Suspense fallback={<GraphLoader />}>
        <SlesGraph />
      </Suspense>
    </div>
  );
};

export default Home;
