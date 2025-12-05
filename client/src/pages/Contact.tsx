import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "wouter";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/images/logo.jpg";
import heroImage from "@/assets/images/hero-4.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const whatsappNumber = "+234 803 564 9771";
  const whatsappMessage = "Hello Zamari Foods! I have a question.";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-orange-600 hover:text-orange-700 font-medium border-b-2 border-orange-600"
            >
              Contact
            </Link>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl drop-shadow-md">
                Have questions about our products or want to place a bulk order? We'd
                love to hear from you. Reach out using any of the methods below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="text-green-600" size={32} />
                <CardTitle>WhatsApp</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Quick and easy ordering via WhatsApp
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Chat on WhatsApp
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-blue-600" size={32} />
                <CardTitle>Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Send us your inquiries via email
              </p>
              <a href="mailto:zamarifoods@gmail.com">
                <Button
                  variant="outline"
                  className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  zamarifoods@gmail.com
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-red-600" size={32} />
                <CardTitle>Phone</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Call us for immediate assistance
              </p>
              <a href="tel:+234 803 564 9771">
                <Button
                  variant="outline"
                  className="w-full border-red-300 text-red-600 hover:bg-red-50"
                >
                  +234 803 564 9771
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16 border-y border-orange-100">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="+234..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Your message here..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-orange-600 hover:bg-orange-700"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Location */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Visit Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-orange-600" size={32} />
                  <CardTitle>Our Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">
                    Address
                  </p>
                  <p className="text-gray-900">Jos, Nigeria</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">
                    Business Hours
                  </p>
                  <p className="text-gray-900">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-900">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-900">Sunday: Closed</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">
                    Response Time
                  </p>
                  <p className="text-gray-900">
                    We typically respond within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Bulk Orders & Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  Are you interested in bulk orders, wholesale pricing, or
                  partnership opportunities? We'd love to work with retailers,
                  distributors, and businesses across Nigeria and beyond.
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("I'm interested in bulk orders or partnership with Zamari Foods.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    <MessageCircle className="mr-2" size={20} />
                    Discuss Partnership
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 border-y border-orange-200">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How do I place an order?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  You can place an order through our website using the order
                  form, via WhatsApp for quick ordering, or by calling us
                  directly. All methods are equally convenient.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What is your delivery timeframe?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Delivery timeframes depend on your location. Within Lagos and
                  major cities, we typically deliver within 2-3 business days.
                  For other locations, please contact us for specific details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you offer bulk discounts?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes! We offer competitive bulk pricing for wholesale orders.
                  Please contact us directly to discuss your bulk order needs
                  and get a customized quote.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Are your products certified organic?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  All our products are made from 100% natural ingredients and
                  are hygienically processed. We maintain high quality standards
                  throughout our production process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What payment methods do you accept?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We accept various payment methods including bank transfers,
                  mobile money, and cash on delivery for local orders. Contact
                  us for specific payment options available in your area.
                </p>
              </CardContent>
            </Card>
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
                  <Link href="/products" className="hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Phone: +234 803 564 9771</li>
                <li>Email: zamarifoods@gmail.com</li>
                <li>Location: Jos, Nigeria</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
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
