import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, PenToolIcon as Tool, Car, Wrench, TrendingUp } from "lucide-react"
import FeaturedBlogs from "@/components/featured-blogs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/green-bmw-m3.webp"
            alt="Groene BMW M3"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-white">RIJDEN MET</span>
            <span className="block text-teal-500">PASSIE</span>
          </h1>
          <p className="mt-6 max-w-lg text-xl text-gray-300">
            Jouw ultieme bestemming voor alles op autogebied - van expert onderhoudstips tot de nieuwste releases.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/blogs">Blogs Verkennen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500/10">
              <Link href="/new-releases">Nieuwste Releases</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Verken</span> Categorieën
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-black border border-teal-600/20 hover:border-teal-500 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Onderhoud</h3>
                <p className="text-gray-400 mb-4">Houd je auto in topconditie met onze expert onderhoudsgidsen.</p>
                <Link href="/maintenance" className="text-teal-500 hover:text-teal-400 inline-flex items-center">
                  Meer Informatie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-black border border-teal-600/20 hover:border-teal-500 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-4">
                  <Tool className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reparaties</h3>
                <p className="text-gray-400 mb-4">
                  DIY-oplossingen en professioneel advies voor veelvoorkomende autoproblemen.
                </p>
                <Link href="/repairs" className="text-teal-500 hover:text-teal-400 inline-flex items-center">
                  Meer Informatie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-black border border-teal-600/20 hover:border-teal-500 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nieuwste Releases</h3>
                <p className="text-gray-400 mb-4">Blijf op de hoogte van de nieuwste modellen en autoinnovaties.</p>
                <Link href="/new-releases" className="text-teal-500 hover:text-teal-400 inline-flex items-center">
                  Meer Informatie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-black border border-teal-600/20 hover:border-teal-500 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Prestaties</h3>
                <p className="text-gray-400 mb-4">
                  Ontgrendel het volledige potentieel van je voertuig met prestatie-upgrades.
                </p>
                <Link href="/performance" className="text-teal-500 hover:text-teal-400 inline-flex items-center">
                  Meer Informatie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Uitgelichte</span> Auto's
          </h2>
          <Tabs defaultValue="sports" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-black/50 border border-teal-600/20">
                <TabsTrigger value="sports" className="data-[state=active]:bg-teal-600">
                  Sportauto's
                </TabsTrigger>
                <TabsTrigger value="luxury" className="data-[state=active]:bg-teal-600">
                  Luxe
                </TabsTrigger>
                <TabsTrigger value="electric" className="data-[state=active]:bg-teal-600">
                  Elektrisch
                </TabsTrigger>
                <TabsTrigger value="suv" className="data-[state=active]:bg-teal-600">
                  SUV
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="sports" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/images/red-bmw.webp" alt="Rode BMW Sportwagen" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW M4 Competition</h3>
                    <p className="text-gray-400 mb-4">
                      Agressieve styling ontmoet pure kracht in dit circuit-klare beest.
                    </p>
                    <Link
                      href="/blogs/bmw-m4-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/images/blue-bmw-m8.webp" alt="Blauwe BMW M8" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW M8 Coupe</h3>
                    <p className="text-gray-400 mb-4">Luxe ontmoet prestatie in deze verbluffende grand tourer.</p>
                    <Link
                      href="/blogs/bmw-m8-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/images/blue-bmw-m4.webp" alt="Blauwe BMW M4" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW M4 CSL</h3>
                    <p className="text-gray-400 mb-4">De ultieme expressie van BMW's race-erfgoed.</p>
                    <Link
                      href="/blogs/bmw-m4-csl-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="luxury" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="/images/white-bmw-gran-coupe.webp"
                      alt="Witte BMW Gran Coupe"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW M8 Gran Coupe</h3>
                    <p className="text-gray-400 mb-4">Vier-deurs praktisch gemak met supercar prestaties.</p>
                    <Link
                      href="/blogs/bmw-m8-gran-coupe-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/images/white-bmw-profile.webp" alt="Witte BMW Profiel" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW 8 Serie</h3>
                    <p className="text-gray-400 mb-4">Elegantie en verfijning in een strak pakket.</p>
                    <Link
                      href="/blogs/bmw-8-series-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/images/black-bmw.webp" alt="Zwarte BMW" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW 7 Serie</h3>
                    <p className="text-gray-400 mb-4">Het toppunt van BMW's luxe sedanlijn.</p>
                    <Link
                      href="/blogs/bmw-7-series-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="electric" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/sleek-electric-bmw.png" alt="BMW i4" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW i4</h3>
                    <p className="text-gray-400 mb-4">
                      Elektrische prestaties die kunnen wedijveren met zijn benzine-aangedreven tegenhangers.
                    </p>
                    <Link
                      href="/blogs/bmw-i4-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/sleek-electric-drive.png" alt="BMW iX" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW iX</h3>
                    <p className="text-gray-400 mb-4">
                      BMW's vlaggenschip elektrische SUV met geavanceerde technologie.
                    </p>
                    <Link
                      href="/blogs/bmw-ix-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/sleek-electric-luxury.png" alt="BMW i7" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW i7</h3>
                    <p className="text-gray-400 mb-4">
                      Luxe en duurzaamheid gecombineerd in een elektrisch vlaggenschip.
                    </p>
                    <Link
                      href="/blogs/bmw-i7-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="suv" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/powerful-bmw-x5m.png" alt="BMW X5 M" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW X5 M</h3>
                    <p className="text-gray-400 mb-4">De perfecte combinatie van praktisch gemak en prestaties.</p>
                    <Link
                      href="/blogs/bmw-x5m-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/powerful-sloped-coupe-suv.png" alt="BMW X6 M" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW X6 M</h3>
                    <p className="text-gray-400 mb-4">
                      Coupe styling ontmoet SUV-functionaliteit in deze unieke crossover.
                    </p>
                    <Link
                      href="/blogs/bmw-x6m-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-teal-600/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/opulent-x7-drive.png" alt="BMW X7" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BMW X7</h3>
                    <p className="text-gray-400 mb-4">BMW's grootste en meest luxueuze SUV met drie zitrijen.</p>
                    <Link
                      href="/blogs/bmw-x7-review"
                      className="text-teal-500 hover:text-teal-400 inline-flex items-center"
                    >
                      Review Lezen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="text-teal-500">Nieuwste</span> Blogs
          </h2>
          <FeaturedBlogs />
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/blogs">Alle Blogs Bekijken</Link>
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
                  Blijf op de hoogte van het laatste autonieuws, onderhoudstips, en exclusieve content direct in je
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
