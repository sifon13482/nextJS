"use client";

import { IRacket } from "@/types/racket";
import { ButtonDefault } from "../button/buttonDefault";
import { RacketCard } from "../racketCard/racketCard";
import styles from "./carusele.module.css";

import React, { FC, useState } from "react";

type CarouselProps = {
  racketsAll: IRacket[];
};

export const Carousel: FC<CarouselProps> = ({ racketsAll }) => {
  const [index, setIndex] = useState(0);
  const displayedRackets = racketsAll.slice(index, index + 3);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? racketsAll.length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= racketsAll.length ? 0 : newIndex);
  };

  if (displayedRackets === undefined) return null;

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {displayedRackets.map(
          ({ id, imageUrl, name, model, price, userData }: IRacket) => (
            <RacketCard
              key={id}
              id={id}
              name={name}
              imageUrl={imageUrl}
              model={model}
              price={price}
              isFavorite={Boolean(userData?.isFavorite)}
            />
          )
        )}
      </div>
      <div>
        <ButtonDefault onClick={handlePrevious} name={"Previous"} />
        <ButtonDefault onClick={handleNext} name={"Next"} />
      </div>
    </div>
  );
};
