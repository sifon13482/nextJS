"use client";

import { ButtonDefault } from "@/components/button/buttonDefault";
import { FC, useActionState, useEffect } from "react";
import { ILoginState } from "@/types/login";
import { SingUpAction } from "./singUp-action";

const SingUp: FC = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<
    ILoginState,
    FormData
  >(SingUpAction, {
    error: "",
    redirectTo: "",
  });

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="login">login</label>
        <input type="text" name="login" required />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" name="password" />
      </div>
      {error && <div>{error}</div>}
      <ButtonDefault name="login" disabled={isPending}/>
    </form>
  );
};

export default SingUp;



