"use client";

import { deleteProduct } from "@/app/fetch";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleDelete = () => {
    deleteProduct(id).then(() => {
      router.refresh();
      toast.success("Ürün kaldırıldı.");
    });
  };
  return (
    <button onClick={handleDelete} className="py-1 px-3 bg-[#e68878] rounded-md hover:bg-[#ac5f51]">
      Sil
    </button>
  );
};

export default DeleteButton;
