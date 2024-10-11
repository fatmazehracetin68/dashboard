import { Suspense } from "react";
import Modal from "./modal";
import Loader from "@/app/components/Loader";
import Table from "@/app/components/table";

type Props = {
  searchParams: Record<string, string> | undefined | null;
};

const Users = async ({ searchParams }: Props) => {
  return (
    <div>
      <h1>Kullanıcılar</h1>

      <Suspense fallback={<Loader designs="mt-20" />}>
        <Table />
      </Suspense>

      {/* eğer urlde'de show parametresi varsa ekrana modal bas */}
      {searchParams?.show && <Modal id={searchParams.show} />}
    </div>
  );
};

export default Users;
