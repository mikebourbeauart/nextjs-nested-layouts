import { useRouter } from "next/router";
import { ShopPageLayout } from ".";
import { useState, useEffect } from "react";
import { CarsGrid } from "~/components/AgGridExample";

const DetailsPage = () => {
  const router = useRouter();
  const { details } = router.query;
  const [carData, setCarData] = useState({
    make: "",
    model: "",
    price: "",
  });

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => {
        const sel = rowData[Number(details)];
        setCarData(() => ({ ...sel }));
      });
  }, [details]);

  console.log(carData);

  return (
    <div>
      <h3>Make of {carData.make}</h3>
      <h3>Model is {carData.model}</h3>
      <h3>Priced at {carData.price}</h3>
    </div>
  );
};

DetailsPage.getLayout = ShopPageLayout;

export default DetailsPage;
