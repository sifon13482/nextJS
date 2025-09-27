import { FC } from "react";
import { IRacket } from "@/types/racket";
import { getRacketById } from "@/services/getRacketById";

interface ComponentProps {
  racket: object;
}

export const RacketContainer: FC<ComponentProps> = ({ racket }) => {
  if (!racket) {
    return null;
  }

  const { name, imageUrl, price, model, year, description }: IRacket = racket;
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
