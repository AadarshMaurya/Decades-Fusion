import { Leaf, Sparkles, DollarSign } from "lucide-react"

export default function SustainabilitySection() {
  const benefits = [
    {
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: "Eco-friendly",
      description: "Every thrifted item saves 2.5kg of carbon emissions and 3,040 liters of water.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-amber-500" />,
      title: "Unique Finds",
      description: "One-of-a-kind pieces that stand out from mass-produced fashion.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-blue-500" />,
      title: "Affordable",
      description: "Quality vintage and thrift pieces at a fraction of retail prices.",
    },
  ]

  return (
    <section className="py-16 bg-[#f8f8f8]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading text-3xl md:text-4xl mb-4">Why Thrift?</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Thrifting isn't just shopping—it's a conscious choice for the planet and your style. Each pre-loved piece
            tells a story while reducing fashion's environmental footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="playfair text-lg italic mb-6">
            "Every time you buy secondhand, you're giving that item a second life and reducing demand for new
            production."
          </p>
          <a href="/sustainability" className="btn-secondary">
            Learn More About Our Impact
          </a>
        </div>
      </div>
    </section>
  )
}
