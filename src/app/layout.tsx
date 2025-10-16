import { Metadata } from "next";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode; // Универсальный тип для children
  // children?: ReactElement; // Только React элементы, ? - необязательный пропс
}

// Тип FC<Readonly> свойства объекта неизменяемые (readonly).
// помогает избежать непреднамеренных мутаций пропсов
// или состояния внутри компонента.

export const metadata: Metadata = {
  title: "Tennis shop",
  description: "base next.js",
};

const RootLayout: FC<Readonly<LayoutProps>> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
