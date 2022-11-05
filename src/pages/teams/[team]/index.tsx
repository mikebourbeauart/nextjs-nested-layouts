import { useRouter } from "next/router";
import Link from "next/link";
import { TeamsPageLayout } from "../index";
import nestLayout from "../../../utils/nestLayout";
import { useEffect, useState } from "react";
import { CarsGrid } from "~/components/AgGridExample";

const TeamPage = () => {
  const router = useRouter();
  const { team } = router.query;
  return <section>{/* <h3>{team} i dah team</h3> */}</section>;
};

const NestedLayout = ({ children }: any) => {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("TeamPageLayout mounted");
    return () => console.log("TeamPageLayout unmounted");
  }, []);

  const router = useRouter();
  const { team } = router.query;

  const childToParentHandler = (childData: any) => {
    console.log("dataFromChild", childData);
    // setData(childData);

    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => {
        const sel = rowData[childData].make;
        console.log(sel);
        setData(sel);
      });
    //   .then((selData) => console.log("detailData", selData));
  };

  return (
    <div className="flex flex-row flex-auto">
      <CarsGrid />
      <section>{children}</section>
    </div>
  );
};

const getLayout = (page: any) => <NestedLayout>{page}</NestedLayout>;

export const TeamPageLayout = nestLayout(TeamsPageLayout, getLayout);

TeamPage.getLayout = TeamPageLayout;

export default TeamPage;
