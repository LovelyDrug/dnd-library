import React from 'react';
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
  //const [selectedComponents, setSelectedComponents] = React.useState<string[]>(["v", "s", "m"]);
  const canCastSpell = (classes: string, circles: string, archetype: string) => {
    return `${classes} ${circles} ${archetype}`;
  }

  return (
    <div className='flex gap-8 justify-between'>
      <Filters />
      <Table className='ml-80 w-fit'>
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
              <TableCell>{canCastSpell(spell.dnd_class, spell.circles, spell.archetype)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SpellsList;