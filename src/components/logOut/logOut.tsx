import { useTransition } from "react";
import { ButtonDefault } from "../button/buttonDefault";

const handleLogout = async () => {
  await fetch(`http://localhost:4000/api/auth/logout`, {
    credentials: "include",
    method: "DELETE",
  });

  location.assign("/");
};

export const LogOut = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <ButtonDefault
      disabled={isPending}
      name={"logOut"}
      onClick={() => startTransition(handleLogout)}
    ></ButtonDefault>
  );
};
