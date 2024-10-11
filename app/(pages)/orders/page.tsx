import Loader from "@/app/components/Loader";
import TableContainer from "@/app/components/table/TableContainer";
import { getOrders } from "@/app/fetch";
import { Suspense } from "react";

const Orders = () => {
  return (
    <div>
      <h1>Siparişler</h1>

      <Suspense fallback={<Loader />}>
        <List />
      </Suspense>
    </div>
  );
};

const List = async () => {
  const data = await getOrders();

  const colors = {
    Shipped: "bg-blue-600",
    Delivered: "bg-green-600",
    Processing: "bg-yellow-600",
  };

  return (
    <TableContainer>
      <thead className="border-b shadow">
        <tr>
          <th className="py-3">Sipariş Id</th>
          <th className="">Toplam Fiyat</th>
          <th>Ürün Sayısı</th>
          <th>Siparş Tarihi</th>
          <th>Nereye?</th>
          <th>Durum</th>
        </tr>
      </thead>

      <tbody>
        {data.map((order, key) => (
          <tr key={key}>
            <td className="pl-12">{order.order_id}</td>

            <td className="text-green-600 pl-12 ">${order.total_price}</td>

            <td className="pl-12">{order.items.reduce((a, b) => a + b.quantity, 0)}</td>

            <td className="whitespace-nowrap">
              {new Date(order.order_date).toLocaleDateString("tr", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </td>

            <td className="pl-5">{order.shipping_address.city}</td>

            <td>
              <span className={`${colors[order.status]} py-1 px-2 text-white rounded-lg shadow`}>
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Orders;
