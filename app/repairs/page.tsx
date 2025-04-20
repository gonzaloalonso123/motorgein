import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, PenToolIcon as Tool, AlertTriangle, Search, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Reparaties - motorGein",
  description: "DIY auto reparatie gidsen en probleemoplossing tips voor veelvoorkomende autoproblemen.",
}

export default function RepairsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
          <Image src="/bmw-oil-change.png" alt="Auto Reparatie" fill className="object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              Auto <span className="text-teal-500">Reparaties</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Leer hoe je veelvoorkomende autoproblemen kunt diagnosticeren en repareren met onze stap-voor-stap gidsen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="#repair-guides">Reparatiegidsen Bekijken</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-teal-500 text-teal-500 hover:bg-teal-500/10"
              >
                <Link href="#troubleshooting">Probleemoplossing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Categories */}
      <section className="py-16 bg-black" id="repair-guides">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Reparatiecategorieën</span>
          </h2>
          <Tabs defaultValue="engine" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-black/50 border border-teal-600/20">
                <TabsTrigger value="engine" className="data-[state=active]:bg-teal-600">
                  Motor
                </TabsTrigger>
                <TabsTrigger value="electrical" className="data-[state=active]:bg-teal-600">
                  Elektrisch
                </TabsTrigger>
                <TabsTrigger value="suspension" className="data-[state=active]:bg-teal-600">
                  Ophanging
                </TabsTrigger>
                <TabsTrigger value="brakes" className="data-[state=active]:bg-teal-600">
                  Remmen
                </TabsTrigger>
                <TabsTrigger value="interior" className="data-[state=active]:bg-teal-600">
                  Interieur
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="engine" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RepairCard
                  title="Bougie Vervanging"
                  description="Stap-voor-stap gids voor het vervangen van bougies voor betere prestaties en brandstofefficiëntie."
                  difficulty="Gemiddeld"
                  time="1-2 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <RepairCard
                  title="Waterpomp Vervangen"
                  description="Hoe je een defecte waterpomp kunt diagnosticeren en vervangen om oververhitting te voorkomen."
                  difficulty="Moeilijk"
                  time="3-4 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <RepairCard
                  title="Inlaatspruitstuk Pakking"
                  description="Repareer lekken in het inlaatspruitstuk om motorprestaties te herstellen."
                  difficulty="Moeilijk"
                  time="4-6 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
              </div>
            </TabsContent>

            <TabsContent value="electrical" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RepairCard
                  title="Dynamo Vervangen"
                  description="Diagnose en vervanging van een defecte dynamo om laadproblemen op te lossen."
                  difficulty="Gemiddeld"
                  time="2-3 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <RepairCard
                  title="Startmotor Reparatie"
                  description="Oplossingen voor startproblemen en stap-voor-stap vervanging van de startmotor."
                  difficulty="Gemiddeld"
                  time="2-3 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <RepairCard
                  title="Elektrische Raamreparatie"
                  description="Diagnose en reparatie van elektrische raammechanismen die niet goed werken."
                  difficulty="Gemiddeld"
                  time="1-2 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
              </div>
            </TabsContent>

            <TabsContent value="suspension" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RepairCard
                  title="Schokdempers Vervangen"
                  description="Verbeter rijcomfort en handling door versleten schokdempers te vervangen."
                  difficulty="Moeilijk"
                  time="4-6 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <RepairCard
                  title="Wiellagervervaning"
                  description="Herken en vervang defecte wiellagers om ongewenste geluiden en onveilige rijomstandigheden te elimineren."
                  difficulty="Moeilijk"
                  time="2-3 uur per wiel"
                  link="/blogs/bmw-m3-g80-review"
                />
                <RepairCard
                  title="Stuurkogel Vervanging"
                  description="Verbeter de besturing en veiligheid door versleten stuurkogels te vervangen."
                  difficulty="Moeilijk"
                  time="2-3 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
              </div>
            </TabsContent>

            <TabsContent value="brakes" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RepairCard
                  title="Remblokken Vervangen"
                  description="Stap-voor-stap gids voor het vervangen van remblokken voor optimale remprestaties."
                  difficulty="Gemiddeld"
                  time="1-2 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <RepairCard
                  title="Remschijven Vervangen"
                  description="Hoe je versleten remschijven kunt herkennen en vervangen voor betere remprestaties en veiligheid."
                  difficulty="Gemiddeld"
                  time="2-3 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <RepairCard
                  title="Remklauw Revisie"
                  description="Leer hoe je vastzittende remklauwen kunt reviseren om ongelijkmatige remslijtage te voorkomen."
                  difficulty="Moeilijk"
                  time="3-4 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
              </div>
            </TabsContent>

            <TabsContent value="interior" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RepairCard
                  title="Dashboard Verlichting Reparatie"
                  description="Vervang defecte dashboard lampjes en herstel de zichtbaarheid van je instrumentenpaneel."
                  difficulty="Gemiddeld"
                  time="1-2 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <RepairCard
                  title="Stoelverwarming Reparatie"
                  description="Diagnose en reparatie van niet-werkende stoelverwarming elementen."
                  difficulty="Moeilijk"
                  time="2-4 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <RepairCard
                  title="Airconditioning Problemen"
                  description="Troubleshooting en reparatie van veelvoorkomende airconditioning problemen."
                  difficulty="Moeilijk"
                  time="Variabel"
                  link="/blogs/bmw-m3-g80-review"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900" id="troubleshooting">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Probleemoplossing</span> Gids
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="p-6 border border-teal-600/20 rounded-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Search className="mr-2 h-5 w-5 text-teal-500" /> Symptomen Herkennen
              </h3>
              <div className="space-y-4">
                <div className="p-4 border border-teal-600/20 rounded-md">
                  <h4 className="font-bold mb-2">Ongewone Geluiden</h4>
                  <p className="text-gray-400 mb-2">Verschillende geluiden kunnen wijzen op specifieke problemen:</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Piepend geluid</strong> bij draaien: mogelijk stuurbekrachtigingspomp of aandrijfriem
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Kloppend geluid</strong> van motor: mogelijk klepspeling of ontstekingstiming
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Ratelend geluid</strong> bij hobbels: mogelijk ophanging of uitlaatproblemen
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 border border-teal-600/20 rounded-md">
                  <h4 className="font-bold mb-2">Vloeistoflekkage</h4>
                  <p className="text-gray-400 mb-2">Identificeer lekkages aan de hand van kleur:</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Groene vloeistof</strong>: koelvloeistof, mogelijk radiator of waterpomp lek
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Roodachtige vloeistof</strong>: transmissie- of stuurbekrachtigingsvloeistof
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Donkere olie</strong>: motorolie of remvloeistof
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 border border-teal-600/20 rounded-md">
                  <h4 className="font-bold mb-2">Waarschuwingslampjes</h4>
                  <p className="text-gray-400 mb-2">Begrijp wat je dashboard je vertelt:</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Check Engine</strong>: diverse motorproblemen, vereist diagnose
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>ABS Lampje</strong>: probleem met anti-blokkeerremsysteem
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Oliedruk Lampje</strong>: lage oliedruk, stop onmiddellijk
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6 border border-teal-600/20 rounded-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Tool className="mr-2 h-5 w-5 text-teal-500" /> Diagnose Stappen
              </h3>
              <div className="space-y-4">
                <div className="p-4 border border-teal-600/20 rounded-md">
                  <h4 className="font-bold mb-2">Stap 1: Visuele Inspectie</h4>
                  <p className="text-gray-400">
                    Begin altijd met een grondige visuele inspectie. Controleer op losse verbindingen, lekkages,
                    gebroken onderdelen of zichtbare slijtage. Veel problemen kunnen worden geïdentificeerd zonder
                    geavanceerde tools.
                  </p>
                </div>
                <div className="p-4 border border-teal-600/20 rounded-md">
                  <h4 className="font-bold mb-2">Stap 2: Foutcodes Uitlezen</h4>
                  <p className="text-gray-400">
                    Gebruik een OBD-II scanner om foutcodes uit te lezen als het check engine lampje brandt. Deze codes
                    geven specifieke aanwijzingen over waar het probleem zich bevindt.
                  </p>
                </div>
                <div className="p-4 border border-teal-600/20 rounded-md">
                  <h4 className="font-bold mb-2">Stap 3: Test Componenten</h4>
                  <p className="text-gray-400">
                    Test specifieke componenten op basis van je eerste diagnose. Gebruik een multimeter voor elektrische
                    tests, een compressietester voor motorproblemen, of een remdruktest voor remproblemen.
                  </p>
                </div>
                <div className="p-4 border border-teal-600/20 rounded-md">
                  <h4 className="font-bold mb-2">Stap 4: Raadpleeg Bronnen</h4>
                  <p className="text-gray-400">
                    Raadpleeg werkplaatshandboeken, online forums of onze gedetailleerde gidsen voor modelspecifieke
                    informatie en stap-voor-stap reparatie-instructies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border border-teal-600/20 rounded-lg bg-amber-950/20">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-500">Veiligheidswaarschuwing</h3>
                <p className="text-gray-300 mb-4">
                  Voordat je begint met reparaties, zorg altijd voor de juiste veiligheidsmaatregelen:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Koppel altijd de accu los voordat je aan elektrische systemen werkt</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>
                      Gebruik assteunen of een hefbrug bij het werken onder een voertuig - vertrouw nooit alleen op een
                      krik
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Draag beschermende uitrusting zoals handschoenen en een veiligheidsbril</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Laat de motor volledig afkoelen voordat je aan het koelsysteem werkt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Essentiële</span> Gereedschappen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ToolCard
              title="Basis Gereedschapsset"
              items={["Dopsleutelset", "Steeksleutelset", "Schroevendraaiers", "Momentsleutel", "Hamer"]}
            />
            <ToolCard
              title="Diagnose Gereedschap"
              items={["OBD-II Scanner", "Multimeter", "Circuittester", "Compressietester", "Vacuümmeter"]}
            />
            <ToolCard
              title="Specialistische Tools"
              items={[
                "Remzuigercompressor",
                "Oliefilterschleutel",
                "Kogelgewrichttrekker",
                "Poelietrekker",
                "Klepveercompressor",
              ]}
            />
            <ToolCard
              title="Veiligheidsuitrusting"
              items={["Veiligheidsbril", "Werkhandschoenen", "Assteunen", "Brandblusser", "Eerste hulpkit"]}
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/blogs/bmw-m3-g80-review">Volledige Gereedschapsgids Bekijken</Link>
            </Button>
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
                  Ontvang wekelijkse reparatietips, probleemoplossingsadvies en exclusieve gidsen direct in je inbox.
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

function RepairCard({
  title,
  description,
  difficulty,
  time,
  link,
}: {
  title: string
  description: string
  difficulty: string
  time: string
  link: string
}) {
  return (
    <Card className="bg-black border border-teal-600/20 overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Tool className="h-4 w-4 mr-1 text-teal-500" />
            {difficulty}
          </div>
          <div className="flex items-center">
            <Search className="h-4 w-4 mr-1 text-teal-500" />
            {time}
          </div>
        </div>
        <Link href={link} className="text-teal-500 hover:text-teal-400 inline-flex items-center">
          Lees Meer <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

function ToolCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="bg-black border border-teal-600/20">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 text-teal-500">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <Tool className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
