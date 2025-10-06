import { TQueryResponse } from "@/types/quryRespons";
import { IRacket } from "@/types/racket";

interface RacketIdProps {
  racketId: string;
}

export const getMetaRacketById = async ({
  racketId,
}: RacketIdProps): Promise<TQueryResponse<IRacket>> => {
  const result = await fetch(`http://localhost:4000/api/product/${racketId}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: IRacket } = await result.json();

  return { isError: false, data: data.product };
};
