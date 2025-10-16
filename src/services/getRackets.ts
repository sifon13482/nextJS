import { IPaginations } from "@/types/paginations";
import { TQueryResponse } from "@/types/quryRespons";

import { IRacket } from "@/types/racket";
import { cookies } from "next/headers";

export const getRackets = async ({
  page,
  limit,
}: IPaginations): Promise<TQueryResponse<IRacket[]>> => {
  const cookieStore = await cookies();
  const result = await fetch(
    `http://localhost:4000/api/products?page=${page}&limit=${limit}`,
    {
      headers: {
        Cookie: cookieStore.toString(),
      },
      next: {
        tags: ["getRackets"],
      },
    }
  );
  console.log(cookieStore);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};
