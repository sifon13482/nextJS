"use server";
 
import { parseSetCookie } from "@/helpers/helper";
import { ILoginState } from "@/types/login";
import { cookies } from "next/headers";

export const loginAction = async (_: ILoginState, formData: FormData) => {
  const login = formData.get("login")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  //   можно сделать валидацию перед отправкой в бэкэнд
  console.log(password)

  const result = await fetch(`http://localhost:4000/api/auth/login`, {
    credentials: "include",
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (result.status !== 200) {
    return { error: "Imvalid login or password" };
  }

  const cookiesStore = await cookies();
  const setCookieHeader = result.headers.getSetCookie();

  if (setCookieHeader) {
    const parsed = parseSetCookie(setCookieHeader);
    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return { error: "", redirectTo: "/" };
};
