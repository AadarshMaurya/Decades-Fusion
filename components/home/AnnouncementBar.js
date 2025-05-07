import Link from "next/link"

export default function AnnouncementBar() {
  return (
    <div className="bg-black text-white py-2 text-center">
      <div className="container-custom flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <p className="text-sm">New: Summer Drop Now Live! Shop our handpicked eco-fits before they vanish.</p>
        <Link
          href="/collections/summer"
          className="text-xs border border-white px-3 py-1 hover:bg-white hover:text-black transition duration-300"
        >
          Explore Collection
        </Link>
      </div>
    </div>
  )
}
