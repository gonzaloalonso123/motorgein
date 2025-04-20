import Link from "next/link"
import Image from "next/image"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-teal-600/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu wisselen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black text-white">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="hover:text-teal-500 transition-colors">
                  Home
                </Link>
                <Link href="/blogs" className="hover:text-teal-500 transition-colors">
                  Blogs
                </Link>
                <Link href="/maintenance" className="hover:text-teal-500 transition-colors">
                  Onderhoud
                </Link>
                <Link href="/repairs" className="hover:text-teal-500 transition-colors">
                  Reparaties
                </Link>
                <Link href="/new-releases" className="hover:text-teal-500 transition-colors">
                  Nieuwste Releases
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.webp" alt="motorGein Logo" width={120} height={40} className="h-10 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-teal-500 transition-colors">
            Home
          </Link>
          <Link href="/blogs" className="hover:text-teal-500 transition-colors">
            Blogs
          </Link>
          <Link href="/maintenance" className="hover:text-teal-500 transition-colors">
            Onderhoud
          </Link>
          <Link href="/repairs" className="hover:text-teal-500 transition-colors">
            Reparaties
          </Link>
          <Link href="/new-releases" className="hover:text-teal-500 transition-colors">
            Nieuwste Releases
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:text-teal-500">
            <Search className="h-5 w-5" />
            <span className="sr-only">Zoeken</span>
          </Button>
          <Button className="hidden md:flex bg-teal-600 hover:bg-teal-700">Abonneren</Button>
        </div>
      </div>
    </header>
  )
}
