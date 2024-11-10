import { TableHead } from "@/components/ui/table";
import { Table, TableHeader, TableRow, TableBody, TableCell } from "@nextui-org/react";
import { Spell } from "./SpellsList";

interface SpellsTableProps {
  spells: Spell[];
  canCastSpells: { [key: string]: string };
}

enum SpellHeaders {
  Name = 'Name',
  Level = 'Level',
  School = 'School',
  Range = 'Range',
  Components = 'Components',
  Duration = 'Duration',
  CastingTime = 'Casting Time',
  WhoCanCast = 'Who can cast'
}

export const SpellsTable = ({ spells, canCastSpells }: SpellsTableProps) => {
  return (
    <Table className='ml-8 w-full'>
      <TableHeader className='bg-muted/80'>
        <TableRow>
          {Object.values(SpellHeaders).map(header => (
            <TableHead key={header}>{header}</TableHead>
          ))}
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
  )
}