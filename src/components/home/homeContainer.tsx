import { FC } from "react";

import { rackets } from "@/constants/mock";
import { Home } from "./home";

export const HomeContainer: FC = () => {
  return <Home racketsAll={rackets} />;
};
