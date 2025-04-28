import Image from "next/image"
import Link from "next/link"

export default function FeaturedCollection() {
  const featuredItems = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      price: 45.99,
      image: "/images/productImages/dress1.jpeg",
    },
    {
      id: 2,
      name: "Retro Floral Dress",
      price: 38.5,
      image: "/images/productImages/dress2.jpeg",
    },
    {
      id: 3,
      name: "Classic Leather Belt",
      price: 24.99,
      image: "/images/productImages/dress3.jpeg",
    },
    {
      id: 4,
      name: "Wool Blend Sweater",
      price: 42.0,
      image: "/images/productImages/dress4.jpeg",
    },
  ]

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="section-heading text-3xl md:text-4xl text-center mb-12">Featured Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-700 mb-3">${item.price.toFixed(2)}</p>
              <Link href={`/products/${item.id}`} className="btn-secondary text-sm py-2">
                View Product
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/collections/featured" className="btn-primary">
            View All Featured Items
          </Link>
        </div>
      </div>
    </section>
  )
}
