import { FC } from "react";

import { Home } from "./home";
import { getRackets } from "@/services/getRackets";
import { getRacketsTop10 } from "@/services/getRacketsTop10";
import notFound from "@/app/not-found";

const racketsPromise = getRackets({ page: 1, limit: 10 });
const racketTop10Promise = getRacketsTop10();

const [resultRackets, resultRacketsTop10] = await Promise.all([
  racketsPromise,
  racketTop10Promise,
]);

export const HomeContainer: FC = () => {
  if (!resultRackets.data || !resultRacketsTop10.data) {
    return notFound();
  }

  return (
    <Home
      racketsAll={resultRackets.data}
      racketsTop10={resultRacketsTop10.data}
    />
  );
};
