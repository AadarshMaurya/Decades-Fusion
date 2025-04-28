import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Eye } from "lucide-react"

export default function BestSellers() {
  const products = [
    {
      id: 1,
      name: "Vintage Levi's Denim Jacket",
      price: 59.99,
      image: "/images/productImages/finds1.jpeg",
    },
    {
      id: 2,
      name: "90s Graphic Tee",
      price: 28.5,
      image: "/images/productImages/finds2.jpeg",
    },
    {
      id: 3,
      name: "Retro High-Waist Jeans",
      price: 45.0,
      image: "/images/productImages/finds3.jpeg",
    },
    {
      id: 4,
      name: "Oversized Flannel Shirt",
      price: 32.99,
      image: "/images/productImages/finds4.jpeg",
    },
    {
      id: 5,
      name: "Vintage Silk Scarf",
      price: 18.5,
      image: "/images/productImages/finds5.jpeg",
    },
    {
      id: 6,
      name: "Classic Leather Boots",
      price: 75.0,
      image: "/images/productImages/finds6.jpeg",
    },
  ]

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="section-heading text-3xl md:text-4xl text-center mb-12">Fresh Finds</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors">
                    <ShoppingBag size={20} />
                  </button>
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Eye size={20} />
                  </Link>
                </div>
              </div>

              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-700 mb-3">${product.price.toFixed(2)}</p>

              <div className="flex gap-2">
                <button className="flex-1 btn-secondary text-sm py-2">Add to Cart</button>
                <Link href={`/products/${product.id}`} className="flex-1 btn-primary text-sm py-2">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop/new-arrivals" className="btn-primary">
            View All New Arrivals
          </Link>
        </div>
      </div>
    </section>
  )
}
