import { IPaginations } from "@/types/paginations";
import { TQueryResponse } from "@/types/quryRespons";

import { IRacket } from "@/types/racket";

export const getRackets = async ({
  page,
  limit,
}: IPaginations): Promise<TQueryResponse<IRacket[]>> => {
  const result = await fetch(
    `http://localhost:4000/api/products?page=${page}&limit=${limit}`
  );

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};
