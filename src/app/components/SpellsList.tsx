import React, { useEffect, useState } from 'react';
import { Filters } from './Filters';
import { Input } from '@/components/ui/input';
import { SpellsTable } from './SpellsTable';

export interface Spell {
  id: number;
  slug: string;
  name: string;
  spell_level: string;
  desc: string;
  school: string;
  higher_level: string,
  range: string,
  components: string,
  material: string,
  ritual: string,
  duration: string,
  concentration: string,
  casting_time: string,
  dnd_class: string,
  spell_lists: string[],
  archetype: string,
  circles: string,
  document__slug: string,
  document__title: string,
}

interface SpellsListProps {
  spells: Spell[];
}

export const SpellsList = ({ spells } : SpellsListProps) => {
  const [canCastSpells, setCanCastSpells] = useState<{ [key: string]: string }>({});
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filteredSpells, setFilteredSpells] = useState<Spell[]>(spells);

  useEffect(() => {
    const spellCastingInfo: { [key: string]: string } = {};
    spells.forEach(spell => {
      spellCastingInfo[spell.slug] = `${spell.dnd_class} ${spell.circles} ${spell.archetype}`;
    });
    setCanCastSpells(spellCastingInfo);
  }, [spells]);

  const breakenWord = (text: string) => text.split('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setFilteredSpells(spells.filter(spell => spell.name.toLowerCase().includes(searchValue.toLowerCase())));
  }

  return (
    <div>
      <div>
        <Filters
          setFiltersOpen={setFiltersOpen}
          className={`fixed left-0 bg-white p-4 z-20 transition-transform duration-300 ${filtersOpen ? 'translate-x-0' : '-translate-x-full'}`}
        />
      </div>
      {!filtersOpen && (
        <button
        type="button"
        className="z-10 fixed top-1/4 left-0 border border-black shadow-md p-4 font-semibold hover:bg-slate-300 transition-colors"
        onClick={() => setFiltersOpen(!filtersOpen)}
      >
        {breakenWord('Filters').map((letter, index) => (
          <span key={index} className="block">{letter}</span>
        ))}
      </button>
      )}
      <div>
        <Input type="text" placeholder="Search by spell name" className="w-full p-4 border border-black" onChange={handleSearch}/>
      </div>
      <SpellsTable spells={filteredSpells} canCastSpells={canCastSpells} />
    </div>
  );
};

export default SpellsList;