import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-teal-600/20 bg-black py-8">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image src="/images/logo.webp" alt="motorGein Logo" width={150} height={50} className="h-12 w-auto" />
          </Link>
          <p className="text-sm text-gray-400">
            Jouw beste bron voor alles op autogebied - van onderhoudstips tot de nieuwste releases.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-teal-500">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-teal-500">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-teal-500">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-teal-500">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-500">Categorieën</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-teal-500">
                Onderhoud
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Reparaties
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Nieuwste Releases
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-500">Bronnen</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-teal-500">
                Doe-het-zelf Gidsen
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Gereedschap Reviews
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Auto Aankoop Tips
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Probleemoplossing
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-500">Abonneren</h4>
          <p className="text-sm text-gray-400">Ontvang het laatste autonieuws en tips direct in je inbox.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Je e-mail"
              className="w-full rounded-md border border-teal-600/20 bg-black px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-teal-600 px-3 py-2 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none"
            >
              Aanmelden
            </button>
          </form>
        </div>
      </div>
      <div className="container mt-8 border-t border-teal-600/20 pt-8">
        <p className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} motorGein.nl. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  )
}
