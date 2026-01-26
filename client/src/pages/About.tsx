import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "wouter";
import { MessageCircle, Target, Heart, Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/images/logo.jpg";
import heroImage from "@/assets/images/hero-2.png";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = "2348035649771";
  const whatsappMessage =
    "Hello Zamari Foods! I'd like to know more about your company.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-orange-100">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={logo}
                alt="Zamari Foods Logo"
                className="h-10 w-10 object-contain rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Zamari Foods
                </h1>
                <p className="text-xs text-gray-600">
                  Premium Nigerian Superfoods
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-orange-600 hover:text-orange-700 font-medium border-b-2 border-orange-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* WhatsApp Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-600"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-orange-100 shadow-lg">
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-orange-600 hover:text-orange-700 font-medium py-2 border-l-4 border-orange-600 pl-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Image */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="About Zamari Foods"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                About Zamari Foods
              </h1>
              <p className="text-lg md:text-xl drop-shadow-md">
                Bringing the authentic taste and nutrition of traditional
                Nigerian superfoods to modern tables, one product at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white py-16 border-y border-orange-100">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Zamari Foods was founded with a simple yet powerful mission: to
              make authentic Nigerian superfoods accessible and affordable for
              everyone. We believe that good health should not be a luxury, and
              that traditional Nigerian ingredients hold the key to wellness in
              the modern world.
            </p>
            <p>
              Our journey began in Jos, Nigeria, where we recognized the
              incredible nutritional value of traditional Nigerian foods that
              have sustained our communities for generations. We saw an
              opportunity to process these foods using modern standards while
              preserving their natural goodness and cultural authenticity.
            </p>
            <p>
              Today, Zamari Foods stands as a bridge between tradition and
              modernity, bringing you products that are 100% natural,
              hygienically processed, and packed with the nutrition your family
              deserves. Every product we create is a testament to our commitment
              to quality, affordability, and the health of our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Mission, Vision & Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-orange-600" size={32} />
                <CardTitle>Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To provide affordable, natural, and nutritious Nigerian
                superfoods that empower families to live healthier lives while
                supporting local farmers and preserving cultural heritage.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-green-600" size={32} />
                <CardTitle>Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To become the leading global brand for authentic Nigerian
                superfoods, recognized for quality, innovation, and our
                commitment to making traditional nutrition accessible worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-red-600" size={32} />
                <CardTitle>Our Values</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Quality, Authenticity, Affordability, Sustainability, and
                Community. We believe in doing business with integrity and
                creating positive impact for our customers, communities, and the
                environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 border-y border-orange-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Zamari Foods?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  100% Natural
                </h3>
                <p className="text-gray-700">
                  No artificial additives, preservatives, or chemicals. Just
                  pure, natural goodness.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Quality Assured
                </h3>
                <p className="text-gray-700">
                  Hygienically processed and packaged with modern standards to
                  ensure safety and quality.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Affordable Pricing
                </h3>
                <p className="text-gray-700">
                  Premium quality at prices that work for Nigerian families and
                  budgets.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Community Support
                </h3>
                <p className="text-gray-700">
                  We work directly with local farmers, supporting livelihoods
                  and preserving traditions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Convenient Ordering
                </h3>
                <p className="text-gray-700">
                  Easy WhatsApp ordering and online forms make shopping simple
                  and fast.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Health Benefits
                </h3>
                <p className="text-gray-700">
                  Packed with nutrients, vitamins, and minerals for optimal
                  family health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Commitment to You
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-orange-100">
          <p className="text-gray-700 leading-relaxed mb-6">
            At Zamari Foods, we are committed to delivering not just products,
            but a promise of health, quality, and authenticity. Every product
            that leaves our facility is a reflection of our dedication to your
            wellbeing and satisfaction.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We listen to our customers, continuously improve our processes, and
            innovate to bring you the best of Nigerian superfoods. Your trust is
            our most valuable asset, and we work tirelessly to earn it every
            single day.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Thank you for choosing Zamari Foods. Together, we're building a
            healthier Nigeria, one family at a time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Premium Nigerian Superfoods?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of families who have made Zamari Foods part of their
            healthy lifestyle.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                Shop Now
              </Button>
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="mr-2" size={20} />
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">About Zamari Foods</h3>
              <p className="text-gray-400 text-sm">
                Premium Nigerian superfoods for healthy, affordable living.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#products" className="hover:text-white">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>+234 803 564 9771 / +234 903 605 9950</li>
                <li>Email: Zamarifoods356@gmail.com</li>
                <li>Location: Jos, Nigeria</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {/* <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a> */}
                <a
                  href="https://www.instagram.com/zamarifoods/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Instagram
                </a>
                {/* <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a> */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; 2025 Zamari Foods Ltd. All rights reserved. | Authentic
              Nigerian Superfoods
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
