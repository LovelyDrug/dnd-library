import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Filters } from './Filters';

interface Spell {
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

  useEffect(() => {
    const spellCastingInfo: { [key: string]: string } = {};
    spells.forEach(spell => {
      spellCastingInfo[spell.slug] = `${spell.dnd_class} ${spell.circles} ${spell.archetype}`;
    });
    setCanCastSpells(spellCastingInfo);
  }, [spells]);


  return (
    <div>
      <Filters />
      <Table className='ml-8 w-fit'>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>School</TableHead>
            <TableHead>Range</TableHead>
            <TableHead>Components</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Casting Time</TableHead>
            <TableHead>Who can cast</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spells.map(spell => (
            <TableRow key={spell.slug}>
              <TableCell>{spell.name}</TableCell>
              <TableCell>{spell.spell_level}</TableCell>
              <TableCell>{spell.school}</TableCell>
              <TableCell>{spell.range}</TableCell>
              <TableCell>{spell.components}</TableCell>
              <TableCell>{spell.duration}</TableCell>
              <TableCell>{spell.casting_time}</TableCell>
              <TableCell>{canCastSpells[spell.slug]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SpellsList;