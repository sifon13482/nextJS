import { rackets } from "@/constants/mock";
import styles from "./rackets.module.css";

import { FC } from "react";
import Link from "next/link";

export const Rackets: FC = () => {
  return (
    <div className={styles.container}>
      {rackets.map(({ id, name, imageUrl }) => (
        <div key={id} className={styles.item}>
          <Link href={`/racket/${id}`}>
            <img src={imageUrl}></img>
            <p>{name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
