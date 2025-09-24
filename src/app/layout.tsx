import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode; // Универсальный тип для children
  // children?: ReactElement; // Только React элементы, ? - необязательный пропс
}

// Тип FC<Readonly> свойства объекта неизменяемые (readonly).
// помогает избежать непреднамеренных мутаций пропсов
// или состояния внутри компонента.

const RootLayout: FC<Readonly<LayoutProps>> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
