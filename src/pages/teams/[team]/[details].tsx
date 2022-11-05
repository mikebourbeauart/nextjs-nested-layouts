import { useRouter } from "next/router";
import { TeamPageLayout } from ".";
import { useState, useEffect } from "react";

const TeamPlayersPage = () => {
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
    <section>
      <h3>Make of {carData.make}</h3>
      <h3>Model is {carData.model}</h3>
      <h3>Priced at {carData.price}</h3>
    </section>
  );
};

TeamPlayersPage.getLayout = TeamPageLayout;

export default TeamPlayersPage;
