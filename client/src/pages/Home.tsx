import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageCircle,
  ShoppingBag,
  Leaf,
  Award,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

import product1 from "@/assets/images/product-8.jpg";
import product2 from "@/assets/images/product-2.jpg";
import product3 from "@/assets/images/product-3.jpg";
import product4 from "@/assets/images/product-4.jpg";
import product5 from "@/assets/images/product-5.jpg";
import product6 from "@/assets/images/product-6.jpg";
import product7 from "@/assets/images/product-7.jpg";
import product8 from "@/assets/images/product-5.jpg";
import product9 from "@/assets/images/product-22.jpeg";
import product10 from "@/assets/images/product-22.jpeg";
import product11 from "@/assets/images/product-11.jpg";
import product12 from "@/assets/images/product-18.jpg";
import product13 from "@/assets/images/product-13.jpg";
import product14 from "@/assets/images/product-15.jpg";
import product15 from "@/assets/images/product-9.jpg";
import product17 from "@/assets/images/product-17.jpg";
import product16 from "@/assets/images/product-16.jpg";
import product21 from "@/assets/images/product-10.jpg";
import product22 from "@/assets/images/product-19.jpg";
import product23 from "@/assets/images/product-14.jpg";
import product24 from "@/assets/images/product-12.jpg";
import product25 from "@/assets/images/product-23.jpeg";
import logo from "@/assets/images/logo.jpg";

// Hero carousel images (using existing product images)
import hero1 from "@/assets/images/hero-1.png";
import hero2 from "@/assets/images/hero-2.png";
import hero3 from "@/assets/images/hero-3.png";
import hero4 from "@/assets/images/hero-4.png";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Carousel data
  const carouselSlides = [
    {
      image: hero1,
      title: "Nourish Your Festive Moments",
      subtitle:
        "Discover authentic Nigerian superfoods processed with modern standards",
    },
    {
      image: hero2,
      title: "Pure Natural Goodness",
      subtitle: "100% natural ingredients from Nigerian farms to your table",
    },
    {
      image: hero3,
      title: "Premium Herbal Teas",
      subtitle: "Experience the healing power of traditional African herbs",
    },
    {
      image: hero4,
      title: "Farm Fresh Quality",
      subtitle: "Supporting local farmers while delivering excellence",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      prev => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const products = [
    {
      id: 1,
      name: "Lemon Grass Tea",
      category: "Teas",
      price: "₦2,500",
      description:
        "Boost your energy with this refreshing blend of lemon grass.",
      benefits: ["Energy Boost", "Immune Support", "Digestive Health"],
      image: product1,
      color: "from-yellow-50 to-orange-50",
    },
    {
      id: 2,
      name: "Achalina Fonio Flour",
      category: "Grains & Flours",
      price: "₦1,500",
      description:
        "Nutritious acha-based cereal mix ideal for both children and adults.",
      benefits: ["Energy", "Easy to Digest", "Nutrient-Rich"],
      image: product2,
      color: "from-green-50 to-emerald-50",
    },
    {
      id: 3,
      name: "Sweet Potato Flour 1kg",
      category: "Grains & Flours",
      price: "₦4,000",
      description:
        "Premium processed sweet potato flour for healthy baking and cooking.",
      benefits: ["Gluten-Free", "Nutrient-Rich", "Versatile"],
      image: product3,
      color: "from-red-50 to-rose-50",
    },
    {
      id: 4,
      name: "Tamba Mix Flour 1kg",
      category: "Grains & Flours",
      price: "₦4,000",
      description:
        "Premium processed tamba mix flour for healthy baking and cooking.",
      benefits: ["Nutrition", "Energy", "Wellness"],
      image: product4,
      color: "from-green-50 to-lime-50",
    },
    {
      id: 5,
      name: "Tigernut Powder 500g",
      category: "Powders",
      price: "₦3,500",
      description: "Nutritious tigernut powder for healthy drinks and recipes.",
      benefits: ["Digestive Health", "Energy", "Natural"],
      image: product5,
      color: "from-orange-50 to-amber-50",
    },
    {
      id: 6,
      name: "Date Powder 500g",
      category: "Powder",
      price: "₦3,500",
      description:
        "Premium processed date powder for healthy baking and cooking.",
      benefits: ["Gluten-Free", "High Fiber", "Traditional"],
      image: product6,
      color: "from-yellow-50 to-orange-50",
    },
    {
      id: 7,
      name: "Acha Grain Fonio 1kg",
      category: "Grains & Flours",
      price: "₦4,000",
      description:
        "Premium processed acha grain rich in fiber, minerals, and natural energy, ideal for porridge, swallow, and healthy meals.",
      benefits: ["High Fiber", "Energy", "Gluten-Free", "Easy to Digest"],
      image: product7,
      color: "from-amber-50 to-orange-50",
    },
    {
      id: 8,
      name: "Tigernut Powder 250g",
      category: "Powders",
      price: "₦1,800",
      description: "Nutritious tigernut powder for healthy drinks and recipes.",
      benefits: ["Digestive Health", "Energy", "Natural"],
      image: product8,
      color: "from-amber-50 to-yellow-50",
    },
    {
      id: 9,
      name: "Ginger Powder 75g",
      category: "Powders",
      price: "₦2,000",
      description:
        "Pure dried ginger powder perfect for seasoning, drinks, and remedies.",
      benefits: ["Digestive Health", "Anti-inflammatory", "Energy Boost"],
      image: product9,
      color: "from-yellow-50 to-orange-50",
    },
    {
      id: 10,
      name: "Ginger Powder 200g",
      category: "Powders",
      price: "₦4,000",
      description:
        "Pure dried ginger powder perfect for seasoning, drinks, and remedies.",
      benefits: ["Digestive Health", "Anti-inflammatory", "Energy Boost"],
      image: product10,
      color: "from-yellow-50 to-orange-50",
    },
    {
      id: 11,
      name: "Zobeet Pure Tea",
      category: "Teas",
      price: "₦2,500",
      description:
        "A refreshing and natural herbal tea blend offering immune and antioxidant support.",
      benefits: ["Immune Boost", "Antioxidants", "Wellness"],
      image: product11,
      color: "from-purple-50 to-pink-50",
    },
    {
      id: 12,
      name: "Cobeet Tea",
      category: "Teas",
      price: "₦3,000",
      description:
        "A nutritious blend made from beetroot for energy and heart support.",
      benefits: ["Energy", "Heart Health", "Antioxidants"],
      image: product12,
      color: "from-red-50 to-pink-50",
    },
    {
      id: 13,
      name: "Cinnamon Plus Tea",
      category: "Teas",
      price: "₦3,000",
      description:
        "A healthy cinnamon tea blend that supports metabolism and blood sugar balance.",
      benefits: ["Metabolism Support", "Blood Sugar Balance", "Antioxidants"],
      image: product13,
      color: "from-orange-50 to-red-50",
    },
    {
      id: 14,
      name: "Ginseng Plus Tea",
      category: "Teas",
      price: "₦3,000",
      description:
        "A revitalizing ginseng tea that boosts energy, focus, and wellness.",
      benefits: ["Energy", "Mental Focus", "Immune Support"],
      image: product14,
      color: "from-yellow-50 to-amber-50",
    },
    {
      id: 15,
      name: "Black Seed Tea",
      category: "Teas",
      price: "₦3,000",
      description:
        "A powerful herbal tea infused with black seed for wellness and immunity.",
      benefits: ["Immune Boost", "Respiratory Health", "Antioxidants"],
      image: product15,
      color: "from-gray-50 to-slate-50",
    },
    {
      id: 16,
      name: "Rich B Tea",
      category: "Teas",
      price: "₦4,000",
      description:
        "A premium herbal tea blend formulated for vitality and overall wellness.",
      benefits: ["Energy", "Immune Support", "Wellness"],
      image: product25,
      color: "from-blue-50 to-indigo-50",
    },
    {
      id: 17,
      name: "Green Vervain Tea",
      category: "Teas",
      price: "₦3,000",
      description:
        "A calming herbal tea traditionally used for relaxation and stress relief.",
      benefits: ["Relaxation", "Stress Relief", "Sleep Support"],
      image: product17,
      color: "from-green-50 to-emerald-50",
    },
    {
      id: 18,
      name: "Tamba Mix Flour 500g",
      category: "Grains & Flours",
      price: "₦2,000",
      description:
        "Premium processed tamba mix flour for healthy baking and cooking.",
      benefits: ["Nutrition", "Energy", "Wellness"],
      image: product4,
      color: "from-green-50 to-lime-50",
    },
    {
      id: 19,
      name: "Acha Flour Fonio 1kg",
      category: "Grains & Flours",
      price: "₦4,500",
      description:
        "Premium processed acha grain rich in fiber, minerals, and natural energy, ideal for porridge, swallow, and healthy meals.",
      benefits: ["High Fiber", "Energy", "Gluten-Free", "Easy to Digest"],
      image: product7,
      color: "from-amber-50 to-orange-50",
    },
    {
      id: 20,
      name: "Lemon Grass Ginger & Lemon Tea",
      category: "Teas",
      price: "₦3,500",
      description:
        "Boost your energy with this refreshing blend of lemongrass, ginger, and lemon.",
      benefits: ["Energy Boost", "Immune Support", "Digestive Health"],
      image: product16,
      color: "from-yellow-50 to-orange-50",
    },
    {
      id: 21,
      name: "Turmeric Tea",
      category: "Teas",
      price: "₦2,500",
      description:
        "A soothing blend of turmeric and spices that supports overall wellness and inflammation relief.",
      benefits: ["Anti-Inflammatory", "Boosts Immunity", "Supports Digestion"],
      image: product21,
      color: "from-yellow-100 to-orange-200",
    },
    {
      id: 22,
      name: "Moringa Tea",
      category: "Teas",
      price: "₦2,500",
      description:
        "A nutrient-rich tea made from moringa leaves, known for its high antioxidant content and revitalizing effects.",
      benefits: ["Rich in Antioxidants", "Energy Boost", "Supports Metabolism"],
      image: product22,
      color: "from-green-100 to-green-300",
    },
    {
      id: 23,
      name: "Dandelion Tea",
      category: "Teas",
      price: "₦3,000",
      description:
        "A herbal tea with a slightly earthy flavor that supports liver detoxification and digestive health.",
      benefits: ["Liver Detox", "Digestive Aid", "Supports Weight Management"],
      image: product23,
      color: "from-yellow-50 to-green-100",
    },
    {
      id: 24,
      name: "Noni Tea",
      category: "Teas",
      price: "₦3,000",
      description:
        "A tropical tea made from noni fruit, known for its immune-boosting and overall wellness properties.",
      benefits: ["Immune Support", "Anti-Inflammatory", "Overall Wellness"],
      image: product24,
      color: "from-green-200 to-green-400",
    },
  ];

  const categories = ["All", "Teas", "Grains & Flours", "Powders"];

  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? products.filter(p => p.category === selectedCategory)
      : products;

  const whatsappNumber = "+234 803 564 9771"; // Replace with actual WhatsApp number
  const whatsappMessage =
    "Hello Zamari Foods! I'm interested in your products.";

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
              className="text-orange-600 hover:text-orange-700 font-medium border-b-2 border-orange-600"
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
                className="text-orange-600 hover:text-orange-700 font-medium py-2 border-l-4 border-orange-600 pl-3"
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
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
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

      {/* Hero Carousel Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Carousel Images */}
        <div className="relative w-full h-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Lighter overlay for better image visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
            </div>
          ))}
        </div>

        {/* Carousel Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {carouselSlides[currentSlide].title}
              </h2>
              <p className="text-lg md:text-xl mb-8 drop-shadow-md">
                {carouselSlides[currentSlide].subtitle}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-500 hover:bg-green-600">
                    <MessageCircle className="mr-2" size={20} />
                    Order via WhatsApp
                  </Button>
                </a>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white bg-opacity-90 hover:bg-opacity-100"
                  >
                    <ShoppingBag className="mr-2" size={20} />
                    Explore Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-900 p-3 rounded-full transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-900 p-3 rounded-full transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 border-y border-orange-100">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-orange-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600 text-sm">
                No artificial additives or preservatives
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">
                Hygienically processed and packaged
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-yellow-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Affordable</h3>
              <p className="text-gray-600 text-sm">
                Premium quality at competitive prices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of natural Nigerian
            superfoods, perfect for your health and wellness journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-8 justify-center flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                (selectedCategory === null && cat === "All") ||
                selectedCategory === cat
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card
              key={product.id}
              className={`overflow-hidden hover:shadow-lg transition-shadow bg-gradient-to-br ${product.color}`}
            >
              <CardHeader className="p-0">
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-2">
                  <CardTitle className="text-lg mb-1">{product.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {product.category}
                  </CardDescription>
                </div>
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white bg-opacity-60 px-2 py-1 rounded-full text-gray-700"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-orange-600">
                    {product.price}
                  </span>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`I'm interested in ${product.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-600"
                    >
                      Order
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Order Form Section */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 border-t border-orange-200">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Place Your Order
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below or contact us via WhatsApp for quick
              ordering
            </p>

            <form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+234..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Address *
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  rows={3}
                  placeholder="Your delivery address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Products Interested In *
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  rows={3}
                  placeholder="List the products and quantities you'd like to order..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  rows={2}
                  placeholder="Any special requests or questions?"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-orange-600 hover:bg-orange-700 w-full h-14 text-lg"
                >
                  Submit Order
                </Button>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="w-full border-green-500 text-green-600 hover:bg-green-50 h-14 text-lg"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </form>
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
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="#products" className="hover:text-white">
                    Specialty Teas
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white">
                    Grains & Flours
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white">
                    Powders
                  </a>
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
