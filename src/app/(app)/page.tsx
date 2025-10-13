import { HomeContainer } from "@/components/home/homeContainer";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <Suspense fallback={<div>racketsAll Loading.......</div>}>
      <HomeContainer />
    </Suspense>
  );
};

export default HomePage;
