import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User, Star, Filter } from "lucide-react"

export const metadata = {
  title: "Reviews - motorGein",
  description: "Uitgebreide en eerlijke reviews van de nieuwste auto's, onderdelen en accessoires.",
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
          <Image src="/images/bmw-green.jpeg" alt="Auto Reviews" fill className="object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              <span className="text-teal-500">Eerlijke</span> Reviews
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Onafhankelijke en diepgaande reviews van de nieuwste auto's, onderdelen en accessoires om je te helpen de
              beste keuzes te maken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="#car-reviews">Auto Reviews</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-teal-500 text-teal-500 hover:bg-teal-500/10"
              >
                <Link href="#parts-reviews">Onderdelen Reviews</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Car Reviews Section */}
      <section className="py-16 bg-black" id="car-reviews">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 md:mb-0">
              <span className="text-teal-500">Auto</span> Reviews
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <select className="appearance-none bg-black border border-teal-600/20 rounded-md px-4 py-2 pr-8 text-white focus:border-teal-500 focus:outline-none">
                  <option>Alle Merken</option>
                  <option>BMW</option>
                  <option>Mercedes</option>
                  <option>Audi</option>
                  <option>Porsche</option>
                </select>
                <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="appearance-none bg-black border border-teal-600/20 rounded-md px-4 py-2 pr-8 text-white focus:border-teal-500 focus:outline-none">
                  <option>Nieuwste Eerst</option>
                  <option>Oudste Eerst</option>
                  <option>Hoogste Rating</option>
                  <option>Laagste Rating</option>
                </select>
                <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReviewCard
              title="BMW M3 G80 Competition"
              description="Een diepgaande review van de nieuwste BMW M3 G80 in zijn opvallende groene kleur, met een verkenning van zijn prestaties, technologie en rijdynamiek."
              image="/images/bmw-green.jpeg"
              rating={4.8}
              author="Michael Turner"
              date="19 april 2025"
              tags={["BMW", "Sportsedan", "M-model"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <ReviewCard
              title="BMW M4 Competition"
              description="Onze uitgebreide review van de BMW M4 Competition - van zijn controversiële design tot zijn adembenemende prestaties."
              image="/images/bmw-red.jpeg"
              rating={4.7}
              author="James Wilson"
              date="17 april 2025"
              tags={["BMW", "Sportcoupé", "M-model"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <ReviewCard
              title="BMW M8 Competition"
              description="Hoe verhoudt de BMW M8 Competition zich tot zijn rivalen? We testen hem tegen het beste van Mercedes-AMG en Audi RS."
              image="/images/bmw-blue.jpeg"
              rating={4.9}
              author="James Wilson"
              date="10 april 2025"
              tags={["BMW", "Grand Tourer", "Vergelijking"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <ReviewCard
              title="BMW i7 M70 xDrive"
              description="BMW's krachtigste elektrische sedan combineert luxe met adembenemende prestaties. Is dit de toekomst van luxe mobiliteit?"
              image="/sleek-electric-luxury.png"
              rating={4.6}
              author="Elizabeth Chen"
              date="5 april 2025"
              tags={["BMW", "Elektrisch", "Luxe"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <ReviewCard
              title="BMW XM Label Red"
              description="De krachtigste BMW M-auto ooit, met een hybride aandrijflijn en opvallend design. Maar is het een echte M?"
              image="/powerful-sloped-coupe-suv.png"
              rating={4.2}
              author="Robert Taylor"
              date="28 maart 2025"
              tags={["BMW", "SUV", "Hybride"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <ReviewCard
              title="BMW X5 M Competition"
              description="Vernieuwde high-performance middelgrote SUV met verbeterde aerodynamica en technologie. De perfecte gezins-sportauto?"
              image="/powerful-bmw-x5m.png"
              rating={4.5}
              author="Thomas Wright"
              date="20 maart 2025"
              tags={["BMW", "SUV", "M-model"]}
              link="/blogs/bmw-m3-g80-review"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/blogs">Meer Auto Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Parts Reviews Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900" id="parts-reviews">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 md:mb-0">
              <span className="text-teal-500">Onderdelen</span> Reviews
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <select className="appearance-none bg-black border border-teal-600/20 rounded-md px-4 py-2 pr-8 text-white focus:border-teal-500 focus:outline-none">
                  <option>Alle Categorieën</option>
                  <option>Prestatie</option>
                  <option>Onderhoud</option>
                  <option>Accessoires</option>
                  <option>Elektronica</option>
                </select>
                <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="appearance-none bg-black border border-teal-600/20 rounded-md px-4 py-2 pr-8 text-white focus:border-teal-500 focus:outline-none">
                  <option>Nieuwste Eerst</option>
                  <option>Oudste Eerst</option>
                  <option>Hoogste Rating</option>
                  <option>Laagste Rating</option>
                </select>
                <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReviewCard
              title="BMW M Performance Uitlaatsysteem"
              description="Is het officiële M Performance uitlaatsysteem de meerprijs waard ten opzichte van aftermarket alternatieven?"
              image="/bmw-m-performance-carbon.png"
              rating={4.6}
              author="Robert Taylor"
              date="15 april 2025"
              tags={["Uitlaat", "M Performance", "Geluid"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <ReviewCard
              title="KW Variant 3 Coilovers"
              description="Uitgebreide review van KW's premium verstelbare coilover systeem voor BMW M-modellen."
              image="/high-performance-brake-system.png"
              rating={4.8}
              author="Sarah Johnson"
              date="10 april 2025"
              tags={["Ophanging", "Handling", "Aanpasbaar"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <ReviewCard
              title="Michelin Pilot Sport 4S Banden"
              description="De ultieme high-performance straatband? We testen de Michelin Pilot Sport 4S op straat en circuit."
              image="/high-performance-brake-system.png"
              rating={4.9}
              author="David Miller"
              date="5 april 2025"
              tags={["Banden", "Grip", "Duurzaamheid"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <ReviewCard
              title="Brembo GT Big Brake Kit"
              description="Verbeter je remkracht en uithoudingsvermogen met deze premium big brake kit van Brembo."
              image="/high-performance-brake-system.png"
              rating={4.7}
              author="Mark Johnson"
              date="1 april 2025"
              tags={["Remmen", "Prestatie", "Circuitgebruik"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <ReviewCard
              title="COBB Accessport V3"
              description="De populaire ECU tuning tool getest op verschillende BMW modellen. Is het de investering waard?"
              image="/high-performance-brake-system.png"
              rating={4.5}
              author="Jessica Adams"
              date="25 maart 2025"
              tags={["Tuning", "ECU", "Prestatie"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <ReviewCard
              title="Recaro Sportster CS Stoelen"
              description="Verbeter je rijervaring met deze premium sportieve stoelen. Comfort en ondersteuning in één pakket."
              image="/high-performance-brake-system.png"
              rating={4.4}
              author="Thomas Wright"
              date="20 maart 2025"
              tags={["Interieur", "Comfort", "Sportief"]}
              link="/blogs/bmw-m3-g80-review"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/blogs">Meer Onderdelen Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Review Methodology */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Onze Review</span> Methodologie
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-black border border-teal-600/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Onafhankelijkheid</h3>
                <p className="text-gray-400">
                  Alle reviews worden onafhankelijk uitgevoerd zonder invloed van fabrikanten of adverteerders. We kopen
                  de meeste producten zelf of lenen ze voor langere periodes om een eerlijke beoordeling te kunnen
                  geven.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black border border-teal-600/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Uitgebreid Testen</h3>
                <p className="text-gray-400">
                  We testen auto's en onderdelen in verschillende omstandigheden, van dagelijks gebruik tot extreme
                  situaties. Auto's worden minimaal 1000 km gereden voordat we een review schrijven, en onderdelen
                  worden minstens 3 maanden gebruikt.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black border border-teal-600/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Beoordelingscriteria</h3>
                <p className="text-gray-400">
                  Onze beoordelingen zijn gebaseerd op objectieve criteria zoals prestaties, bouwkwaliteit,
                  functionaliteit, prijs-kwaliteitverhouding en duurzaamheid. We gebruiken gestandaardiseerde tests waar
                  mogelijk voor consistente vergelijkingen.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 p-6 border border-teal-600/20 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Ons Beoordelingssysteem</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-teal-500 mb-2">5 Sterren (4.8-5.0)</h4>
                <p className="text-gray-400 mb-4">
                  Uitzonderlijk in alle opzichten. Zet nieuwe standaarden in zijn categorie en overtreft alle
                  verwachtingen.
                </p>
                <h4 className="font-bold text-teal-500 mb-2">4 Sterren (4.0-4.7)</h4>
                <p className="text-gray-400 mb-4">
                  Uitstekend product met minimale nadelen. Sterk aanbevolen voor de meeste gebruikers.
                </p>
                <h4 className="font-bold text-teal-500 mb-2">3 Sterren (3.0-3.9)</h4>
                <p className="text-gray-400">
                  Goed product met enkele tekortkomingen. Kan nog steeds een goede keuze zijn afhankelijk van je
                  behoeften.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-teal-500 mb-2">2 Sterren (2.0-2.9)</h4>
                <p className="text-gray-400 mb-4">
                  Onder gemiddeld met significante problemen. Alleen aanbevolen in specifieke situaties.
                </p>
                <h4 className="font-bold text-teal-500 mb-2">1 Ster (1.0-1.9)</h4>
                <p className="text-gray-400 mb-4">
                  Slecht product met ernstige tekortkomingen. Niet aanbevolen voor de meeste gebruikers.
                </p>
                <h4 className="font-bold text-teal-500 mb-2">Geen Beoordeling</h4>
                <p className="text-gray-400">
                  Producten die we niet volledig hebben kunnen testen of die niet voldoen aan onze minimale
                  testcriteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <div className="rounded-lg border border-teal-600/20 bg-black/50 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="text-teal-500">Abonneer</span> op Onze Nieuwsbrief
                </h2>
                <p className="text-gray-400">
                  Ontvang de nieuwste reviews, vergelijkingstests en exclusieve content direct in je inbox.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Je e-mailadres"
                    className="w-full sm:w-64 rounded-md border border-teal-600/20 bg-black px-4 py-2 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none"
                  />
                  <Button className="bg-teal-600 hover:bg-teal-700">Abonneren</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ReviewCard({
  title,
  description,
  image,
  rating,
  author,
  date,
  tags,
  link,
}: {
  title: string
  description: string
  image: string
  rating: number
  author: string
  date: string
  tags: string[]
  link: string
}) {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-teal-500 text-teal-500" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-teal-500" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 fill-teal-500 text-teal-500" />
          </div>
        </div>,
      )
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-teal-500" />)
    }

    return stars
  }

  return (
    <Card className="bg-black border border-teal-600/20 overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} className="bg-teal-600/20 text-teal-500">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center">
            <div className="flex mr-1">{renderStars()}</div>
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">
          <Link href={link} className="hover:text-teal-500 transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <User className="h-4 w-4 mr-1" />
            {author} • <Calendar className="h-4 w-4 mx-1" />
            {date}
          </div>
          <Link href={link} className="text-teal-500 hover:text-teal-400 inline-flex items-center">
            Lezen <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
