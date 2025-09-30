import { FC } from "react";
import { IRacket } from "@/types/racket";

type RacketProps = {
  racket: IRacket;
};

export const RacketContainer: FC<RacketProps> = ({ racket }) => {
  if (!racket) {
    return null;
  }

  const { name, imageUrl, price, model, year, description } = racket;

  return (
    <div>
      <div>{name}</div>
      <img src={imageUrl}></img>
      <div>{price}</div>
      <div>{model}</div>
      <div>{year}</div>
      <div>{description}</div>
    </div>
  );
};
