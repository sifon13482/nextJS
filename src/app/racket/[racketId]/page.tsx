import { RacketContainer } from "@/components/racket/racketContainer";
import { getRacketById } from "@/services/getRacketById";

import { FC } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getMetaRacketById } from "@/services/getMetaRacketById";

type Props = {
  params: Promise<{ racketId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { racketId } = await params;

  const { data } = await getMetaRacketById({ racketId });
  if (!data) {
    return { title: "Racket Page" };
  }

  return {
    title: data.name,
    description: data.description,
  };
};

const RacketPage: FC<Props> = async ({ params }) => {
  const { racketId } = await params;
  if (typeof racketId !== "string") {
    return null;
  }
  const { isError, data } = await getRacketById({ racketId });

  if (isError) {
    return "isError";
  }
  if (!data) {
    return notFound();
  }

  return <RacketContainer racket={data} />;
};

export default RacketPage;
