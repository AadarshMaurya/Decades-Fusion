import Image from "next/image"
import Link from "next/link"
import { Instagram, PinIcon as Pinterest, Youtube, Mail, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="mb-4 relative h-12 w-48">
              <Image src="/images/logo.png" alt="Decades Fusion" fill style={{ objectFit: "contain" }} />
            </div>
            <p className="text-gray-600 mb-4">
              Decades Fusion is on a mission to make sustainable fashion accessible to all. We curate high-quality
              vintage and thrift pieces that are kind to both your wallet and the planet.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-600 hover:text-black" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://pinterest.com" className="text-gray-600 hover:text-black" aria-label="Pinterest">
                <Pinterest size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-600 hover:text-black" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-black">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-600 hover:text-black">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-black">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-black">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-black">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-black">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-black">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-600 hover:text-black">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center space-x-2 text-gray-600">
                <Mail size={18} />
                <a href="mailto:hello@decadesfusion.com" className="hover:text-black">
                  hello@decadesfusion.com
                </a>
              </p>
              <p className="flex items-center space-x-2 text-gray-600">
                <MessageSquare size={18} />
                <a href="https://wa.me/1234567890" className="hover:text-black">
                  WhatsApp Support
                </a>
              </p>
            </div>
            <div className="mt-6">
              <h4 className="font-bold mb-2">Join Our Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-black flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Decades Fusion. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500">Made with ♥ for sustainable fashion</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
