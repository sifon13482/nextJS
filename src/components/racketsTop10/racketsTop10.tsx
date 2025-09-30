import { getRacketsTop10 } from "@/services/getRacketsTop10";
import { FC } from "react";
import { Carousel } from "../carousel/carousel";

export const RacketsTop10Container: FC = async () => {
  const { data, isError } = await getRacketsTop10();

  if (!data) {
    return "no result";
  }
  if (isError) {
    return "Error";
  }
  return <Carousel racketsAll={data} />;
};
