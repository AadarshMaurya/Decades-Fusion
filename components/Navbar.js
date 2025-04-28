"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showWomenDropdown, setShowWomenDropdown] = useState(false)
  const [showMenDropdown, setShowMenDropdown] = useState(false)

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative h-12 w-48">
            <Image src="/images/logo.png" alt="Decades Fusion" fill style={{ objectFit: "contain" }} priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="nav-link hover:underline">
            Home
          </Link>

          {/* For Women Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 hover:underline"
              onMouseEnter={() => setShowWomenDropdown(true)}
              onMouseLeave={() => setShowWomenDropdown(false)}
            >
              <span>For Women</span>
              <ChevronDown size={16} />
            </button>

            {showWomenDropdown && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-2 z-10"
                onMouseEnter={() => setShowWomenDropdown(true)}
                onMouseLeave={() => setShowWomenDropdown(false)}
              >
                <Link href="/shop/women/tops" className="block px-4 py-2 hover:bg-gray-100">
                  Tops
                </Link>
                <Link href="/shop/women/bottoms" className="block px-4 py-2 hover:bg-gray-100">
                  Bottoms
                </Link>
                <Link href="/shop/women/dresses" className="block px-4 py-2 hover:bg-gray-100">
                  Dresses
                </Link>
                <Link href="/shop/women/accessories" className="block px-4 py-2 hover:bg-gray-100">
                  Accessories
                </Link>
              </div>
            )}
          </div>

          {/* For Men Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 hover:underline"
              onMouseEnter={() => setShowMenDropdown(true)}
              onMouseLeave={() => setShowMenDropdown(false)}
            >
              <span>For Men</span>
              <ChevronDown size={16} />
            </button>

            {showMenDropdown && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-2 z-10"
                onMouseEnter={() => setShowMenDropdown(true)}
                onMouseLeave={() => setShowMenDropdown(false)}
              >
                <Link href="/shop/men/tops" className="block px-4 py-2 hover:bg-gray-100">
                  Tops
                </Link>
                <Link href="/shop/men/bottoms" className="block px-4 py-2 hover:bg-gray-100">
                  Bottoms
                </Link>
                <Link href="/shop/men/outerwear" className="block px-4 py-2 hover:bg-gray-100">
                  Outerwear
                </Link>
                <Link href="/shop/men/accessories" className="block px-4 py-2 hover:bg-gray-100">
                  Accessories
                </Link>
              </div>
            )}
          </div>

          <Link href="/shop" className="nav-link hover:underline">
            Shop
          </Link>
          <Link href="/about" className="nav-link hover:underline">
            About Us
          </Link>
          <Link href="/sustainability" className="nav-link hover:underline">
            Sustainability
          </Link>
          <Link href="/blog" className="nav-link hover:underline">
            Blog / Stories
          </Link>
          <Link href="/contact" className="nav-link hover:underline">
            Contact
          </Link>
        </div>

        {/* Search, Cart, Account Icons */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="hover:text-gray-600">
            <Search size={20} />
          </button>
          <Link href="/cart" className="hover:text-gray-600">
            <ShoppingBag size={20} />
          </Link>
          <Link href="/account" className="hover:text-gray-600">
            <User size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-md z-50">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link href="/" className="py-2 border-b border-gray-100">
              Home
            </Link>

            {/* Mobile For Women Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 border-b border-gray-100"
                onClick={() => setShowWomenDropdown(!showWomenDropdown)}
              >
                <span>For Women</span>
                <ChevronDown size={16} className={showWomenDropdown ? "transform rotate-180" : ""} />
              </button>

              {showWomenDropdown && (
                <div className="pl-4 py-2 space-y-2 bg-gray-50">
                  <Link href="/shop/women/tops" className="block py-1">
                    Tops
                  </Link>
                  <Link href="/shop/women/bottoms" className="block py-1">
                    Bottoms
                  </Link>
                  <Link href="/shop/women/dresses" className="block py-1">
                    Dresses
                  </Link>
                  <Link href="/shop/women/accessories" className="block py-1">
                    Accessories
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile For Men Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 border-b border-gray-100"
                onClick={() => setShowMenDropdown(!showMenDropdown)}
              >
                <span>For Men</span>
                <ChevronDown size={16} className={showMenDropdown ? "transform rotate-180" : ""} />
              </button>

              {showMenDropdown && (
                <div className="pl-4 py-2 space-y-2 bg-gray-50">
                  <Link href="/shop/men/tops" className="block py-1">
                    Tops
                  </Link>
                  <Link href="/shop/men/bottoms" className="block py-1">
                    Bottoms
                  </Link>
                  <Link href="/shop/men/outerwear" className="block py-1">
                    Outerwear
                  </Link>
                  <Link href="/shop/men/accessories" className="block py-1">
                    Accessories
                  </Link>
                </div>
              )}
            </div>

            <Link href="/shop" className="py-2 border-b border-gray-100">
              Shop
            </Link>
            <Link href="/about" className="py-2 border-b border-gray-100">
              About Us
            </Link>
            <Link href="/sustainability" className="py-2 border-b border-gray-100">
              Sustainability
            </Link>
            <Link href="/blog" className="py-2 border-b border-gray-100">
              Blog / Stories
            </Link>
            <Link href="/contact" className="py-2 border-b border-gray-100">
              Contact
            </Link>

            {/* Mobile Search, Cart, Account */}
            <div className="flex items-center space-x-8 py-2">
              <button className="flex items-center space-x-2">
                <Search size={20} />
                <span>Search</span>
              </button>
              <Link href="/cart" className="flex items-center space-x-2">
                <ShoppingBag size={20} />
                <span>Cart</span>
              </Link>
              <Link href="/account" className="flex items-center space-x-2">
                <User size={20} />
                <span>Account</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
