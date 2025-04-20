import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Car, Zap, Gauge, Fuel } from "lucide-react"

export const metadata = {
  title: "Nieuwste Releases - motorGein",
  description: "Ontdek de nieuwste automodellen, conceptauto's en innovaties in de auto-industrie.",
}

export default function NewReleasesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
          <Image src="/futuristic-bmw-ev.png" alt="Nieuwe Auto Release" fill className="object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              <span className="text-teal-500">Nieuwste</span> Releases
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Blijf op de hoogte van de nieuwste automodellen, conceptauto's en baanbrekende innovaties in de
              auto-industrie.
            </p>
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="#latest-models">Nieuwste Modellen Bekijken</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Models Section */}
      <section className="py-16 bg-black" id="latest-models">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Nieuwste</span> Modellen
          </h2>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-black/50 border border-teal-600/20">
                <TabsTrigger value="all" className="data-[state=active]:bg-teal-600">
                  Alle
                </TabsTrigger>
                <TabsTrigger value="electric" className="data-[state=active]:bg-teal-600">
                  Elektrisch
                </TabsTrigger>
                <TabsTrigger value="luxury" className="data-[state=active]:bg-teal-600">
                  Luxe
                </TabsTrigger>
                <TabsTrigger value="performance" className="data-[state=active]:bg-teal-600">
                  Prestatie
                </TabsTrigger>
                <TabsTrigger value="suv" className="data-[state=active]:bg-teal-600">
                  SUV
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CarModelCard
                  title="BMW i7 M70 xDrive"
                  description="BMW's krachtigste elektrische sedan combineert luxe met adembenemende prestaties."
                  image="/sleek-electric-luxury.png"
                  specs={{
                    power: "660 pk",
                    acceleration: "3.7s (0-100 km/u)",
                    range: "510 km",
                    price: "€177.500",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Elektrisch", "Luxe", "Sedan"]}
                  releaseDate="April 2025"
                />
                <CarModelCard
                  title="BMW XM Label Red"
                  description="De krachtigste BMW M-auto ooit, met een hybride aandrijflijn en opvallend design."
                  image="/powerful-sloped-coupe-suv.png"
                  specs={{
                    power: "748 pk",
                    acceleration: "3.8s (0-100 km/u)",
                    range: "Hybride",
                    price: "€198.000",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Hybride", "SUV", "Prestatie"]}
                  releaseDate="Mei 2025"
                />
                <CarModelCard
                  title="BMW iX2 M50"
                  description="Sportieve elektrische crossover met indrukwekkende prestaties en bereik."
                  image="/sleek-electric-drive.png"
                  specs={{
                    power: "455 pk",
                    acceleration: "5.6s (0-100 km/u)",
                    range: "450 km",
                    price: "€72.900",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Elektrisch", "Crossover", "Prestatie"]}
                  releaseDate="Juni 2025"
                />
              </div>
            </TabsContent>

            <TabsContent value="electric" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CarModelCard
                  title="BMW i7 M70 xDrive"
                  description="BMW's krachtigste elektrische sedan combineert luxe met adembenemende prestaties."
                  image="/sleek-electric-luxury.png"
                  specs={{
                    power: "660 pk",
                    acceleration: "3.7s (0-100 km/u)",
                    range: "510 km",
                    price: "€177.500",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Elektrisch", "Luxe", "Sedan"]}
                  releaseDate="April 2025"
                />
                <CarModelCard
                  title="BMW iX2 M50"
                  description="Sportieve elektrische crossover met indrukwekkende prestaties en bereik."
                  image="/sleek-electric-drive.png"
                  specs={{
                    power: "455 pk",
                    acceleration: "5.6s (0-100 km/u)",
                    range: "450 km",
                    price: "€72.900",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Elektrisch", "Crossover", "Prestatie"]}
                  releaseDate="Juni 2025"
                />
                <CarModelCard
                  title="BMW i5 Touring"
                  description="Elektrische stationwagon die ruimte en functionaliteit combineert met emissievrij rijden."
                  image="/sleek-electric-bmw.png"
                  specs={{
                    power: "340 pk",
                    acceleration: "6.1s (0-100 km/u)",
                    range: "560 km",
                    price: "€68.500",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Elektrisch", "Stationwagon", "Gezin"]}
                  releaseDate="Juli 2025"
                />
              </div>
            </TabsContent>

            <TabsContent value="luxury" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CarModelCard
                  title="BMW i7 M70 xDrive"
                  description="BMW's krachtigste elektrische sedan combineert luxe met adembenemende prestaties."
                  image="/sleek-electric-luxury.png"
                  specs={{
                    power: "660 pk",
                    acceleration: "3.7s (0-100 km/u)",
                    range: "510 km",
                    price: "€177.500",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Elektrisch", "Luxe", "Sedan"]}
                  releaseDate="April 2025"
                />
                <CarModelCard
                  title="BMW 7 Serie 760i xDrive"
                  description="Vlaggenschip luxe sedan met V8 motor en de nieuwste technologie."
                  image="/images/black-bmw.webp"
                  specs={{
                    power: "544 pk",
                    acceleration: "4.2s (0-100 km/u)",
                    range: "Benzine",
                    price: "€165.000",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Luxe", "Sedan", "V8"]}
                  releaseDate="Mei 2025"
                />
                <CarModelCard
                  title="BMW X7 LCI"
                  description="Vernieuwde luxe SUV met drie zitrijen en verbeterde technologie."
                  image="/opulent-x7-drive.png"
                  specs={{
                    power: "530 pk",
                    acceleration: "4.7s (0-100 km/u)",
                    range: "Benzine",
                    price: "€138.000",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Luxe", "SUV", "Gezin"]}
                  releaseDate="Juni 2025"
                />
              </div>
            </TabsContent>

            <TabsContent value="performance" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CarModelCard
                  title="BMW M4 CS"
                  description="Gelimiteerde editie van de M4 met meer vermogen en minder gewicht."
                  image="/images/red-bmw.webp"
                  specs={{
                    power: "550 pk",
                    acceleration: "3.4s (0-100 km/u)",
                    range: "Benzine",
                    price: "€145.000",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Prestatie", "Coupé", "Gelimiteerd"]}
                  releaseDate="April 2025"
                />
                <CarModelCard
                  title="BMW XM Label Red"
                  description="De krachtigste BMW M-auto ooit, met een hybride aandrijflijn en opvallend design."
                  image="/powerful-sloped-coupe-suv.png"
                  specs={{
                    power: "748 pk",
                    acceleration: "3.8s (0-100 km/u)",
                    range: "Hybride",
                    price: "€198.000",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Hybride", "SUV", "Prestatie"]}
                  releaseDate="Mei 2025"
                />
                <CarModelCard
                  title="BMW M5"
                  description="Nieuwe generatie M5 met hybride aandrijflijn voor ongekende prestaties."
                  image="/images/blue-bmw-m8.webp"
                  specs={{
                    power: "700+ pk",
                    acceleration: "3.0s (0-100 km/u)",
                    range: "Hybride",
                    price: "€160.000",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Hybride", "Sedan", "Prestatie"]}
                  releaseDate="Juli 2025"
                />
              </div>
            </TabsContent>

            <TabsContent value="suv" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CarModelCard
                  title="BMW XM Label Red"
                  description="De krachtigste BMW M-auto ooit, met een hybride aandrijflijn en opvallend design."
                  image="/powerful-sloped-coupe-suv.png"
                  specs={{
                    power: "748 pk",
                    acceleration: "3.8s (0-100 km/u)",
                    range: "Hybride",
                    price: "€198.000",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Hybride", "SUV", "Prestatie"]}
                  releaseDate="Mei 2025"
                />
                <CarModelCard
                  title="BMW X7 LCI"
                  description="Vernieuwde luxe SUV met drie zitrijen en verbeterde technologie."
                  image="/opulent-x7-drive.png"
                  specs={{
                    power: "530 pk",
                    acceleration: "4.7s (0-100 km/u)",
                    range: "Benzine",
                    price: "€138.000",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Luxe", "SUV", "Gezin"]}
                  releaseDate="Juni 2025"
                />
                <CarModelCard
                  title="BMW X5 M Competition"
                  description="Vernieuwde high-performance middelgrote SUV met verbeterde aerodynamica."
                  image="/powerful-bmw-x5m.png"
                  specs={{
                    power: "625 pk",
                    acceleration: "3.9s (0-100 km/u)",
                    range: "Benzine",
                    price: "€155.000",
                  }}
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Prestatie", "SUV", "M-model"]}
                  releaseDate="Augustus 2025"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Future Concepts Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Toekomstige</span> Concepten
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-black border border-teal-600/20 overflow-hidden">
              <div className="relative h-64">
                <Image src="/futuristic-bmw-ev.png" alt="BMW Vision Concept" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-teal-600/20 text-teal-500">Concept</Badge>
                  <Badge className="bg-teal-600/20 text-teal-500">Elektrisch</Badge>
                  <Badge className="bg-teal-600/20 text-teal-500">Autonoom</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">BMW Vision Neue Klasse</h3>
                <p className="text-gray-400 mb-4">
                  Een blik op de toekomst van BMW met een revolutionair nieuw platform voor elektrische voertuigen,
                  geavanceerde autonome rijfuncties en duurzame materialen.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  Verwacht in 2026
                </div>
                <Link
                  href="/blogs/bmw-m3-g80-review"
                  className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                >
                  Meer Informatie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-black border border-teal-600/20 overflow-hidden">
              <div className="relative h-64">
                <Image src="/sleek-electric-bmw.png" alt="BMW i Vision Circular" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-teal-600/20 text-teal-500">Concept</Badge>
                  <Badge className="bg-teal-600/20 text-teal-500">Duurzaam</Badge>
                  <Badge className="bg-teal-600/20 text-teal-500">Circulair</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">BMW i Vision Circular</h3>
                <p className="text-gray-400 mb-4">
                  Een visie op duurzame mobiliteit met een auto gemaakt van 100% gerecyclede en recyclebare materialen,
                  ontworpen volgens circulaire economie principes.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  Verwacht in 2027
                </div>
                <Link
                  href="/blogs/bmw-m3-g80-review"
                  className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                >
                  Meer Informatie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Innovations */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Technologische</span> Innovaties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TechCard
              title="Solid-State Batterijen"
              description="De volgende generatie batterijen met hogere energiedichtheid, sneller laden en verbeterde veiligheid."
              icon={<Zap className="h-10 w-10 text-teal-500" />}
              link="/blogs/bmw-m3-g80-review"
            />
            <TechCard
              title="Level 3 Autonoom Rijden"
              description="Geavanceerde rijhulpsystemen die onder bepaalde omstandigheden volledig autonoom kunnen rijden."
              icon={<Car className="h-10 w-10 text-teal-500" />}
              link="/blogs/bmw-m3-g80-review"
            />
            <TechCard
              title="Waterstof Brandstofcellen"
              description="Alternatieve aandrijflijn die waterstof omzet in elektriciteit met alleen water als uitstoot."
              icon={<Fuel className="h-10 w-10 text-teal-500" />}
              link="/blogs/bmw-m3-g80-review"
            />
            <TechCard
              title="Augmented Reality HUD"
              description="Head-up displays die navigatie en rijhulpinformatie direct op de weg projecteren."
              icon={<Gauge className="h-10 w-10 text-teal-500" />}
              link="/blogs/bmw-m3-g80-review"
            />
            <TechCard
              title="Bidirectioneel Laden"
              description="Technologie die elektrische voertuigen in staat stelt energie terug te leveren aan het net of andere apparaten."
              icon={<Zap className="h-10 w-10 text-teal-500" />}
              link="/blogs/bmw-m3-g80-review"
            />
            <TechCard
              title="Duurzame Materialen"
              description="Innovatieve eco-vriendelijke materialen gemaakt van gerecyclede of hernieuwbare bronnen."
              icon={<Car className="h-10 w-10 text-teal-500" />}
              link="/blogs/bmw-m3-g80-review"
            />
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
                  <span className="text-teal-500">Blijf op de Hoogte</span> van Nieuwe Releases
                </h2>
                <p className="text-gray-400">
                  Abonneer je op onze nieuwsbrief om als eerste te horen over nieuwe modellen, conceptauto's en
                  technologische innovaties.
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

function CarModelCard({
  title,
  description,
  image,
  specs,
  link,
  tags,
  releaseDate,
}: {
  title: string
  description: string
  image: string
  specs: {
    power: string
    acceleration: string
    range: string
    price: string
  }
  link: string
  tags: string[]
  releaseDate: string
}) {
  return (
    <Card className="bg-black border border-teal-600/20 overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Badge key={tag} className="bg-teal-600/20 text-teal-500">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-1 text-teal-500" />
            <span>{specs.power}</span>
          </div>
          <div className="flex items-center">
            <Gauge className="h-4 w-4 mr-1 text-teal-500" />
            <span>{specs.acceleration}</span>
          </div>
          <div className="flex items-center">
            <Fuel className="h-4 w-4 mr-1 text-teal-500" />
            <span>{specs.range}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-teal-500" />
            <span>{releaseDate}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-teal-500">{specs.price}</span>
          <Link href={link} className="text-teal-500 hover:text-teal-400 inline-flex items-center">
            Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

function TechCard({
  title,
  description,
  icon,
  link,
}: {
  title: string
  description: string
  icon: React.ReactNode
  link: string
}) {
  return (
    <Card className="bg-black border border-teal-600/20">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link href={link} className="text-teal-500 hover:text-teal-400 inline-flex items-center">
          Meer Informatie <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
