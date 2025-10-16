import styles from "./rackets.module.css";
import { IRacket } from "@/types/racket";

import { FC } from "react";
import Link from "next/link";
import { RacketCard } from "../racketCard/racketCard";

interface IRacketsArr {
  rackets: IRacket[];
}

export const Rackets: FC<IRacketsArr> = ({ rackets }) => {
  if (!rackets) return null;
  return (
    <div className={styles.container}>
      {rackets.map(
        ({ id, name, imageUrl, price, model, year, description, userData }) => (
          <div key={id} className={styles.item}>
            <Link href={`/racket/${id}`}>
              <RacketCard
                name={name}
                imageUrl={imageUrl}
                price={price}
                model={model}
                year={year}
                description={description}
                isFavorite={Boolean(userData?.isFavorite)}
                id={id}
              />
            </Link>
          </div>
        )
      )}
    </div>
  );
};
