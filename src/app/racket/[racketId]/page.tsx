import { RacketContainer } from "@/components/racket/racketContainer";
import { getRacketById } from "@/services/getRacketById";
import { FC } from "react";
import notFound from "./not-found";


type Props = {
  params: Promise<{ racketId: string }>;
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
