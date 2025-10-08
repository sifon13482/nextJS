import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { UserProvider } from "@/context/userProvider/userProvider";
import { getUser } from "@/services/getUser";
import NextTopLoader from "nextjs-toploader";
import { FC, PropsWithChildren } from "react";

// interface LayoutProps {
//   children: ReactNode;
// }

const Layout: FC<PropsWithChildren> = async ({ children }) => {
  const { data } = await getUser();

  return (
    <UserProvider user={data ?? null}>
      <NextTopLoader color={"red"} showSpinner={false} />
      <Header />
      {children}
      <Footer />
    </UserProvider>
  );
};

export default Layout;
