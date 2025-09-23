import { FC, useState } from "react";
import { rackets } from "@/constants/mock";

interface ComponentProps {
  id: string;
}

export const Racket: FC<ComponentProps> = ({ id }) => {
  const [rosketId, setRosketId] = useState(id);
  const racket = rackets.find(({ id }) => id == rosketId);
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
