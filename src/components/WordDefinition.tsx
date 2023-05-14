"use client";

import { Root } from "@/models";
import PlayButton from "@/components/PlayButton";
import Image from "next/image";
import Link from "next/link";

type WordDefinitionProps = {
  root: Root;
};

export function WordDefinition(props: WordDefinitionProps) {
  const { root } = props;

  return (
    <div className="flex flex-col gap-8 dark:text-white">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="text-[#2D2D2D] font-bold text-4xl md:text-6xl dark:text-white">
            {root.word}
          </div>
          <div className="text-[#A445ED] text-lg md:text-2xl">
            {root.phonetic}
          </div>
        </div>
        <div>
          <PlayButton src={root.phonetics.find((p) => p.audio)?.audio} />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {root.meanings.map((meaning, index) => (
          <div key={index}>
            <div className="flex items-center gap-4">
              <div className="italic font-bold text-lg md:text-2xl md:not-italic md:font-normal">
                {meaning.partOfSpeech}
              </div>
              <hr className="flex-1" />
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <div className="text-[#757575] md:text-xl">Meaning</div>
              <ul className="flex flex-col gap-4">
                {meaning.definitions.map((definition, index) => (
                  <li
                    key={index}
                    className="flex gap-4 before:content-['\2022'] before:text-[#8F19E8]"
                  >
                    <div className="flex flex-col md:text-lg">
                      <div>{definition.definition}</div>
                      {definition.example && (
                        <div className="mt-3.5 text-[#757575]">{`"${definition.example}"`}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {meaning.synonyms.length > 0 && (
              <div className="mt-8 flex gap-6 md:text-xl">
                <div className="text-[#757575]">Synonyms</div>
                <div className="text-[#A445ED] flex flex-wrap gap-2 md:font-bold">
                  {meaning.synonyms.map((synonym, index) => (
                    <Link href={`/${synonym}`} key={index}>
                      {synonym}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {meaning.antonyms.length > 0 && (
              <div className="mt-8 flex gap-6 md:text-xl">
                <div className="text-[#757575]">Antonyms</div>
                <div className="text-[#A445ED] flex flex-wrap gap-2 md:font-bold">
                  {meaning.antonyms.map((antonym, index) => (
                    <Link href={`/${antonym}`} key={index}>
                      {antonym}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <hr />
      <div className="flex flex-col md:flex-row md:gap-5 md:flex-wrap">
        <div className="text-[#757575] underline text-sm">Source</div>
        {root.sourceUrls.map((sourceUrl, index) => (
          <Link
            key={sourceUrl}
            href={sourceUrl}
            target="_blank"
            className="text=[#2D2D2D] underline text-sm flex flex-wrap gap-2"
          >
            {sourceUrl}
            <Image
              src="./icon-new-window.svg"
              alt="new-window"
              width={12}
              height={12}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
