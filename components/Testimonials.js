import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah K.",
      quote:
        "I've been shopping with Decades Fusion for over a year now. The quality of their thrifted pieces is amazing, and I love knowing my purchases are sustainable!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael T.",
      quote:
        "Found the coolest vintage jacket that I get compliments on every time I wear it. Great prices and fast shipping too.",
      rating: 5,
    },
    {
      id: 3,
      name: "Aisha J.",
      quote:
        "The curation is what sets Decades Fusion apart. They have an eye for unique pieces that you won't find anywhere else.",
      rating: 4,
    },
    {
      id: 4,
      name: "David L.",
      quote: "Excellent customer service and the packaging is eco-friendly too. My new go-to for sustainable fashion.",
      rating: 5,
    },
  ]

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} size={16} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
      ))
  }

  return (
    <section className="py-16 bg-[#f0f0f0]">
      <div className="container-custom">
        <h2 className="section-heading text-3xl md:text-4xl text-center mb-12">What Our Tribe Is Saying...</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 shadow-sm">
              <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
              <p className="playfair italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold">— {testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/reviews" className="btn-secondary">
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
