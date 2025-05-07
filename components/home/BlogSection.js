import Image from "next/image"
import Link from "next/link"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Reasons to Switch to Thrift",
      excerpt:
        "Discover why thrifting is not just a trend but a sustainable lifestyle choice that benefits both you and the planet.",
      image: "/images/productImages/lifestyle.jpeg",
      date: "June 15, 2023",
    },
    {
      id: 2,
      title: "How We Package Sustainably",
      excerpt:
        "Take a behind-the-scenes look at our eco-friendly packaging process and how we're reducing waste one package at a time.",
      image: "/images/productImages/packaging.jpeg",
      date: "May 28, 2023",
    },
    {
      id: 3,
      title: "Behind the Scenes of Our Curation Process",
      excerpt: "Learn how we source, clean, and select each unique piece that makes it into our collection.",
      image: "/images/productImages/bts.jpeg",
      date: "April 10, 2023",
    },
  ]

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="section-heading text-3xl md:text-4xl text-center mb-12">Stories from the Green Side</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-video mb-4 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold mb-2 group-hover:underline">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="playfair italic text-black hover:underline">
                Read more →
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-primary">
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  )
}
