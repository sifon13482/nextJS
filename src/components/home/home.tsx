import { FC} from "react";
import { Carousel } from "../carousel/carousel";

type HomeProps = {
  racketsAll: object[];
  racketsTop10: object[];
};

export const Home: FC<HomeProps> = ({ racketsAll, racketsTop10 }) => {
  return (
    <div>
      <Carousel racketsAll={racketsAll} />;
      <Carousel racketsAll={racketsTop10} />;
    </div>
  );
};
