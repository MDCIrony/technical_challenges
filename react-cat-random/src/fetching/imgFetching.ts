export default async function imgFetching(
  imgUrl: string,
  fact: string
): Promise<string> {
  const response: Response = await fetch(`${imgUrl}${fact}`);
}
