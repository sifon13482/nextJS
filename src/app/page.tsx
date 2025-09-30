import { HomeContainer } from "@/components/home/homeContainer";
import { Suspense } from "react";

export const Page = () => {
  return (
    <Suspense fallback={<div>racketsAll Loading.......</div>}>
      <HomeContainer />
    </Suspense>
  );
};

export default Page;
