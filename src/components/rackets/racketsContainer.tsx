import { getRackets } from "@/services/getRackets";

import { FC } from "react";
import { Rackets } from "./rackets";

export const RacketsContainer: FC = async () => {
  const { data, isError } = await getRackets({ page: 1, limit: 20 });

  if (!data) {
    return "no result";
  }
  if (isError) {
    return "Error";
  }

  return <Rackets rackets={data} />;
};
