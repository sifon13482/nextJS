import { FC, Suspense } from "react";
import { Carousel } from "../carousel/carousel";

type HomeProps = {
  racketsAll: object[];
  racketsTop10: object[];
};

export const Home: FC<HomeProps> = ({ racketsAll, racketsTop10 }) => {
  return (
    <div>
      <Suspense fallback={<div>racketsAll Loading.......</div>}>
        <Carousel racketsAll={racketsAll} />;
      </Suspense>

      <Suspense fallback={<div>racketsTop10 Loading.......</div>}>
        <Carousel racketsAll={racketsTop10} />;
      </Suspense>
    </div>
  );
};
