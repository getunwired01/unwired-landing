import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Wireless EV Charging: What to Expect in 2024",
      excerpt:
        "Explore the latest developments in wireless charging technology and how they're set to transform the EV landscape.",
      date: "December 15, 2023",
      readTime: "5 min read",
      category: "Technology",
      slug: "future-wireless-ev-charging-2024",
    },
    {
      title: "Installation Guide: Preparing Your Home for Wireless EV Charging",
      excerpt:
        "A comprehensive guide to getting your home ready for wireless charging installation, from electrical requirements to optimal placement.",
      date: "December 10, 2023",
      readTime: "7 min read",
      category: "Installation",
      slug: "home-installation-guide",
    },
    {
      title: "Wireless vs. Wired: Comparing EV Charging Methods",
      excerpt:
        "An in-depth comparison of wireless and traditional wired charging, covering efficiency, convenience, and cost considerations.",
      date: "December 5, 2023",
      readTime: "6 min read",
      category: "Comparison",
      slug: "wireless-vs-wired-charging",
    },
    {
      title: "The Environmental Impact of Wireless EV Charging",
      excerpt:
        "How wireless charging technology contributes to a more sustainable future and reduces the carbon footprint of electric vehicles.",
      date: "November 28, 2023",
      readTime: "4 min read",
      category: "Environment",
      slug: "environmental-impact-wireless-charging",
    },
    {
      title: "Commercial Fleet Solutions: Wireless Charging for Businesses",
      excerpt:
        "Discover how businesses are implementing wireless charging solutions to improve fleet efficiency and reduce operational costs.",
      date: "November 20, 2023",
      readTime: "8 min read",
      category: "Business",
      slug: "commercial-fleet-wireless-solutions",
    },
  ]

  return (
    <div className="min-h-screen cosmic-bg">
      <div className="container py-12">
        <div className="mb-12">
          {/* <Button variant="ghost" asChild className="mb-4"> */}
            <Link href="/" className="flex items-center gap-2 hover:cursor-pointer">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          {/* </Button> */}
          <h1 className="text-4xl font-bold gradient-text mb-4">UnWired Blog</h1>
          <p className="text-zinc-400 text-lg">
            Stay updated with the latest in wireless EV charging technology and industry insights.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl">
          {posts.map((post, index) => (
            <article
              key={index}
              className="feature-card rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-zinc-400 mb-6 leading-relaxed">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 feature-card rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-zinc-400 mb-6">
            Subscribe to our newsletter for the latest updates on wireless EV charging technology.
          </p>
          <Button className="gradient-button">Subscribe to Newsletter</Button>
        </div>
      </div>
    </div>
  )
}
