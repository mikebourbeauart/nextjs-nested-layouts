import { useRouter } from "next/router";
import { SelectionPageLayout } from "..";
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
      <CarsGrid />
    </div>
  );
};

DetailsPage.getLayout = SelectionPageLayout;

export default DetailsPage;
