import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, AlertTriangle, Search } from "lucide-react"

export const metadata = {
  title: "Doe-het-zelf Gidsen - motorGein",
  description: "Stap-voor-stap gidsen voor auto-onderhoud en reparaties die je zelf kunt uitvoeren.",
}

export default function DIYGuidesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
          <Image src="/bmw-oil-change.png" alt="DIY Auto Onderhoud" fill className="object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              <span className="text-teal-500">Doe-het-zelf</span> Gidsen
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Bespaar geld en leer waardevolle vaardigheden met onze uitgebreide stap-voor-stap gidsen voor auto-onderhoud en reparaties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="#popular-guides">Populaire Gidsen</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500/10">
                <Link href="#beginner-guides">Voor Beginners</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-black border-y border-teal-600/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Zoek naar gidsen..."
                className="w-full rounded-md border border-teal-600/20 bg-black pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Filteren op:</span>
              <select className="appearance-none bg-black border border-teal-600/20 rounded-md px-3 py-2 text-white focus:border-teal-500 focus:outline-none">
                <option>Alle Moeilijkheidsgraden</option>
                <option>Beginner</option>
                <option>Gemiddeld</option>
                <option>Gevorderd</option>
              </select>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700">Zoeken</Button>
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="py-16 bg-black" id="popular-guides">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            <span className="text-teal-500">Populaire</span> Gidsen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GuideCard
              title="Olieverversing: Stap-voor-Stap Gids"
              description="Bespaar geld en leer een waardevolle vaardigheid met onze uitgebreide gids voor het thuis verversen van je auto's olie."
              image="/bmw-oil-change.png"
              difficulty="Beginner"
              time="30-45 minuten"
              tools={["Dopsleutelset", "Oliefiltersleutel", "Opvangbak", "Trechter"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <GuideCard
              title="Remblokken Vervangen"
              description="Leer hoe je zelf je remblokken kunt vervangen voor betere remprestaties en aanzienlijke kostenbesparingen."
              image="/high-performance-brake-system.png"
              difficulty="Gemiddeld"
              time="1-2 uur"
              tools={["Krik en assteunen", "Dopsleutelset", "Momentsleutel", "C-klem"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <GuideCard
              title="Luchtfilter Vervangen"
              description="Verbeter je motorefficiëntie en brandstofverbruik door je luchtfilter te vervangen - een eenvoudige klus voor beginners."
              image="/bmw-oil-change.png"
              difficulty="Beginner"
              time="15 minuten"
              tools={["Schroevendraaier", "Dopsleutelset"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <GuideCard
              title="Bougies Vervangen"
              description="Stap-voor-stap instructies voor het vervangen van bougies voor betere prestaties en brandstofefficiëntie."
              image="/bmw-oil-change.png"
              difficulty="Gemiddeld"
              time="1-2 uur"
              tools={["Bougiesleutel", "Momentsleutel", "Voelermaat"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <GuideCard
              title="Accu Vervangen"
              description="Leer hoe je veilig je auto-accu kunt vervangen en wat je moet weten over moderne auto's met start-stop systemen."
              image="/bmw-oil-change.png"
              difficulty="Beginner"
              time="30 minuten"
              tools={["Steeksleutelset", "Accuklemreiniger", "Handschoenen"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <GuideCard
              title="Ruitenwissers Vervangen"
              description="Een eenvoudige gids voor het vervangen van ruitenwissers voor betere zichtbaarheid en veiligheid tijdens regenachtige dagen."
              image="/bmw-oil-change.png"
              difficulty="Beginner"
              time="10 minuten"
              tools={["Geen speciaal gereedschap nodig"]}
              link="/blogs/bmw-m3-g80-review"
            />
          </div>
        </div>
      </section>

      {/* Beginner Guides Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900" id="beginner-guides">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            <span className="text-teal-500">Voor</span> Beginners
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black border border-teal-600/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Basiskennis Auto-onderhoud</h3>
                <p className="text-gray-400 mb-6">
                  Voordat je begint met DIY auto-onderhoud, is het belangrijk om enkele basisprincipes te begrijpen. 
                  Deze gidsen helpen je op weg met fundamentele kennis en vaardigheden.
                </p>
                <ul className="space-y-4">
                  <li>
                    <Link href="/blogs/bmw-m3-g80-review" className="flex items-start group">
                      <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <h4 className="font-bold group-hover:text-teal-500 transition-colors">Begrijp Je Auto's Handleiding</h4>
                        <p className="text-sm text-gray-400">Leer hoe je de handleiding van je auto effectief kunt gebruiken voor onderhoud en probleemoplossing.</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs/bmw-m3-g80-review" className="flex items-start group">
                      <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <h4 className="font-bold group-hover:text-teal-500 transition-colors">Essentieel Gereedschap voor Beginners</h4>
                        <p className="text-sm text-gray-400">Een overzicht van het basisgereedschap dat elke DIY'er zou moeten hebben.</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs/bmw-m3-g80-review" className="flex items-start group">
                      <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <h4 className="font-bold group-hover:text-teal-500 transition-colors">Veiligheid Eerst: Voorzorgsmaatregelen</h4>
                        <p className="text-sm text-gray-400">Belangrijke veiligheidsmaatregelen die je moet nemen voordat je aan je auto werkt.</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs/bmw-m3-g80-review" className="flex items-start group">
                      <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <h4 className="font-bold group-hover:text-teal-500 transition-colors">Hoe Lees Je OBD-II Foutcodes</h4>
                        <p className="text-sm text-gray-400">Begrijp wat je auto je probeert te vertellen met diagnostische foutcodes.</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black border border-teal-600/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Eenvoudige DIY Projecten</h3>
                <p className="text-gray-400 mb-6">
                  Begin met deze eenvoudige projecten om vertrouwen op te bouwen en basisvaardigheden te ontwikkelen 
                  voordat je overgaat op complexere taken.
                </p>
                <ul className="space-y-4">
                  <li>
                    <Link href="/blogs/bmw-m3-g80-review" className="flex items-start group">
                      <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <h4 className="font-bold group-hover:text-teal-500 transition-colors">Interieurfilter Vervangen</h4>
                        <p className="text-sm text-gray-400">Verbeter de luchtkwaliteit in je auto met deze eenvoudige 10-minuten klus.</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs/bmw-m3-g80-review" className="flex items-start group">
                      <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <h4 className="font-bold group-hover:text-teal-500 transition-colors">Vloeistofniveaus Controleren</h4>
                        <p className="text-sm text-gray-400">Leer hoe je alle belangrijke vloeistoffen in je auto kunt controleren en bijvullen.</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs/bmw-m3-g80-review" className="flex items-start group">
                      <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <h4 className="font-bold group-hover:text-teal-500 transition-colors">Bandenspanning Controleren</h4>
                        <p className="text-sm text-gray-400">De juiste bandenspanning voor veiligheid, prestaties en brandstofbesparing.</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs/bmw-m3-g80-review" className="flex items-start group">
                      <ArrowRight className="mr-2 h-5 w-5 text-teal-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <h4 className="font-bold group-hover:text-teal-500 transition-colors">Auto Wassen als een Pro</h4>
                        <p className="text-sm text-gray-400">Technieken en producten voor een professionele wasbeurt die je lak beschermt.</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="p-6 border border-teal-600/20 rounded-lg bg-amber-950/20">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-4 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-500">Beginners Advies</h3>
                <p className="text-gray-300 mb-4">
                  Als je nieuw bent in DIY auto-onderhoud, houd dan deze tips in gedachten:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Begin met eenvoudige projecten en bouw geleidelijk op naar complexere taken</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Investeer in kwaliteitsgereedschap - het bespaart je op de lange termijn frustratie en geld</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Documenteer je werk met foto's voordat je onderdelen demonteert</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Weet wanneer je moet stoppen en een professional moet inschakelen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Guides Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            <span className="text-teal-500">Geavanceerde</span> Gidsen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GuideCard
              title="Koppeling Vervangen"
              description="Stap-voor-stap instructies voor het vervangen van een versleten koppeling - een uitdagende maar lonende DIY-klus."
              image="/bmw-oil-change.png"
              difficulty="Gevorderd"
              time="6-8 uur"
              tools={["Transmissiekrik", "Momentsleutel", "Uitlijngereedschap", "Koppelingscentreerder"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <GuideCard
              title="Timing Belt Vervanging"
              description="Een uitgebreide gids voor het vervangen van de distributieriem - een kritieke onderhoudsklus voor veel auto's."
              image="/bmw-oil-change.png"
              difficulty="Gevorderd"
              time="4-6 uur"
              tools={["Krukaspoelie-houder", "Timing gereedschapsset", "Momentsleutel"]}
              link="/blogs/bmw-m3-g80-review"
            />
            <GuideCard
              title="Schokdempers Vervangen"
              description="Verbeter rijcomfort en handling door versleten sch\
