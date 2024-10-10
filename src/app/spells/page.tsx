"use client";

import { useEffect, useState } from "react";
import SpellsList from "../components/SpellsList";

export default function Spells() {
  const [spells, setSpells] = useState([]);
  useEffect(() => {
    fetch('https://api.open5e.com/v1/spells')
    .then((res) => res.json())
    .then((data) => setSpells(data.results));
  }, []);
  
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <SpellsList spells={spells} />
      </main>
    </div>
  );
}