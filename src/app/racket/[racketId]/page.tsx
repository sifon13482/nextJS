"use client";

import { Racket } from "@/components/racket/racket";
import { useParams } from "next/navigation";
import { FC } from "react";

type Props = {
  params: Promise<{ racketId: string }>;
};

const RacketPage: FC<Props> = () => {
  const { racketId } = useParams();

  return <Racket id={racketId} />;
};

export default RacketPage;
