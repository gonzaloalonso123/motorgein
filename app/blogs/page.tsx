import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample blog data - expanded from featured-blogs.tsx
const blogs = [
  {
    id: "bmw-m3-g80-review",
    title: "De BMW M3 G80: Een Groen Monster met Race-DNA",
    date: "19 april 2025",
    author: "Michael Turner",
    description:
      "Een diepgaande review van de nieuwste BMW M3 G80 in zijn opvallende groene kleur, met een verkenning van zijn prestaties, technologie en rijdynamiek.",
    featuredImage: "/images/green-bmw-m3.webp",
    tags: ["Review", "Prestaties", "BMW"],
  },
  {
    id: "bmw-m4-maintenance-guide",
    title: "Essentiële Onderhoudstips voor je BMW M4",
    date: "15 april 2025",
    author: "Sarah Johnson",
    description: "Houd je BMW M4 in topconditie met deze expert onderhoudstips en -schema's.",
    featuredImage: "/images/blue-bmw-m4.webp",
    tags: ["Onderhoud", "DIY", "BMW"],
  },
  {
    id: "bmw-m8-vs-competitors",
    title: "BMW M8 Competition vs Rivalen: De Ultieme Confrontatie",
    date: "10 april 2025",
    author: "James Wilson",
    description:
      "Hoe verhoudt de BMW M8 Competition zich tot zijn rivalen? We testen hem tegen het beste van Mercedes-AMG en Audi RS.",
    featuredImage: "/images/blue-bmw-m8.webp",
    tags: ["Vergelijking", "Prestaties", "BMW"],
  },
  {
    id: "diy-oil-change-guide",
    title: "DIY Olieverversing: Stap-voor-Stap Gids voor BMW-Eigenaren",
    date: "5 april 2025",
    author: "David Miller",
    description:
      "Bespaar geld en leer een waardevolle vaardigheid met onze uitgebreide gids voor het thuis verversen van je BMW's olie.",
    featuredImage: "/bmw-oil-change.png",
    tags: ["Onderhoud", "DIY", "Tutorial"],
  },
  {
    id: "bmw-7-series-luxury-review",
    title: "BMW 7 Serie: Luxe Herdefiniëren voor het Moderne Tijdperk",
    date: "30 maart 2025",
    author: "Elizabeth Chen",
    description: "Onze gedetailleerde review van de nieuwe BMW 7 Serie en hoe deze het luxe sedan landschap verandert.",
    featuredImage: "/images/black-bmw.webp",
    tags: ["Review", "Luxe", "BMW"],
  },
  {
    id: "bmw-m-performance-parts",
    title: "Top 10 BMW M Performance Onderdelen die je Geld Waard zijn",
    date: "25 maart 2025",
    author: "Robert Taylor",
    description:
      "Verbeter de prestaties en esthetiek van je BMW met deze top M Performance onderdelen die echte waarde leveren.",
    featuredImage: "/bmw-m-performance-carbon.png",
    tags: ["Prestaties", "Upgrades", "Onderdelen"],
  },
  {
    id: "bmw-electric-future",
    title: "BMW's Elektrische Toekomst: Wat te Verwachten in de Komende 5 Jaar",
    date: "20 maart 2025",
    author: "Jessica Adams",
    description: "Een kijkje in BMW's ambitieuze elektrifcatieplannen en welke modellen we kunnen verwachten.",
    featuredImage: "/futuristic-bmw-ev.png",
    tags: ["Elektrisch", "Toekomst", "Technologie"],
  },
  {
    id: "bmw-x5-family-suv-review",
    title: "BMW X5: De Ultieme Gezins-SUV?",
    date: "15 maart 2025",
    author: "Thomas Wright",
    description: "We testen de BMW X5 als gezinsauto om te zien of hij zowel praktisch is als presteert.",
    featuredImage: "/sleek-x5-urban.png",
    tags: ["Review", "SUV", "Gezin"],
  },
  {
    id: "bmw-brake-upgrade-guide",
    title: "Je BMW's Remmen Upgraden: Wat Je Moet Weten",
    date: "10 maart 2025",
    author: "Mark Johnson",
    description: "Een uitgebreide gids voor het verbeteren van je BMW's remkracht met remupgrades.",
    featuredImage: "/high-performance-brake-system.png",
    tags: ["Prestaties", "Upgrades", "Veiligheid"],
  },
]

// Get all unique tags
const allTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags)))

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
          <Image src="/images/blue-bmw-m4.webp" alt="Blog Hero" fill className="object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              <span className="text-teal-500">motorGein</span> Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Duik in onze collectie van expertartikelen, gidsen en reviews over alles van onderhoudstips tot de
              nieuwste automodellen.
            </p>
            <div className="flex items-center gap-4 bg-black/50 border border-teal-600/20 rounded-lg p-2">
              <Search className="h-5 w-5 text-gray-400 ml-2" />
              <Input
                type="search"
                placeholder="Zoek artikelen..."
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="bg-teal-600 hover:bg-teal-700">Zoeken</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-black">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-black/50 border border-teal-600/20">
                <TabsTrigger value="all" className="data-[state=active]:bg-teal-600">
                  Alles
                </TabsTrigger>
                {allTags.map((tag) => (
                  <TabsTrigger key={tag} value={tag.toLowerCase()} className="data-[state=active]:bg-teal-600">
                    {tag}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </TabsContent>

            {allTags.map((tag) => (
              <TabsContent key={tag} value={tag.toLowerCase()} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogs
                    .filter((blog) => blog.tags.includes(tag))
                    .map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="border-teal-600/20 text-teal-500">
                1
              </Button>
              <Button variant="ghost" size="icon">
                2
              </Button>
              <Button variant="ghost" size="icon">
                3
              </Button>
              <span className="mx-2">...</span>
              <Button variant="ghost" size="icon">
                10
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function BlogCard({ blog }: { blog: (typeof blogs)[0] }) {
  return (
    <Card className="bg-black border border-teal-600/20 hover:border-teal-500 transition-colors overflow-hidden">
      <div className="relative h-48">
        <Image src={blog.featuredImage || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {blog.tags.map((tag) => (
            <Badge key={tag} className="bg-teal-600/20 text-teal-500 hover:bg-teal-600/30">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          <Link href={`/blogs/${blog.id}`} className="hover:text-teal-500 transition-colors">
            {blog.title}
          </Link>
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{blog.description}</p>
        <div className="flex items-center text-sm text-gray-500 gap-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {blog.date}
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {blog.author}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
