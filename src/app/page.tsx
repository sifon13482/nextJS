import { HomeContainer } from "@/components/home/homeContainer";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>racketsAll Loading.......</div>}>
      <HomeContainer />
    </Suspense>
  );
};

export default Page;
