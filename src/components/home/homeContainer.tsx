import { FC } from "react";

// import { rackets } from "@/constants/mock";
import { Home } from "./home";
import { getRackets } from "@/services/getRackets";
import { getRacketsTop10 } from "@/services/getRacketsTop10";
import HomeNotFound from "@/app/notFound";

const racketsPromise = getRackets({ page: 1, limit: 10 });
const RacketTop10Promise = getRacketsTop10();

const [resultRackets, resultRacketsTop10] = await Promise.all([
  racketsPromise,
  RacketTop10Promise,
]);

export const HomeContainer: FC = () => {
  if (!resultRackets.data || !resultRacketsTop10.data) {
    return HomeNotFound();
  }


  return (
    <Home
      racketsAll={resultRackets.data}
      racketsTop10={resultRacketsTop10.data}
    />
  );
};
