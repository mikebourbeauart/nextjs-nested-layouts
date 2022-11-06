import { useRouter } from "next/router";
import Link from "next/link";
import { TeamsPageLayout } from "../index";
import nestLayout from "../../../utils/nestLayout";
import { useEffect, useState } from "react";

const CarsPage = () => {
  const router = useRouter();
  const { team } = router.query;
  return <section className="CarsPageMike">The cars main page</section>;
};

const CarsLayout = ({ children }: any) => {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("CarsPageLayout mounted");
    return () => console.log("CarsPageLayout unmounted");
  }, []);

  const router = useRouter();

  return (
    <div className="flex flex-col ">
      <header>
        <nav>
          <ul>
            <li>
              <Link href={`/teams/cars`}>About</Link>
            </li>
            <li>
              <Link href={`/teams/cars/shop`}>Shop</Link>
            </li>
            <li>
              <Link href={`/teams/cars/fixtures`}>Fixtures</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
};

const getLayout = (page: any) => <CarsLayout>{page}</CarsLayout>;

export const CarsPageLayout = nestLayout(TeamsPageLayout, getLayout);

CarsPage.getLayout = CarsPageLayout;

export default CarsPage;
