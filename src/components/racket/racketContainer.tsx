import { FC } from "react";
import { IRacket } from "@/types/racket";
import { RacketCard } from "../racketCard/racketCard";

type RacketProps = {
  racket: IRacket;
};

export const RacketContainer: FC<RacketProps> = ({ racket }) => {
  if (!racket) {
    return null;
  }

  const { name, imageUrl, price, model, year, description } = racket;

  return (
    <RacketCard
      name={name}
      imageUrl={imageUrl}
      price={price}
      model={model}
      year={year}
      description={description}
    />
  );
};
