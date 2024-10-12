import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export const Header = () => {
  return (
    <NavigationMenu className="text-primary-foreground uppercase font-bold">
      <nav>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/races">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Races
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/spells">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Spells
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </nav>
    </NavigationMenu>
  )
}