// import { TOP_10_REQUEST_TAG } from "@/constants/api";
import { TQueryResponse } from "@/types/quryRespons";
import { IRacket } from "@/types/racket";
import { cookies } from "next/headers";

export const getRacketsTop10 = async (): Promise<TQueryResponse<IRacket[]>> => {
  const cookieStore = await cookies();
  const result = await fetch(`http://localhost:4000/api/top-10`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    // next: {
    //   tags: [TOP_10_REQUEST_TAG],
    // },
  });

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};
