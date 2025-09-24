import styles from "./link.module.css";

import NextLink from "next/link";
import { ComponentProps, FC } from "react";
import { usePathname } from "next/navigation";

type LinkProps = ComponentProps<typeof NextLink>;

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  const pathname = usePathname();

  const isActive = pathname === props.href;

  return (
    <NextLink {...props} className={`${isActive && styles.isActive}`}>
      {children}
    </NextLink>
  );
};
