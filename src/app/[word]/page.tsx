import { Root } from "@/models";
import { WordDefinition } from "@/components/WordDefinition";

async function getWordDefinition(word: string): Promise<Root[]> {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

export default async function Word({ params }: { params: { word: string } }) {
  const result = await getWordDefinition(params.word);
  const firstRoot = result[0]; // by default always take the first root

  return <WordDefinition root={firstRoot} />;
}
