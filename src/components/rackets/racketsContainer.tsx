import { getRackets } from "@/services/getRackets";

import { FC } from "react";
import { Rackets } from "./rackets";

const { data, isError } = await getRackets({ page: 1, limit: 20 });

export const RacketsContainer: FC = () => {
  if (!data) {
    return "no result";
  }
  if (isError) {
    return "Error";
  }
  return <Rackets rackets={data} />;
};
