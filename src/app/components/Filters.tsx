import { Button } from "@/components/ui/button"
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Checkbox, cn } from "@nextui-org/react"
import { useCallback } from "react"
import { Cross2Icon } from "@radix-ui/react-icons"

interface FiltersProps {
  className: string;
  setFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Filters = (props: FiltersProps) => {
  const { className, setFiltersOpen } = props;
  
  const onApplyFilters = useCallback(() => {
    console.log('Filters applied');
  }, []);

  const onSubmit = useCallback(() => {
  }, []);

  return (
    <form className={cn("w-fit h-fit shadow-lg shadow-slate-800", className)} onSubmit={() => onSubmit()}>
      <div className="flex justify-between items-center">
        <h2 className='text-2xl font-semibold px-4'>Filters:</h2>
        <button type="button" className="hover:bg-slate-200 rounded size-7" onClick={(prev) => setFiltersOpen(!prev)}>
          <Cross2Icon className='w-6 h-6 m-auto' />
        </button>
      </div>
      <div className='flex flex-col gap-2 h-fit p-4'>
        <div className='flex gap-2 items-center justify-between'>
          <p>Level:</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Levels</SelectLabel>
                <SelectItem value={"0"}>All</SelectItem>
                <SelectItem value={"1"}>Cantrip</SelectItem>
                <SelectItem value={"2"}>1st Level</SelectItem>
                <SelectItem value={"3"}>2nd Level</SelectItem>
                <SelectItem value={"4"}>3rd Level</SelectItem>
                <SelectItem value={"5"}>4th Level</SelectItem>
                <SelectItem value={"6"}>5th Level</SelectItem>
                <SelectItem value={"7"}>6th Level</SelectItem>
                <SelectItem value={"8"}>7th Level</SelectItem>
                <SelectItem value={"9"}>8th Level</SelectItem>
                <SelectItem value={"10"}>9th Level</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='flex gap-2 items-center justify-between'>
          <p>School:</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a school" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Schools</SelectLabel>
                <SelectItem value={"abjuration"}>Abjuration</SelectItem>
                <SelectItem value={"conjuration"}>Conjuration</SelectItem>
                <SelectItem value={"divination"}>Divination</SelectItem>
                <SelectItem value={"enchantment"}>Enchantment</SelectItem>
                <SelectItem value={"evocation"}>Evocation</SelectItem>
                <SelectItem value={"illusion"}>Illusion</SelectItem>
                <SelectItem value={"necromancy"}>Necromancy</SelectItem>
                <SelectItem value={"transmutation"}>Transmutation</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='flex gap-2 items-center justify-between'>
          <p>Class:</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a class" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Classes</SelectLabel>
                <SelectItem value={"bard"}>Bard</SelectItem>
                <SelectItem value={"cleric"}>Cleric</SelectItem>
                <SelectItem value={"druid"}>Druid</SelectItem>
                <SelectItem value={"paladin"}>Paladin</SelectItem>
                <SelectItem value={"ranger"}>Ranger</SelectItem>
                <SelectItem value={"sorcerer"}>Sorcerer</SelectItem>
                <SelectItem value={"warlock"}>Warlock</SelectItem>
                <SelectItem value={"wizard"}>Wizard</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
          <div className='flex gap-3'>
            <p>Components:</p>
            <span className='flex gap-1 items-center'>
              <label htmlFor="v_component">V</label>
              <Checkbox value="v" id="v_component" />
            </span>
            <span className='flex gap-1 items-center'>
              <label htmlFor="s_component">S</label>
              <Checkbox value="s" id="s_component" />
            </span>
            <span className='flex gap-1 items-center'>
              <label htmlFor="m_component">M</label>
              <Checkbox value="m" id="m_component" />
            </span>
          </div>
        <div className='flex gap-2 items-center justify-between'>
          <p>Sort by:</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup defaultValue={"alphabetical"}>
                <SelectLabel>Sort by</SelectLabel>
                <SelectItem value={"alphabetical"}>Alphabetical</SelectItem>
                <SelectItem value={"level"}>Level</SelectItem>
                <SelectItem value={"school"}>School</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button variant="default" onClick={() => onApplyFilters()}>Apply filters</Button>
      </div>
    </form>
  )
}
