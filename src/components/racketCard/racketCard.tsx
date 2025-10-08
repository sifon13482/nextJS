"use client";

import { UserContext } from "@/context/userProvider/userProvider";
import { IRacket } from "@/types/racket";
import { FC, use } from "react";
import { ButtonDefault } from "../button/buttonDefault";
import styles from "./racketCard.module.css";



export const RacketCard: FC<IRacket> = ({
  name,
  imageUrl,
  price,
  model,
  year,
  description,
  id,

}) => {
  const { user } = use(UserContext);

  return (
    <div key={id}>
      <div>{name}</div>
      <img src={imageUrl} className={styles.img}></img>
      <div>{price}</div>
      <div>{model}</div>
      <div>{year}</div>
      <div>{description}</div>
      {user && <ButtonDefault name={"избранное"} />}
    </div>
  );
};
