import { useRouter } from "next/router";
import nestLayout from "../../../../utils/nestLayout";

import { useEffect, useState } from "react";

import { TeamsPageLayout } from "../../index";
import { CarsGrid } from "~/components/AgGridExample";
import { CarsPageLayout } from "../";

const ShopPage = () => {
  const router = useRouter();
  const { team } = router.query;
  return <section></section>;
};

const NestedLayout = ({ children }: any) => {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("CarsPageLayout mounted");
    return () => console.log("CarsPageLayout unmounted");
  }, []);

  const router = useRouter();

  return (
    <div className="flex flex-row">
      <CarsGrid />
      {children}
    </div>
  );
};

const getLayout = (page: any) => <NestedLayout>{page}</NestedLayout>;

export const ShopPageLayout = nestLayout(CarsPageLayout, getLayout);

ShopPage.getLayout = ShopPageLayout;

export default ShopPage;
