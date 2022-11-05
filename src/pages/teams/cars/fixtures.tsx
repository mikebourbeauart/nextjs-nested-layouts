import { useRouter } from "next/router";
import { CarsPageLayout } from ".";

const TeamFixturesPage = () => {
  const router = useRouter();
  const { team } = router.query;
  return (
    <section>
      <h3>{team} fixtures</h3>
    </section>
  );
};

TeamFixturesPage.getLayout = CarsPageLayout;

export default TeamFixturesPage;
