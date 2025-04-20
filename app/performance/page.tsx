import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Gauge, Zap, Settings, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Prestaties - motorGein",
  description: "Ontdek hoe je de prestaties van je auto kunt verbeteren met upgrades, tuning en modificaties.",
}

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
          <Image src="/bmw-m-performance-carbon.png" alt="Auto Prestaties" fill className="object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              Auto <span className="text-teal-500">Prestaties</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ontgrendel het volledige potentieel van je auto met onze expert gidsen voor prestatie-upgrades, tuning en
              modificaties.
            </p>
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="#performance-upgrades">Prestatie-upgrades Bekijken</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Performance Categories */}
      <section className="py-16 bg-black" id="performance-upgrades">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Prestatie</span> Categorieën
          </h2>
          <Tabs defaultValue="engine" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-black/50 border border-teal-600/20">
                <TabsTrigger value="engine" className="data-[state=active]:bg-teal-600">
                  Motor
                </TabsTrigger>
                <TabsTrigger value="suspension" className="data-[state=active]:bg-teal-600">
                  Ophanging
                </TabsTrigger>
                <TabsTrigger value="brakes" className="data-[state=active]:bg-teal-600">
                  Remmen
                </TabsTrigger>
                <TabsTrigger value="exhaust" className="data-[state=active]:bg-teal-600">
                  Uitlaat
                </TabsTrigger>
                <TabsTrigger value="software" className="data-[state=active]:bg-teal-600">
                  Software
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="engine" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PerformanceCard
                  title="Luchtinlaatsystemen"
                  description="Verbeter de luchtstroom naar je motor voor meer vermogen en betere respons."
                  difficulty="Gemakkelijk"
                  price="€€"
                  gain="5-15 pk"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Motor", "Luchtinlaat", "DIY-vriendelijk"]}
                />
                <PerformanceCard
                  title="Intercooler Upgrades"
                  description="Houd inlaatlucht koeler voor meer vermogen en consistente prestaties."
                  difficulty="Gemiddeld"
                  price="€€"
                  gain="10-20 pk"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Motor", "Koeling", "Turbo"]}
                />
                <PerformanceCard
                  title="Turbo Upgrades"
                  description="Grotere of verbeterde turbo's voor aanzienlijke vermogenswinst."
                  difficulty="Moeilijk"
                  price="€€€€"
                  gain="50-100+ pk"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Motor", "Turbo", "Geavanceerd"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="suspension" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PerformanceCard
                  title="Sportieve Veren"
                  description="Verlaag je auto en verbeter de handling met sportieve veren."
                  difficulty="Gemiddeld"
                  price="€€"
                  gain="Verbeterde handling"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Ophanging", "Handling", "Rijhoogte"]}
                />
                <PerformanceCard
                  title="Verstelbare Schokdempers"
                  description="Pas de demping aan voor verschillende rijomstandigheden."
                  difficulty="Gemiddeld"
                  price="€€€"
                  gain="Aanpasbare handling"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Ophanging", "Aanpasbaar", "Comfort"]}
                />
                <PerformanceCard
                  title="Anti-Roll Bars"
                  description="Verminder carrosserie-overhelling in bochten voor betere handling."
                  difficulty="Gemiddeld"
                  price="€€"
                  gain="Verbeterde stabiliteit"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Ophanging", "Handling", "Bochten"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="brakes" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PerformanceCard
                  title="Sportieve Remblokken"
                  description="Verbeterde remblokken voor kortere remafstanden en betere feedback."
                  difficulty="Gemakkelijk"
                  price="€"
                  gain="Verbeterde remkracht"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Remmen", "DIY-vriendelijk", "Veiligheid"]}
                />
                <PerformanceCard
                  title="Grote Remschijven"
                  description="Grotere remschijven voor betere warmteafvoer en remkracht."
                  difficulty="Gemiddeld"
                  price="€€€"
                  gain="Consistente remprestaties"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Remmen", "Koeling", "Circuitgebruik"]}
                />
                <PerformanceCard
                  title="Big Brake Kits"
                  description="Complete remsysteem upgrades voor maximale remprestaties."
                  difficulty="Moeilijk"
                  price="€€€€"
                  gain="Maximale remkracht"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Remmen", "Geavanceerd", "Circuitgebruik"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="exhaust" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PerformanceCard
                  title="Cat-Back Uitlaatsystemen"
                  description="Verbeter de uitlaatgasstroom en het geluid met een cat-back systeem."
                  difficulty="Gemiddeld"
                  price="€€"
                  gain="5-10 pk"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Uitlaat", "Geluid", "Stroming"]}
                />
                <PerformanceCard
                  title="Downpipes"
                  description="Vervang de restrictieve fabrieksdownpipe voor meer vermogen."
                  difficulty="Moeilijk"
                  price="€€"
                  gain="15-25 pk"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Uitlaat", "Turbo", "Emissies"]}
                />
                <PerformanceCard
                  title="Uitlaatkleppen"
                  description="Pas het uitlaatgeluid aan met elektronisch bestuurbare kleppen."
                  difficulty="Moeilijk"
                  price="€€€"
                  gain="Aanpasbaar geluid"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Uitlaat", "Geluid", "Elektronisch"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="software" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PerformanceCard
                  title="ECU Tuning"
                  description="Optimaliseer de motorsturing voor meer vermogen en koppel."
                  difficulty="Professioneel"
                  price="€€"
                  gain="30-50 pk"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Software", "Motor", "Tuning"]}
                />
                <PerformanceCard
                  title="Transmissie Tuning"
                  description="Verbeter schakeltijden en -punten voor snellere acceleratie."
                  difficulty="Professioneel"
                  price="€€"
                  gain="Snellere schakelingen"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Software", "Transmissie", "Schakelen"]}
                />
                <PerformanceCard
                  title="Piggyback Modules"
                  description="Eenvoudig te installeren modules die motorsignalen aanpassen."
                  difficulty="Gemakkelijk"
                  price="€€"
                  gain="15-30 pk"
                  link="/blogs/bmw-m3-g80-review"
                  tags={["Software", "Plug-and-Play", "Reversibel"]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Performance Packages */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Complete</span> Prestatiepakketten
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-black border border-teal-600/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-teal-500">Stage 1 Pakket</h3>
                <p className="text-gray-400 mb-6">
                  Basisupgrades voor dagelijkse bestuurders die meer prestaties willen zonder betrouwbaarheid op te
                  offeren.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>ECU Tuning</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Hoogwaardige luchtfilter</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Cat-back uitlaatsysteem</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Sportieve remblokken</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Gauge className="h-5 w-5 mr-2 text-teal-500" />
                    <span className="font-medium">Vermogenswinst: 15-30%</span>
                  </div>
                  <div className="text-teal-500 font-bold">€€</div>
                </div>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/blogs/bmw-m3-g80-review">Meer Informatie</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-black border border-teal-600/20 relative">
              <div className="absolute top-0 right-0 bg-teal-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Populair
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-teal-500">Stage 2 Pakket</h3>
                <p className="text-gray-400 mb-6">
                  Middelmatige upgrades voor enthousiastelingen die serieuze prestaties willen voor zowel straat als
                  circuit.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Agressieve ECU Tuning</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Volledig inlaatsysteem</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Downpipe en uitlaatsysteem</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Intercooler upgrade</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Verstelbare ophanging</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Verbeterde remmen</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Gauge className="h-5 w-5 mr-2 text-teal-500" />
                    <span className="font-medium">Vermogenswinst: 30-50%</span>
                  </div>
                  <div className="text-teal-500 font-bold">€€€</div>
                </div>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/blogs/bmw-m3-g80-review">Meer Informatie</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-black border border-teal-600/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-teal-500">Stage 3 Pakket</h3>
                <p className="text-gray-400 mb-6">
                  Geavanceerde upgrades voor serieuze prestatie-enthousiastelingen en circuitgebruikers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Aangepaste ECU Tuning</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Turbo upgrade of vervanging</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Versterkte koppeling en transmissie</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Volledig coilover systeem</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Big Brake Kit</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Lichtgewicht wielen</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Gauge className="h-5 w-5 mr-2 text-teal-500" />
                    <span className="font-medium">Vermogenswinst: 50-100+%</span>
                  </div>
                  <div className="text-teal-500 font-bold">€€€€</div>
                </div>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/blogs/bmw-m3-g80-review">Meer Informatie</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dyno Testing */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Dyno</span> Testen & Tuning
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Wat is Dyno Tuning?</h3>
              <p className="text-gray-400 mb-6">
                Dyno tuning is het proces van het optimaliseren van de prestaties van je auto op een dynamometer, een
                apparaat dat het vermogen en koppel van je auto meet. Dit stelt tuners in staat om de ECU-instellingen
                nauwkeurig aan te passen voor maximale prestaties en betrouwbaarheid.
              </p>
              <h3 className="text-xl font-bold mb-4">Voordelen van Professionele Dyno Tuning</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Zap className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Nauwkeurige vermogensmetingen voor en na modificaties</span>
                </li>
                <li className="flex items-start">
                  <Zap className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Geoptimaliseerde brandstof-luchtmengsels voor maximaal vermogen</span>
                </li>
                <li className="flex items-start">
                  <Zap className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Verbeterde betrouwbaarheid door het voorkomen van schadelijke motoromstandigheden</span>
                </li>
                <li className="flex items-start">
                  <Zap className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Aangepaste tuning voor jouw specifieke modificaties en rijstijl</span>
                </li>
              </ul>
              <div className="p-4 border border-teal-600/20 rounded-lg bg-amber-950/20 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2 text-amber-500">Waarschuwing</h4>
                    <p className="text-gray-300">
                      Agressieve tuning kan de levensduur van motorcomponenten verkorten. Zorg altijd voor adequate
                      ondersteunende modificaties en regelmatig onderhoud bij het verhogen van het vermogen.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="/blogs/bmw-m3-g80-review">Meer Over Dyno Tuning</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="bg-black border border-teal-600/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Soorten Dyno's</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-teal-500">Inertie Dyno</h4>
                      <p className="text-gray-400">
                        Gebruikt een zware rol om vermogen te meten op basis van versnelling. Goedkoper maar minder
                        nauwkeurig voor gedetailleerde tuning.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-500">Belasting Dyno</h4>
                      <p className="text-gray-400">
                        Kan belasting simuleren voor nauwkeurigere metingen onder verschillende omstandigheden. Ideaal
                        voor professionele tuning.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-500">Hub Dyno</h4>
                      <p className="text-gray-400">
                        Bevestigt direct aan de wielnaaf voor de meest nauwkeurige metingen zonder bandenspin of
                        transmissieverlies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black border border-teal-600/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Wat te Verwachten bij een Dyno Sessie</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-500/20 text-teal-500 font-bold text-sm mr-2 shrink-0 mt-0.5">
                        1
                      </div>
                      <span>Initiële inspectie en voorbereiding van je auto</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-500/20 text-teal-500 font-bold text-sm mr-2 shrink-0 mt-0.5">
                        2
                      </div>
                      <span>Basislijn run om het huidige vermogen te meten</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-500/20 text-teal-500 font-bold text-sm mr-2 shrink-0 mt-0.5">
                        3
                      </div>
                      <span>Aanpassingen aan de ECU-instellingen</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-500/20 text-teal-500 font-bold text-sm mr-2 shrink-0 mt-0.5">
                        4
                      </div>
                      <span>Meerdere runs om de instellingen te verfijnen</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-500/20 text-teal-500 font-bold text-sm mr-2 shrink-0 mt-0.5">
                        5
                      </div>
                      <span>Finale run en gedetailleerde resultaten</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Considerations */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Wettelijke</span> Overwegingen
          </h2>
          <div className="p-6 border border-teal-600/20 rounded-lg bg-amber-950/20 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-500">Belangrijke Wettelijke Informatie</h3>
                <p className="text-gray-300 mb-4">
                  Voordat je prestatie-upgrades uitvoert, is het belangrijk om te begrijpen welke modificaties legaal
                  zijn voor gebruik op de openbare weg in Nederland. Sommige modificaties zijn alleen toegestaan voor
                  circuitgebruik.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black border border-teal-600/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-500">Niet Toegestaan op de Openbare Weg</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Settings className="mr-2 h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Verwijderen van katalysatoren of roetfilters</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="mr-2 h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Extreem luide uitlaatsystemen boven de wettelijke geluidslimiet</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="mr-2 h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Extreme verlaging die de veiligheid in gevaar brengt</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="mr-2 h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Modificaties die de emissiewaarden significant verhogen</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="mr-2 h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Niet-goedgekeurde xenon of LED-koplampen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border border-teal-600/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-teal-500">Meestal Toegestaan met Keuring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Settings className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>ECU tuning binnen redelijke grenzen</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Sportieve ophanging die voldoet aan minimale hoogtevoorschriften</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Verbeterde remsystemen met TÜV/E-goedkeuring</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Luchtinlaatsystemen die emissienormen niet beïnvloeden</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>Goedgekeurde uitlaatsystemen binnen geluidsnormen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-6">
              Raadpleeg altijd de lokale wetgeving en laat modificaties keuren door een erkende instantie om problemen
              bij APK-keuringen of verkeerscontroles te voorkomen.
            </p>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/blogs/bmw-m3-g80-review">Volledige Wettelijke Gids</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="rounded-lg border border-teal-600/20 bg-black/50 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="text-teal-500">Abonneer</span> op Onze Nieuwsbrief
                </h2>
                <p className="text-gray-400">
                  Ontvang de nieuwste prestatie-upgrades, tuning tips en exclusieve aanbiedingen direct in je inbox.
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

function PerformanceCard({
  title,
  description,
  difficulty,
  price,
  gain,
  link,
  tags,
}: {
  title: string
  description: string
  difficulty: string
  price: string
  gain: string
  link: string
  tags: string[]
}) {
  // Price indicator
  const renderPrice = () => {
    switch (price) {
      case "€":
        return "Goedkoop"
      case "€€":
        return "Gemiddeld"
      case "€€€":
        return "Prijzig"
      case "€€€€":
        return "Zeer prijzig"
      default:
        return price
    }
  }

  return (
    <Card className="bg-black border border-teal-600/20 overflow-hidden">
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
        <div className="grid grid-cols-3 gap-2 text-sm mb-4">
          <div className="flex flex-col">
            <span className="text-gray-500">Moeilijkheid</span>
            <span className="font-medium">{difficulty}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Prijs</span>
            <span className="font-medium">
              {price} <span className="text-xs">({renderPrice()})</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Winst</span>
            <span className="font-medium">{gain}</span>
          </div>
        </div>
        <Link href={link} className="text-teal-500 hover:text-teal-400 inline-flex items-center">
          Lees Meer <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
