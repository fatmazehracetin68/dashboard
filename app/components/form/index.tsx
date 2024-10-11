"use client";

import Input from "./Input";
import { FormEvent } from "react";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { Product } from "@/app/types";
import { inputs } from "@/app/constants";
import { createProduct, editProduct } from "@/app/fetch";

type Props = {
  editItem: Product | undefined;
};

const Form = ({ editItem }: Props) => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const productData = Object.fromEntries(formData.entries());

    if (!editItem) {
      const id = Math.round(Math.random() * 100);
      productData.image_url = `https://picsum.photos/seed/${id}/500/500`;

      // varsayılan rating ve yorum sayısını belirle
      // @ts-ignore
      productData.rating = 0;
      // @ts-ignore
      productData.reviews_count = 0;

      createProduct(productData as unknown as Product).then(() => {
        router.push("/products");
        router.refresh();
        toast.success("Ürün başarıyla oluştu");
      });
    } else {
      let updatedItem = { ...editItem, ...productData };

      editProduct(updatedItem).then(() => {
        router.push("/products");
        router.refresh();
        toast.info("Ürün başarıyla düzenlendi");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5 text-xl">
      {inputs.map((i) => (
        //  @ts-ignore
        <Input item={i} value={editItem ? editItem[i.name] : ""} />
      ))}

      <div className="flex justify-end gap-5">
        <Link href="." type="button" className="bg-gray-300 hover:bg-gray-400 py-2 px-5 rounded-lg">
          Geri
        </Link>

        <button type="submit" className="bg-blue-300 hover:bg-blue-400 py-2 px-5 rounded-lg">
          {editItem ? "Kaydet" : "Oluştur"}
        </button>
      </div>
    </form>
  );
};

export default Form;
