const FACT_URL: string = "https://catfact.ninja/fact";

interface factFetchingJsonResponse {
  fact: string;
  length: number;
}

export async function factFetching(factUrl: string): Promise<string> {
  const response: Response = await fetch(factUrl);
  const jsonResponse: factFetchingJsonResponse = await response.json();
  return jsonResponse.fact;
}
