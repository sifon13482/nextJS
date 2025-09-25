"use client";

import styles from "./carusele.module.css";

import React, { FC, useState } from "react";

type CarouselProps = {
  racketsAll: object[];
};

type DisplayedRackets = {
  id?: number;
  imageUrl?: string;
  name?: string;
  model?: string;
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

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {displayedRackets.map(
          ({ id, imageUrl, name, model }: DisplayedRackets) => (
            <p key={id}>
              <img src={imageUrl} />
              <br></br>
              {name}
              <br></br>
              {model}
            </p>
          )
        )}
      </div>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
