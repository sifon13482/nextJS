import { FC} from "react";
import { Carousel } from "../carousel/carousel";
import { IRacket } from "@/types/racket";

type HomeProps = {
  racketsAll: IRacket[];
  racketsTop10: IRacket[];
};

export const Home: FC<HomeProps> = ({ racketsAll, racketsTop10 }) => {
  return (
    <div>
      <Carousel racketsAll={racketsAll} />;
      <Carousel racketsAll={racketsTop10} />;
    </div>
  );
};
