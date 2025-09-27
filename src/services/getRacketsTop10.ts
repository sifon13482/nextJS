import { TQueryResponse } from "@/types/quryRespons";
import { IRacket } from "@/types/racket";

export const getRacketsTop10 = async (): Promise<TQueryResponse<IRacket[]>> => {
  const result = await fetch(`http://localhost:4000/api/top-10`);

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};
