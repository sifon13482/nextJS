import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { FavoriteProvider } from "@/context/favoriteProvider";
import { UserProvider } from "@/context/userProvider/userProvider";
import { getUser } from "@/services/getUser";
import NextTopLoader from "nextjs-toploader";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = async ({ children }) => {
  const { data } = await getUser();

  return (
    <UserProvider user={data ?? null}>
      <FavoriteProvider>
        <NextTopLoader color={"red"} showSpinner={false} />
        <Header />
        {children}
        <Footer />
      </FavoriteProvider>
    </UserProvider>
  );
};

export default Layout;
