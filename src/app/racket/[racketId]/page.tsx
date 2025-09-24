"use client";

import { Racket } from "@/components/racket/racket";
import { useParams } from "next/navigation";
import { FC } from "react";

export const generateStaticParams = () => {
  return [{ racketId: "1" }, { racketId: "2" }, { racketId: "3" }];
};

type Props = {
  params: Promise<{ racketId: string }>;
};

const RacketPage: FC<Props> = () => {
  const { racketId } = useParams();

  if (typeof racketId !== "string") {
    return null
  }

  return <Racket racketId={racketId} />;
};

export default RacketPage;
