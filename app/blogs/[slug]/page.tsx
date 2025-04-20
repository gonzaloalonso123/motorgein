import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowLeft, Share2, Bookmark, ThumbsUp, MessageSquare } from "lucide-react"
import type { JSX } from "react"

// Sample blog data - same as in blogs/page.tsx
const blogs = [
  {
    id: "bmw-m3-g80-review",
    title: "De BMW M3 G80: Een Groen Monster met Race-DNA",
    date: "19 april 2025",
    author: "Michael Turner",
    description:
      "Een diepgaande review van de nieuwste BMW M3 G80 in zijn opvallende groene kleur, met een verkenning van zijn prestaties, technologie en rijdynamiek.",
    featuredImage: "/images/bmw-green.jpeg",
    tags: ["Review", "Prestaties", "BMW"],
    content: `
      ## De BMW M3 G80: Een Groen Monster met Race-DNA

      De BMW M3 is altijd al de benchmark geweest voor high-performance sportieve sedans, en de nieuwste G80-generatie vormt daarop geen uitzondering. Gehuld in een opvallende Isle of Man Green lak, trekt deze specifieke M3 Competition overal waar hij komt de aandacht.

      ### Design: Controversieel Maar Doelgericht

      Laten we het meteen hebben over de olifant in de kamer - de enorme nierengrille. Hoewel deze de meningen blijft verdelen, geeft hij de M3 in het echt, vooral in dit groene kleurenschema, een agressieve, roofdierachtige look die op je groeit. De verbrede wielkasten, vier uitlaatpijpen en het koolstofvezel dak maken de race-auto-voor-de-straat esthetiek compleet.

      De Isle of Man Green lak verdient een speciale vermelding - afhankelijk van het licht wisselt hij tussen diep smaragdgroen en een lichtere tint, wat de auto zelfs stilstaand een dynamische uitstraling geeft.

      ### Prestaties: Pure Kracht Ontmoet Precisie

      Onder de motorkap ligt een 3,0-liter twin-turbo zes-in-lijn die in Competition-specificatie maar liefst 503 pk en 650 Nm koppel produceert. Deze krachtbron is een meesterwerk dat lineair vermogen levert over het hele toerentalbereik met minimale turbovertraging.

      ⚠️ Waarschuwing: De prestatiemogelijkheden van de M3 Competition overtreffen ruimschoots wat wettelijk toegestaan is op de openbare weg. Respecteer altijd snelheidslimieten en overweeg trackdagen om zijn volledige potentieel veilig te verkennen.

      De achttraps automatische transmissie verdient lof voor zijn bliksemsnelle schakelmomenten en intelligente programmering. Hoewel puristen de handgeschakelde optie (nog beschikbaar in de standaard M3) wellicht zullen missen, is de automaat in de Competition zo goed dat het moeilijk is om kritiek te leveren.

      Enkele belangrijke prestatiecijfers:
      - 0-100 km/u: 3,8 seconden
      - Topsnelheid: 250 km/u (begrensd), 290 km/u met M Driver's Package
      - Kwart mijl: 11,6 seconden

      ### Handling: Circuitklare Precisie

      De M3 Competition schittert het meest wanneer hij hard door bochten wordt gedrukt. De chassisbalans is uitzonderlijk, met de adaptieve ophanging die alles biedt van comfortabel dagelijks rijden tot circuitgerichte stijfheid.

      De besturing is precies en heeft een goed gewicht, hoewel sommigen vinden dat het de pure feedback van oudere M3-generaties mist. Toch communiceert het voldoende informatie om de auto precies daar te plaatsen waar je wilt.

      ### Interieur: Waar Luxe Prestatie Ontmoet

      Binnenin combineert de M3 Competition luxe met motorsportinvloeden. De met koolstofvezel verstevigde sportstoelen hebben agressieve zijsteunen maar blijven comfortabel voor langere ritten. Het digitale dashboard is helder en configureerbaar, terwijl het iDrive-systeem een van de beste infotainmentsystemen in de branche blijft.

      De M-specifieke bedieningselementen verdienen speciale vermelding:
      - M1- en M2-knoppen op het stuurwiel voor aangepaste rijmodi
      - Instelbaar remgevoel
      - Configureerbare M Drive Professional met drift-analyzer

      ### Dagelijks Gebruiksgemak

      Ondanks zijn circuitcapaciteiten blijft de M3 een praktische vierdeurs sedan. De achterbank biedt voldoende ruimte, de kofferbak is ruim bemeten, en in de Comfort-modus is de rit voldoende comfortabel voor dagelijks gebruik. Het brandstofverbruik is respectabel wanneer rustig gereden wordt, hoewel enthousiast rijden het verbruik drastisch doet stijgen.

      ### Onderhoudsoverwegingen

      Een M3 Competition bezitten vereist toewijding aan goed onderhoud:

      1. Regelmatige olieverversingen met door BMW goedgekeurde synthetische olie
      2. Reminspecties na gebruik op het circuit
      3. Bandenrotatie elke 8.000-11.000 kilometer
      4. Reiniging van koolstofaanslag op inlaatkleppen elke 50.000 kilometer

      ### Conclusie: Een Waardige M3-Opvolger

      De G80 BMW M3 Competition, vooral in deze opvallende groene kleur, vertegenwoordigt het toppunt van sportsedan-engineering. Hij combineert met succes dagelijks gebruiksgemak met prestaties op supercar-niveau, en zet daarmee de erfenis van de M3 als de benchmark in zijn klasse voort.

      Hoewel de styling controversieel is en het prijskaartje aanzienlijk, is de rijervaring die hij biedt ongeëvenaard. Voor degenen die op zoek zijn naar de ultieme rijmachine die zowel het dagelijkse woon-werkverkeer als weekendtrackdagen aankan, levert de M3 Competition in overvloed.

      ---

      Heb jij in de nieuwe M3 gereden? Wat zijn jouw gedachten over het design en de prestaties? Laat het ons weten in de reacties hieronder!
    `,
  },
  {
    id: "bmw-m4-maintenance-guide",
    title: "Essentiële Onderhoudstips voor je BMW M4",
    date: "15 april 2025",
    author: "Sarah Johnson",
    description: "Houd je BMW M4 in topconditie met deze expert onderhoudstips en -schema's.",
    featuredImage: "/images/bmw-blue.jpeg",
    tags: ["Onderhoud", "DIY", "BMW"],
    content: `
      ## Essentiële Onderhoudstips voor je BMW M4

      De BMW M4 is een high-performance machine die goed onderhoud vereist om zijn uitzonderlijke rijdynamiek en betrouwbaarheid te behouden. In deze uitgebreide gids behandelen we alles wat je moet weten om je M4 in topconditie te houden.

      ### Regelmatig Onderhoudsschema

      Het volgen van BMW's aanbevolen onderhoudsschema is cruciaal voor de levensduur van je M4:

      1. **Olieverversingen**: Elke 12.000 kilometer of jaarlijks (wat het eerst komt)
      2. **Remvloeistof**: Elke 2 jaar vervangen, ongeacht de kilometerstand
      3. **Luchtfilters**: Elke 50.000 kilometer vervangen
      4. **Bougies**: Elke 100.000 kilometer vervangen
      5. **Transmissievloeistof**: Elke 80.000 kilometer vervangen

      ⚠️ Waarschuwing: Als je regelmatig met je M4 naar het circuit gaat, overweeg dan vaker olie te verversen (elke 8.000 kilometer) en remvloeistof jaarlijks te vervangen.

      ### Oliekeuze is Belangrijk

      De S58-motor in de nieuwste M4 vereist hoogwaardige synthetische olie die voldoet aan BMW's LL-01 specificatie. Aanbevolen opties zijn onder andere:

      - BMW Original Engine Oil
      - Castrol EDGE Professional
      - Mobil 1 0W-40

      Gebruik altijd de juiste viscositeit zoals aangegeven in je handleiding.

      ### Remonderhoud

      Het high-performance remsysteem van de M4 vereist speciale aandacht:

      1. **Remblokken Inspectie**: Controleer de remblokdikte elke 16.000 kilometer
      2. **Remschijven Inspectie**: Controleer op scheuren of ongelijkmatige slijtage
      3. **Remklauwonderhoud**: Reinig en smeer de remklauwpennen jaarlijks

      Voor circuitgebruik, overweeg een upgrade naar remblokken met een hogere temperatuurtolerantie.

      ### Zorg voor het Koelsysteem

      De krachtige motor van de M4 genereert aanzienlijke warmte, wat onderhoud aan het koelsysteem cruciaal maakt:

      1. **Koelvloeistof Spoelen**: Elke 3 jaar of 60.000 kilometer
      2. **Radiator Inspectie**: Controleer regelmatig op vuil of schade
      3. **Waterpomp**: Preventieve vervanging bij 100.000 kilometer

      ### Bandenzorg en -rotatie

      De gestaffelde bandenconfiguratie van de M4 vereist speciale aandacht:

      1. **Drukcontroles**: Maandelijks en voor elke sportieve rit
      2. **Rotatie**: Alleen voor-naar-voor en achter-naar-achter (vanwege verschillende maten)
      3. **Uitlijning**: Controleer jaarlijks of na het raken van significante kuilen

      ### DIY Onderhoudstips

      Hoewel sommige onderhoudstaken gespecialiseerd gereedschap vereisen, kunnen veel taken thuis worden uitgevoerd:

      1. **Olieverversingen**: Met het juiste gereedschap en toegang tot een hefbrug is dit eenvoudig
      2. **Vervanging Remblokken**: Redelijk moeilijk maar haalbaar met goede begeleiding
      3. **Vervanging Filters**: Lucht- en interieurfilters zijn eenvoudige DIY-taken

      ### Technologie en Software-updates

      Vergeet de elektronische systemen van je M4 niet:

      1. **Software-updates**: Controleer op iDrive-updates bij onderhoudsbeurten
      2. **Batterijregistratie**: Bij het vervangen van de accu moet deze worden geregistreerd in het voertuigsysteem
      3. **Coderingsopties**: Overweeg professionele codering om verborgen functies te ontgrendelen

      ### Winteropslag Overwegingen

      Als je je M4 voor langere tijd stalt:

      1. **Brandstofstabilisator**: Voeg toe aan een volle tank voor opslag
      2. **Druppellader**: Sluit aan om de accuconditie te behouden
      3. **Bandenspanning**: Licht overtanken om platte plekken te voorkomen
      4. **Reinigen en Waxen**: Bescherm de lak voordat je de auto afdekt

      ### Conclusie

      Goed onderhoud is de sleutel om jarenlang van de prestaties van je BMW M4 te genieten. Hoewel sommige onderhoudskosten hoog lijken, zijn ze een kleine prijs vergeleken met de kosten van grote reparaties als gevolg van verwaarlozing.

      Onthoud dat preventief onderhoud altijd goedkoper is dan reactieve reparaties. Behandel je M4 goed, en hij zal je belonen met de opwindende rijervaring waarvoor BMW's M-divisie bekend staat.

      ---

      Heb je specifieke onderhoudsvragen over je BMW M4? Plaats ze hieronder in de reacties!
    `,
  },
  {
    id: "bmw-m4-review",
    title: "BMW M4 Competition: De Ultieme Rijmachine",
    date: "17 april 2025",
    author: "James Wilson",
    description:
      "Onze uitgebreide review van de BMW M4 Competition - van zijn controversiële design tot zijn adembenemende prestaties.",
    featuredImage: "/images/bmw-red.jpeg",
    tags: ["Review", "Prestaties", "BMW"],
    content: `
      ## BMW M4 Competition: De Ultieme Rijmachine

      De BMW M4 Competition vertegenwoordigt het toppunt van BMW's prestatie-engineering in een middenklasse coupé. Met zijn agressieve styling, circuitgerichte chassis en verbluffende prestaties is het een auto die zowel aandacht als respect afdwingt.

      ### Gedurfd Design Statement

      Het design van de M4 is misschien wel het meest besproken aspect van deze generatie. De oversized nierengrille maakt een gedurfd statement dat onmogelijk te negeren is. Hoewel controversieel, geeft het de M4 een onmiskenbare aanwezigheid op de weg. In onze rode testauto creëert het contrast tussen het heldere lakwerk en de zwarte grille-elementen een bijzonder opvallend uiterlijk.

      Naast de grille heeft de M4 Competition agressief verbrede wielkasten, een koolstofvezel dak, vier uitlaatpijpen en talrijke aerodynamische elementen die allemaal bijdragen aan zijn doelgerichte uitstraling. Dit is een auto die er zelfs stilstaand snel uitziet.

      ### Hart van het Beest

      Onder de motorkap ligt BMW's S58 twin-turbo 3,0-liter zes-in-lijn motor, die in Competition-specificatie een indrukwekkende 503 pk en 650 Nm koppel produceert. Deze krachtbron is een technologisch wonder, dat zijn aanzienlijke vermogen levert met opmerkelijke lineariteit en minimale turbovertraging.

      De motor is gekoppeld aan een achttraps automatische transmissie die bliksemsnelle schakelingen levert, of je nu rustig cruist in de comfortmodus of een circuit aanvalt in sport plus. Hoewel puristen het gebrek aan een handgeschakelde optie in het Competition-model betreuren, zijn de prestaties van deze automaat zo indrukwekkend dat het moeilijk is om BMW's beslissing te bekritiseren.

      ⚠️ Waarschuwing: De prestatiemogelijkheden van de M4 Competition overtreffen ruimschoots de wettelijke snelheidslimieten. Rijd altijd verantwoord en overweeg trackdagen om het volledige potentieel van de auto veilig te verkennen.

      ### Prestatiecijfers

      De cijfers spreken voor zich:
      - 0-100 km/u: 3,4 seconden (met xDrive vierwielaandrijving)
      - Topsnelheid: 250 km/u (begrensd), 290 km/u met M Driver's Package
      - Kwart mijl: 11,4 seconden

      ### Precisie Handling

      Waar de M4 Competition echt schittert is in zijn rijdynamiek. Het chassis biedt uitzonderlijke balans en stabiliteit, met de adaptieve ophanging die een breed scala aan mogelijkheden biedt, van comfortabel dagelijks rijden tot messcherpe circuitprestaties.

      De besturing is precies en goed gewogen, met goede feedback over wat de voorwielen doen. De optionele keramische remmen op onze testauto boden onverminderd remvermogen, zelfs na meerdere harde ronden op het circuit.

      De M4 Competition is beschikbaar in zowel achterwielaandrijving als xDrive vierwielaandrijving configuraties. Onze xDrive testauto bood enorme grip en all-weather capaciteiten terwijl hij nog steeds een achterwielbias karakter behield dat gecontroleerde slides mogelijk maakt wanneer gewenst.

      ### Luxe Prestatie Interieur

      Binnenin combineert de M4 Competition met succes luxe met motorsportinvloeden. De met koolstofvezel verstevigde M Sport-stoelen hebben agressieve zijsteunen maar blijven comfortabel voor langere ritten. Het digitale dashboard is helder en configureerbaar, terwijl het nieuwste iDrive-systeem een van de beste infotainmentsystemen in de branche blijft.

      De M-specifieke bedieningselementen verdienen speciale vermelding:
      - M1- en M2-knoppen op het stuurwiel voor aangepaste rijmodi
      - Instelbaar remgevoel
      - Configureerbare M Drive Professional met drift-analyzer

      Ondanks zijn prestatiefocus biedt de M4 redelijke praktische bruikbaarheid met bruikbare achterstoelen en een fatsoenlijk formaat kofferbak, waardoor hij veelzijdiger is dan veel van zijn concurrenten.

      ### Dagelijkse Bruikbaarheid

      Een van de grootste sterke punten van de M4 Competition is zijn vermogen om zowel als circuitwapen als comfortabele dagelijkse auto te dienen. In de Comfort-modus wordt de adaptieve ophanging aanzienlijk zachter, wordt de uitlaat stiller en schakelt de transmissie soepel. De cabine is goed geïsoleerd tegen weg- en windgeluid, en het zicht is over het algemeen goed voor een prestatie-coupé.

      Het brandstofverbruik is respectabel wanneer rustig gereden wordt, hoewel enthousiast rijden het verbruik drastisch doet stijgen.

      ### Eigendomsoverwegingen

      De M4 Competition is een high-performance machine die goede zorg vereist:

      1. Regelmatig onderhoud volgens BMW's schema
      2. Hoogwaardige synthetische olie die voldoet aan BMW's specificaties
      3. Zorgvuldige aandacht voor bandenslijtage, vooral bij gebruik op het circuit
      4. Overweging van verlengde garantieopties vanwege de complexiteit van moderne prestatieauto's

      ### Conclusie: Een Waardige M-auto

      De BMW M4 Competition draagt met succes de fakkel voor BMW's M-divisie. Hij levert opwindende prestaties, precieze handling en dagelijkse bruikbaarheid in een pakket dat, hoewel visueel controversieel, onmiskenbaar indrukwekkend is vanuit technisch oogpunt.

      Is hij de meerprijs waard boven de standaard M4 of zelfs de M440i? Voor degenen die de extra prestaties echt waarderen en van plan zijn deze te benutten op het circuit, absoluut. Voor degenen die voornamelijk geïnteresseerd zijn in straatrijden, vertegenwoordigen de standaard M4 of zelfs de M440i mogelijk een betere waarde.

      De M4 Competition krijgt stevige concurrentie van de Audi RS5, Mercedes-AMG C63 en Porsche 911, maar hij creëert zijn eigen niche met zijn unieke combinatie van circuitcapaciteiten en alledaagse bruikbaarheid.

      ---

      Heb jij in de nieuwe M4 Competition gereden? Wat zijn jouw gedachten over het design en de prestaties? Laat het ons weten in de reacties hieronder!
    `,
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Find the requested blog
  let blog = blogs.find((blog) => blog.id === params.slug)

  // If the blog doesn't exist or isn't fully implemented yet, redirect to the M3 review
  if (!blog) {
    // For development purposes, we'll redirect to the one blog we know exists
    const existingBlogId = "bmw-m3-g80-review"
    blog = blogs.find((blog) => blog.id === existingBlogId)!

    // Import at the top of the file: import { redirect } from 'next/navigation'
    redirect(`/blogs/${existingBlogId}`)
  }

  // Function to convert markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n")
    const result: JSX.Element[] = []

    let i = 0
    while (i < lines.length) {
      const line = lines[i].trim()

      // Headers
      if (line.startsWith("## ")) {
        result.push(
          <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
            {line.substring(3)}
          </h2>,
        )
      } else if (line.startsWith("### ")) {
        result.push(
          <h3 key={i} className="text-xl font-bold mt-6 mb-3">
            {line.substring(4)}
          </h3>,
        )
      }
      // Warning callout
      else if (line.startsWith("⚠️ Waarschuwing:")) {
        result.push(
          <div key={i} className="bg-amber-950/30 border-l-4 border-amber-500 p-4 my-4">
            <p className="text-amber-500 font-medium">{line}</p>
          </div>,
        )
      }
      // Lists
      else if (line.startsWith("- ")) {
        const listItems = []
        while (i < lines.length && lines[i].trim().startsWith("- ")) {
          listItems.push(<li key={`list-${i}`}>{lines[i].trim().substring(2)}</li>)
          i++
        }
        result.push(
          <ul key={`ul-${i}`} className="list-disc pl-6 my-4 space-y-2">
            {listItems}
          </ul>,
        )
        continue
      }
      // Numbered lists
      else if (line.match(/^\d+\. /)) {
        const listItems = []
        while (i < lines.length && lines[i].trim().match(/^\d+\. /)) {
          listItems.push(<li key={`nlist-${i}`}>{lines[i].trim().replace(/^\d+\. /, "")}</li>)
          i++
        }
        result.push(
          <ol key={`ol-${i}`} className="list-decimal pl-6 my-4 space-y-2">
            {listItems}
          </ol>,
        )
        continue
      }
      // Horizontal rule
      else if (line === "---") {
        result.push(<hr key={i} className="my-8 border-teal-600/20" />)
      }
      // Regular paragraph
      else if (line !== "") {
        result.push(
          <p key={i} className="my-4 text-gray-300">
            {line}
          </p>,
        )
      }

      i++
    }

    return result
  }

  // Related blogs (excluding current one)
  const relatedBlogs = blogs
    .filter((b) => b.id !== blog.id && b.tags.some((tag) => blog.tags.includes(tag)))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-16 pb-8">
        <div className="absolute inset-0 z-0 h-[50vh]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
          <Image
            src={blog.featuredImage || "/placeholder.svg"}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 pt-[20vh]">
          <Button asChild variant="ghost" className="mb-6 text-teal-500 hover:text-teal-400 hover:bg-teal-500/10 -ml-4">
            <Link href="/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar Blogs
            </Link>
          </Button>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <Badge key={tag} className="bg-teal-600/20 text-teal-500">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 max-w-4xl">
            {blog.title}
          </h1>
          <div className="flex items-center text-sm text-gray-400 gap-6 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {blog.date}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {blog.author}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose prose-invert prose-teal max-w-none">{renderContent(blog.content)}</div>

              {/* Social Sharing */}
              <div className="mt-12 pt-6 border-t border-teal-600/20">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-teal-600/20">
                      <ThumbsUp className="mr-2 h-4 w-4" />
                      Like
                    </Button>
                    <Button variant="outline" size="sm" className="border-teal-600/20">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Reageer
                    </Button>
                    <Button variant="outline" size="sm" className="border-teal-600/20">
                      <Bookmark className="mr-2 h-4 w-4" />
                      Opslaan
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Delen:</span>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-500">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-8 p-6 bg-gray-900/50 border border-teal-600/20 rounded-lg">
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <div className="w-16 h-16 rounded-full bg-teal-600/20 flex items-center justify-center">
                    <User className="h-8 w-8 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{blog.author}</h3>
                    <p className="text-gray-400 mb-4">
                      Autojournalist met meer dan tien jaar ervaring in het behandelen van prestatieauto's en
                      motorsport.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-600/20 text-teal-500 hover:bg-teal-500/10"
                    >
                      Bekijk Alle Artikelen
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Reacties</h3>
                <div className="space-y-6">
                  <div className="p-4 border border-teal-600/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-teal-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Jan de Vries</h4>
                        <p className="text-xs text-gray-400">20 april 2025</p>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      Geweldig artikel! Ik overweeg al een tijdje de M3, en dit helpt echt bij mijn beslissing. De
                      groene kleur is prachtig.
                    </p>
                  </div>
                  <div className="p-4 border border-teal-600/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-teal-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Marieke Jansen</h4>
                        <p className="text-xs text-gray-400">19 april 2025</p>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      Ik heb mijn M3 Competition nu ongeveer 6 maanden en kan alles in deze review bevestigen. De
                      prestaties zijn verbazingwekkend, maar ik ben nog steeds aan het wennen aan de grille!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Laat een Reactie Achter</h4>
                <textarea
                  className="w-full rounded-md border border-teal-600/20 bg-black/50 px-4 py-2 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none min-h-[100px]"
                  placeholder="Deel je gedachten..."
                ></textarea>
                <Button className="mt-3 bg-teal-600 hover:bg-teal-700">Plaats Reactie</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Articles */}
              <div className="sticky top-20">
                <h3 className="text-xl font-bold mb-6">Gerelateerde Artikelen</h3>
                <div className="space-y-6">
                  {relatedBlogs.map((relatedBlog) => (
                    <Card key={relatedBlog.id} className="bg-black border border-teal-600/20 overflow-hidden">
                      <div className="relative h-40">
                        <Image
                          src={relatedBlog.featuredImage || "/placeholder.svg"}
                          alt={relatedBlog.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-2 line-clamp-2">
                          <Link href={`/blogs/${relatedBlog.id}`} className="hover:text-teal-500 transition-colors">
                            {relatedBlog.title}
                          </Link>
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {relatedBlog.date}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8 p-6 bg-gray-900/50 border border-teal-600/20 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Abonneer op Onze Nieuwsbrief</h3>
                  <p className="text-gray-400 text-sm mb-4">Ontvang de nieuwste auto-inhoud direct in je inbox.</p>
                  <input
                    type="email"
                    placeholder="Je e-mailadres"
                    className="w-full rounded-md border border-teal-600/20 bg-black/50 px-4 py-2 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none mb-3"
                  />
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Abonneren</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
