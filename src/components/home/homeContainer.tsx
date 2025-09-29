import { FC, Suspense } from "react";

import { Home } from "./home";
import { getRackets } from "@/services/getRackets";
import { getRacketsTop10 } from "@/services/getRacketsTop10";
import { notFound } from "next/navigation";

export const HomeContainer: FC = async () => {
  const racketsPromise = getRackets({ page: 1, limit: 10 });
  const racketTop10Promise = getRacketsTop10();
  const [resultRackets, resultRacketsTop10] = await Promise.all([
    racketsPromise,
    racketTop10Promise,
  ]);

  if (!resultRackets.data || !resultRacketsTop10.data) {
    return notFound();
  }

  return (
    <Suspense fallback={<div>racketsAll Loading.......</div>}>
      <Home
        racketsAll={resultRackets.data}
        racketsTop10={resultRacketsTop10.data}
      />
    </Suspense>
  );
};
