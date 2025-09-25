import { FC } from "react";
import { Carousel } from "../carousel/carousel";

type HomeProps = {
  racketsAll: object[];
};

export const Home: FC<HomeProps> = ({ racketsAll }) => {
  return <Carousel racketsAll={racketsAll} />;
};
