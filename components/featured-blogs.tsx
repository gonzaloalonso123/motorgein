import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

// Sample blog data
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
  },
  {
    id: "bmw-m4-maintenance-guide",
    title: "Essentiële Onderhoudstips voor je BMW M4",
    date: "15 april 2025",
    author: "Sarah Johnson",
    description: "Houd je BMW M4 in topconditie met deze expert onderhoudstips en -schema's.",
    featuredImage: "/images/bmw-blue.jpeg",
    tags: ["Onderhoud", "DIY", "BMW"],
  },
  {
    id: "bmw-m8-vs-competitors",
    title: "BMW M8 Competition vs Rivalen: De Ultieme Confrontatie",
    date: "10 april 2025",
    author: "James Wilson",
    description:
      "Hoe verhoudt de BMW M8 Competition zich tot zijn rivalen? We testen hem tegen het beste van Mercedes-AMG en Audi RS.",
    featuredImage: "/images/bmw-blue.jpeg",
    tags: ["Vergelijking", "Prestaties", "BMW"],
  },
]

export default function FeaturedBlogs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          className="bg-black border border-teal-600/20 hover:border-teal-500 transition-colors overflow-hidden"
        >
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
      ))}
    </div>
  )
}
