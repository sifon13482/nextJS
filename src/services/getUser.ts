import { TQueryResponse } from "@/types/quryRespons";
import { IUser } from "@/types/user";
import { cookies } from "next/headers";

export const getUser = async (): Promise<TQueryResponse<IUser>> => {
  const cookieStore = await cookies();

  const result = await fetch(`http://localhost:4000/api/auth/user`, {
    credentials: "include",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  // console.log(result)

  if (result.status === 401) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { user: IUser } = await result.json();

  return { isError: false, data: data.user };
};



/* import { TQueryResponse } from "@/types/quryRespons";
import { IUser } from "@/types/user";
import { cookies } from "next/headers";

export const getUser = async (): Promise<TQueryResponse<IUser>> => {
  const cookiesStore = await cookies();

  const result = await fetch(`http://localhost:4000/api/auth/user`, {
    credentials: "include",
    headers: {
      Cookies: cookiesStore.toString(),
    },
  });
  // console.log(result)

  if (result.status === 401) {
      return { isError: false, data: undefined };
    }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { user: IUser } = await result.json();
  return { isError: false, data: data.user};
};
 */