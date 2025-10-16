"use server"

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

interface FavoriteParams {
  id: number;
  isFavorite: boolean;
}

export const handeleFavorite = async ({ id, isFavorite }: FavoriteParams) => {
  const cookiesStore = cookies();

  const url = `http://localhost:4000/api/product/${id}/favorite`;

  await (isFavorite
    ? fetch(url, {
        headers: {
          Cookie: cookiesStore.toString(),
        },
        method: "DELETE",
      })
    : fetch(url, {
        headers: {
          Cookie: cookiesStore.toString(),
        },
        method: "POST",
      }));

  revalidateTag("getRackets");
};
