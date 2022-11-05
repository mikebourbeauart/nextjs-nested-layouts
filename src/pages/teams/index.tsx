import Link from "next/link";
import { useEffect } from "react";
import styles from "../../styles/Teams.module.css";

const TeamsPage = () => {
  return <div>This is the Teams landing page</div>;
};

export const NestedLayout = ({ children }: any) => {
  useEffect(() => {
    console.log("TeamsPageLayout mounted");
    return () => console.log("TeamsPageLayout unmounted");
  }, []);
  return (
    <div className={styles.teams}>
      <div className={styles.sidebar}>
        <h2>Teams</h2>
        <nav>
          <ol>
            <li>
              <Link href="/teams/cars/shop">Cars</Link>
            </li>
            <li>
              <Link href="/teams/team2/shop">Team2</Link>
            </li>
            <li>
              <Link href="/teams/team3/shop">Team3</Link>
            </li>
          </ol>
        </nav>
      </div>
      {children}
    </div>
  );
};

export const TeamsPageLayout = (page: any) => (
  <NestedLayout>{page}</NestedLayout>
);

TeamsPage.getLayout = TeamsPageLayout;

export default TeamsPage;
