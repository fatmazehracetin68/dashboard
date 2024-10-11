import Form from "@/app/components/form";
import { getProductByID } from "@/app/fetch";

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const isAdd = params.slug === "new";

  let editItem;

  if (!isAdd) {
    editItem = await getProductByID(params.slug);
  }

  return (
    <div>
      <h1>{isAdd ? "Yeni Ürün Ekle" : "Ürünü Düzenle"}</h1>

      <Form editItem={editItem} />
    </div>
  );
};

export default Page;
