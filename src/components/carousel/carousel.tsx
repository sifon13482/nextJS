"use client";

import { rackets } from "@/constants/mock";
import styles from "./carusele.module.css";

import React, { useState } from "react";

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);
  const [index2, setIndex2] = useState(2);

  const length = rackets.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    const newIndex1 = index1 - 1;
    const newIndex2 = index2 - 1;

    setIndex(newIndex < 0 ? length - 1 : newIndex);
    setIndex1(newIndex1 < 0 ? length - 1 : newIndex1);
    setIndex2(newIndex2 < 0 ? length - 1 : newIndex2);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    const newIndex1 = index1 + 1;
    const newIndex2 = index2 + 1;

    setIndex(newIndex >= length ? 0 : newIndex);
    setIndex1(newIndex1 >= length ? 0 : newIndex1);
    setIndex2(newIndex2 >= length ? 0 : newIndex2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <p>
          <img src={rackets[index].imageUrl} />
          <br></br>
          {rackets[index].name}
          <br></br>
          {rackets[index].model}
        </p>
        <p>
          <img src={rackets[index1].imageUrl} />
          <br></br>
          {rackets[index1].name}
          <br></br>
          {rackets[index1].model}
        </p>
        <p>
          <img src={rackets[index2].imageUrl} />
          <br></br>
          {rackets[index2].name}
          <br></br>
          {rackets[index2].model}
        </p>
      </div>
      <div className={styles.handle}>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
