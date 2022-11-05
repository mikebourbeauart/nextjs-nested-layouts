import { useRouter } from "next/router";
import { CarsPageLayout } from ".";

const TeamPlayersPage = () => {
  const router = useRouter();
  const { team } = router.query;
  return (
    <section>
      <h3>{team} players</h3>
    </section>
  );
};

TeamPlayersPage.getLayout = CarsPageLayout;

export default TeamPlayersPage;
