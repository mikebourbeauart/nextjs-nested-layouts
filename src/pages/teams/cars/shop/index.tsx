import nestLayout from "../../../../utils/nestLayout";

import { useEffect } from "react";

import { CarsGrid } from "~/components/AgGridExample";
import { CarsPageLayout } from "../";

const ShopPage = ({ children }: any) => {
  useEffect(() => {
    console.log("CarsPageLayout mounted");
    return () => console.log("CarsPageLayout unmounted");
  }, []);

  return (
    <div className="flex flex-row">
      <CarsGrid />
      {children}
    </div>
  );
};

const getLayout = (page: any) => <ShopPage>{page}</ShopPage>;

export const ShopPageLayout = nestLayout(CarsPageLayout, getLayout);

ShopPage.getLayout = CarsPageLayout;

export default ShopPage;
