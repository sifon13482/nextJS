import styles from "./rackets.module.css";
import { IRacket } from "@/types/racket";

import { FC } from "react";
import Link from "next/link";
import { TRacketsArr } from "@/types/rackets";

export const Rackets: FC<TRacketsArr> = ({ rackets }) => {
    if (!rackets) return null
  return (
    <div className={styles.container}>
      {rackets.map(({ id, name, imageUrl } : IRacket) => (
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
