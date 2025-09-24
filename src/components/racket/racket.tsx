import { FC } from "react";
import { rackets } from "@/constants/mock";

interface ComponentProps {
  racketId: string;
}

export const Racket: FC<ComponentProps> = ({ racketId }) => {

  const racket = rackets.find(({ id }) => id == +racketId);

  return (
    <div>
      <div>{racket.name}</div>
      <img src={racket.imageUrl}></img>
      <div>{racket.price}</div>
      <div>{racket.model}</div>
      <div>{racket.year}</div>
      <div>{racket.description}</div>
    </div>
  );
};
