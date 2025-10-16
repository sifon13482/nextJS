"use client";

import { UserContext } from "@/context/userProvider/userProvider";
import { IRacket } from "@/types/racket";
import { FC, use, useCallback, useTransition } from "react";
import { ButtonDefault } from "../button/buttonDefault";
import styles from "./racketCard.module.css";
import {
  useHydrateFavorite,
  useIsFavoriteById,
  useSetIsFavorite,
} from "@/context/favoriteProvider/hooks";
// import { handleFavorite } from "./handleFavorite";

interface FavoriteProps {
  id: number;
  isFavoriteGlobal: boolean;
}

const handleFavorite = async ({ isFavoriteGlobal, id }: FavoriteProps) => {
  // const url = `http://localhost:4000/api/product/${id}/favorite`;
  const url = `http://localhost:4000/api/product/${id}/favorite`;
  // console.log(url);

  return isFavoriteGlobal
    ? fetch(url, { credentials: "include", method: "DELETE" })
    : fetch(url, { credentials: "include", method: "POST" });
};

export const RacketCard: FC<IRacket> = ({
  name,
  imageUrl,
  price,
  model,
  year,
  description,
  id,
  isFavorite,
}) => {
  const { user } = use(UserContext);
  
  // const [isPanding, startTransition] = useTransition();
  
  const isFavoriteGlobal = useIsFavoriteById({
    id,
    isFavoriteInitial: isFavorite,
  });
  
  // useHydrateFavorite({
  //   racketId: id,
  //   isFavorite: isFavoriteGlobal,
  // });

  const setFavorite = useSetIsFavorite();

  const handleClick = useCallback(
    async ({ isFavoriteGlobal, id }: FavoriteProps) => {
      setFavorite({ id, isFavorite: !isFavoriteGlobal });
      await handleFavorite({ isFavoriteGlobal, id });
      console.log(isFavoriteGlobal);
    },
    [setFavorite]
  );


  // const handeleClick = useCallback(({ id, isFavorite }: FavoriteProps) => {
  //   startTransition(async () => {
  //     await handleFavorite({ id, isFavorite });
  //   });
  // }, []);

  return (
    <div key={id} className={styles.container}>
      <div>{name}</div>
      {isFavoriteGlobal && (
        <img
          src="http://localhost:4000/bookmark.png"
          alt="bookmark"
          className={styles.favoriteIcon}
        />
      )}
      <img src={imageUrl} className={styles.img}></img>
      <div>{price}</div>
      <div>{model}</div>
      <div>{year}</div>
      <div>{description}</div>
      {user && (
        <ButtonDefault
          // disabled={isPanding}
          name={
            isFavoriteGlobal ? "Удалить из избранного" : "Добавить в избранное"
          }
          onClick={() => handleClick({ id, isFavoriteGlobal })}
        />
      )}
    </div>
  );
};
