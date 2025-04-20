import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Wrench, Calendar, Clock, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Onderhoud - motorGein",
  description: "Expert onderhoudstips en -gidsen voor je auto - van olieverversingen tot complexe reparaties.",
}

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
          <Image src="/bmw-oil-change.png" alt="Auto Onderhoud" fill className="object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              Auto <span className="text-teal-500">Onderhoud</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Houd je auto in topconditie met onze expert onderhoudsgidsen en tips. Van basisonderhoud tot geavanceerde
              procedures.
            </p>
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="#maintenance-guides">Onderhoudsgidsen Bekijken</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Maintenance Categories */}
      <section className="py-16 bg-black" id="maintenance-guides">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Onderhoudscategorieën</span>
          </h2>
          <Tabs defaultValue="routine" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-black/50 border border-teal-600/20">
                <TabsTrigger value="routine" className="data-[state=active]:bg-teal-600">
                  Routineonderhoud
                </TabsTrigger>
                <TabsTrigger value="seasonal" className="data-[state=active]:bg-teal-600">
                  Seizoensgebonden
                </TabsTrigger>
                <TabsTrigger value="advanced" className="data-[state=active]:bg-teal-600">
                  Geavanceerd
                </TabsTrigger>
                <TabsTrigger value="emergency" className="data-[state=active]:bg-teal-600">
                  Noodgevallen
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="routine" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MaintenanceCard
                  title="Olieverversing Gids"
                  description="Stap-voor-stap instructies voor het verversen van je motorolie en het vervangen van het oliefilter."
                  image="/bmw-oil-change.png"
                  difficulty="Gemakkelijk"
                  time="30-45 minuten"
                  link="/blogs/bmw-m3-g80-review"
                />
                <MaintenanceCard
                  title="Luchtfilter Vervangen"
                  description="Leer hoe je de luchtfilter van je auto vervangt om de motorefficiëntie te maximaliseren."
                  image="/bmw-oil-change.png"
                  difficulty="Gemakkelijk"
                  time="15 minuten"
                  link="/blogs/bmw-m3-g80-review"
                />
                <MaintenanceCard
                  title="Remvloeistof Verversen"
                  description="Hoe en wanneer je de remvloeistof moet verversen voor optimale remprestaties."
                  image="/bmw-oil-change.png"
                  difficulty="Gemiddeld"
                  time="45-60 minuten"
                  link="/blogs/bmw-m3-g80-review"
                />
              </div>
            </TabsContent>

            <TabsContent value="seasonal" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MaintenanceCard
                  title="Winterklaar Maken"
                  description="Bereid je auto voor op de wintermaanden met deze essentiële onderhoudstips."
                  image="/bmw-oil-change.png"
                  difficulty="Gemiddeld"
                  time="2-3 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <MaintenanceCard
                  title="Zomeronderhoud Checklist"
                  description="Houd je auto koel en betrouwbaar tijdens de hete zomermaanden."
                  image="/bmw-oil-change.png"
                  difficulty="Gemakkelijk"
                  time="1 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <MaintenanceCard
                  title="Voorjaarsschoonmaak"
                  description="Verwijder wintervuil en zout en bereid je auto voor op de lente."
                  image="/bmw-oil-change.png"
                  difficulty="Gemakkelijk"
                  time="2 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MaintenanceCard
                  title="Timing Belt Vervanging"
                  description="Uitgebreide gids voor het vervangen van de distributieriem van je auto."
                  image="/bmw-oil-change.png"
                  difficulty="Moeilijk"
                  time="4-6 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <MaintenanceCard
                  title="Koppeling Vervangen"
                  description="Stap-voor-stap instructies voor het vervangen van een versleten koppeling."
                  image="/bmw-oil-change.png"
                  difficulty="Moeilijk"
                  time="6-8 uur"
                  link="/blogs/bmw-m3-g80-review"
                />
                <MaintenanceCard
                  title="Turbo Onderhoud"
                  description="Hoe je de levensduur van je turbo kunt maximaliseren en veelvoorkomende problemen kunt diagnosticeren."
                  image="/bmw-oil-change.png"
                  difficulty="Moeilijk"
                  time="Variabel"
                  link="/blogs/bmw-m3-g80-review"
                />
              </div>
            </TabsContent>

            <TabsContent value="emergency" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MaintenanceCard
                  title="Lekke Band Repareren"
                  description="Wat te doen bij een lekke band en hoe je deze onderweg kunt repareren."
                  image="/bmw-oil-change.png"
                  difficulty="Gemiddeld"
                  time="30 minuten"
                  link="/blogs/bmw-m3-g80-review"
                />
                <MaintenanceCard
                  title="Starthulp Geven"
                  description="De juiste manier om een auto met een lege accu te starten."
                  image="/bmw-oil-change.png"
                  difficulty="Gemakkelijk"
                  time="15 minuten"
                  link="/blogs/bmw-m3-g80-review"
                />
                <MaintenanceCard
                  title="Oververhitting Aanpakken"
                  description="Wat te doen als je auto oververhit raakt en hoe verdere schade te voorkomen."
                  image="/bmw-oil-change.png"
                  difficulty="Gemiddeld"
                  time="Variabel"
                  link="/blogs/bmw-m3-g80-review"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Aanbevolen</span> Onderhoudsschema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScheduleCard
              title="Elke 5.000 km"
              items={[
                "Oliepeil controleren",
                "Bandenspanning controleren",
                "Ruitenwisservloeistof bijvullen",
                "Visuele inspectie van remmen",
              ]}
            />
            <ScheduleCard
              title="Elke 15.000 km"
              items={[
                "Olie en oliefilter vervangen",
                "Luchtfilter controleren",
                "Remmen inspecteren",
                "Alle vloeistofniveaus controleren",
              ]}
            />
            <ScheduleCard
              title="Elke 30.000 km"
              items={[
                "Luchtfilter vervangen",
                "Brandstoffilter vervangen",
                "Transmissievloeistof controleren",
                "Koelsysteem inspecteren",
              ]}
            />
            <ScheduleCard
              title="Elke 60.000 km"
              items={[
                "Bougies vervangen",
                "Remvloeistof verversen",
                "Distributieriem inspecteren",
                "Schokdempers controleren",
              ]}
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/blogs/bmw-m3-g80-review">Volledige Onderhoudsschema Bekijken</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">DIY</span> vs Professioneel Onderhoud
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 border border-teal-600/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Wrench className="mr-2 h-5 w-5 text-teal-500" /> Doe-Het-Zelf Voordelen
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Kostenbesparing op arbeidskosten</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Ontwikkel waardevolle vaardigheden en kennis over je voertuig</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Flexibiliteit om onderhoud uit te voeren wanneer het jou uitkomt</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Persoonlijke voldoening van het zelf doen</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Mogelijkheid om hoogwaardige onderdelen te kiezen</span>
                </li>
              </ul>
            </div>
            <div className="p-6 border border-teal-600/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Wrench className="mr-2 h-5 w-5 text-teal-500" /> Professioneel Onderhoud Voordelen
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Expertise en gespecialiseerde kennis van gecertificeerde technici</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Toegang tot geavanceerde diagnostische apparatuur</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Garantie op uitgevoerde werkzaamheden</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Tijdsbesparing en gemak</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Behoud van fabrieksgarantie bij dealers</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 border border-teal-600/20 rounded-lg bg-amber-950/20">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-500">Wanneer je een professional moet inschakelen</h3>
                <p className="text-gray-300 mb-4">
                  Hoewel veel onderhoudstaken DIY-vriendelijk zijn, zijn er situaties waarin het raadzaam is om een
                  professional in te schakelen:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Complexe elektrische problemen of diagnostiek</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Transmissie- of motoroverhaul</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Airconditioning reparaties (vereist speciale apparatuur en certificering)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Veiligheidskritische systemen zoals airbags of ABS</span>
                  </li>
                </ul>
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
                  Ontvang maandelijkse onderhoudstips, seizoensgebonden checklists en exclusieve gidsen direct in je
                  inbox.
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

function MaintenanceCard({
  title,
  description,
  image,
  difficulty,
  time,
  link,
}: {
  title: string
  description: string
  image: string
  difficulty: string
  time: string
  link: string
}) {
  return (
    <Card className="bg-black border border-teal-600/20 overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Wrench className="h-4 w-4 mr-1 text-teal-500" />
            {difficulty}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-teal-500" />
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

function ScheduleCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="bg-black border border-teal-600/20">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 text-teal-500">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <Calendar className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
