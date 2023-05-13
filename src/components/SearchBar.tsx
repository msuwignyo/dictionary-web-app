"use client";

import Image from "next/image";
import { FormEventHandler, useEffect, useState } from "react";
import { useDebounce } from "@/utils";
import { useParams, useRouter } from "next/navigation";

export function SearchBar() {
  const params = useParams();
  const [searchTerm, setSearchTerm] = useState(params.word);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const router = useRouter();

  useEffect(() => {
    if (debouncedSearchTerm) {
      router.push(`/${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    setSearchTerm(params.word);
  }, [params.word]);

  const handleChangeSearch: FormEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  return (
    <div className="flex bg-[#F4F4F4] rounded-2xl py-4 px-6">
      <input
        className="flex-1 bg-transparent font-bold outline-0"
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        placeholder="Search for a word..."
        onChange={handleChangeSearch}
      />
      <Image src="./icon-search.svg" alt="search-icon" width={16} height={16} />
    </div>
  );
}
