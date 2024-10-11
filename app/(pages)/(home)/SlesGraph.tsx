import React from "react";
import Graph from "./Graph";
import { getOrders } from "@/app/fetch";

const SlesGraph = async () => {
  const data = await getOrders();
  return (
    <div className="mt-10 bg-white shadow rounded-lg p-5">
      <h2 className="font-semibold text-lg">Satış detayları</h2>
      <Graph data={data} />
    </div>
  );
};

export default SlesGraph;
