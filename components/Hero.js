import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Affordable Vintage & Thrift Clothing Online – Sustainable Fashion Finds
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">
            Join the green revolution with handpicked thrift pieces that save the planet and your style. One outfit at a
            time.
          </p>
          <Link href="/shop" className="btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}
