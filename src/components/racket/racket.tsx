import { FC } from "react";
import { rackets } from "@/constants/mock";

interface ComponentProps {
  racketId: string;
}

type DisplayedRacket = {
  name: string;
  imageUrl: string;
  price: number;
  model: string;
  year: number;
  description: string;
};

export const Racket: FC<ComponentProps> = ({ racketId }) => {
  const racket = rackets.find(({ id }) => id == +racketId);

  if (!racket) {
    return null;
  }

  const { name, imageUrl, price, model, year, description }: DisplayedRacket =
    racket;
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
