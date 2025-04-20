// Sample blog data structure
export type Blog = {
  id: string
  title: string
  date: string
  author: string
  description: string
  featuredImage: string
  gallery?: string[]
  tags: string[]
  content: string
}

// This would typically come from an API, but for this example, we're defining it here
export const sampleBlog: Blog = {
  id: "bmw-m3-g80-review",
  title: "The BMW M3 G80: A Green Monster with Racing DNA",
  date: "April 19, 2025",
  author: "Michael Turner",
  description:
    "An in-depth review of the latest BMW M3 G80 in its striking green color, exploring its performance, technology, and driving dynamics.",
  featuredImage: "/images/bmw-green.jpeg",
  gallery: ["/images/bmw-green.jpeg", "/images/bmw-blue.jpeg", "/images/bmw-red.jpeg"],
  tags: ["Review", "Performance", "BMW"],
  content: `
    ## The BMW M3 G80: A Green Monster with Racing DNA

    The BMW M3 has always been the benchmark for high-performance sports sedans, and the latest G80 generation is no exception. Wrapped in a striking Isle of Man Green paint job, this particular M3 Competition demands attention wherever it goes.

    ### Design: Controversial Yet Purposeful

    Let's address the elephant in the room - the massive kidney grille. While it continues to divide opinion, in person, especially in this green color scheme, it gives the M3 an aggressive, predatory look that grows on you. The flared wheel arches, quad exhaust tips, and carbon fiber roof complete the race-car-for-the-road aesthetic.

    The Isle of Man Green paint deserves special mention - it shifts between deep emerald and a lighter hue depending on the lighting, giving the car a dynamic presence even when stationary.

    ### Performance: Raw Power Meets Precision

    Under the hood lies a 3.0-liter twin-turbocharged inline-six producing a massive 503 horsepower and 479 lb-ft of torque in Competition spec. This powerplant is a masterpiece, delivering linear power throughout the rev range with minimal turbo lag.

    ⚠️ Warning: The M3 Competition's performance capabilities far exceed what's legal on public roads. Always respect speed limits and consider track days to explore its full potential safely.

    The eight-speed automatic transmission deserves praise for its lightning-quick shifts and intelligent programming. While purists might miss the manual option (still available in the standard M3), the auto box in the Competition model is so good that it's hard to complain.

    Some key performance figures:
    - 0-60 mph: 3.8 seconds
    - Top speed: 155 mph (limited), 180 mph with M Driver's Package
    - Quarter mile: 11.6 seconds

    ### Handling: Track-Ready Precision

    The M3 Competition shines brightest when pushed hard through corners. The chassis balance is exceptional, with the adaptive suspension offering everything from comfortable daily driving to track-focused stiffness.

    The steering is precise and well-weighted, though some might find it lacks the raw feedback of older M3 generations. Still, it communicates enough information to place the car exactly where you want it.

    ### Interior: Where Luxury Meets Performance

    Inside, the M3 Competition blends luxury with motorsport influence. The carbon fiber-backed seats are aggressively bolstered yet remain comfortable for longer journeys. The digital dashboard is clear and configurable, while the iDrive system remains one of the best infotainment setups in the business.

    The M-specific controls deserve special mention:
    - M1 and M2 buttons on the steering wheel for custom drive modes
    - Adjustable brake pedal feel
    - Configurable M Drive Professional with drift analyzer

    ### Everyday Usability

    Despite its track capabilities, the M3 remains a practical four-door sedan. Rear seat space is generous, the trunk is sizeable, and in Comfort mode, the ride is compliant enough for daily use. Fuel economy is respectable when driven conservatively, though enthusiastic driving will see consumption rise dramatically.

    ### Maintenance Considerations

    Owning an M3 Competition requires commitment to proper maintenance:

    1. Regular oil changes using BMW-approved synthetic oil
    2. Brake inspections after track use
    3. Tire rotations every 5,000-7,000 miles
    4. Carbon buildup cleaning on intake valves every 30,000 miles

    ### Conclusion: A Worthy M3 Successor

    The G80 BMW M3 Competition, especially in this striking green color, represents the pinnacle of sports sedan engineering. It successfully balances everyday usability with supercar-rivaling performance, continuing the M3's legacy as the benchmark in its class.

    While the styling may be controversial and the price tag substantial, the driving experience it delivers is unmatched. For those seeking the ultimate driving machine that can handle both the daily commute and weekend track days, the M3 Competition delivers in spades.

    ---

    Have you driven the new M3? What are your thoughts on the design and performance? Let us know in the comments below!
  `,
}
