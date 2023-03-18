import { useState, useEffect } from "react";
import { factFetching } from "./fetching/factFetching";
import Counter from "./Counter";
const IMG_URL: string = "https://cataas.com/cat/says/";
const FACT_URL: string = "https://catfact.ninja/fact";

export default function App() {
  const [fact, setFact] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    factFetching(FACT_URL).then((fact) => setFact(fact));
  }, [count]);

  useEffect(() => {
    setImg(`${IMG_URL}${fact.split(" ", 3).join(" ")}`);
  }, [fact]);

  const handleClickCount = () => setCount(count + 1);

  return (
    <main>
      <h1>Hola mundo</h1>
      <h3>The fact is: {fact}</h3>
      <img src={img} alt={`An image with the first word from fact: ${fact}`} />
      <Counter count={count} handleFunction={handleClickCount} />
    </main>
  );
}
