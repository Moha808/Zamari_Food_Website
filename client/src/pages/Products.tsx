import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "wouter";
import { useState } from "react";
import { MessageCircle, Search, Filter } from "lucide-react";

import product1 from "@/assets/images/product-8.jpg";
import product2 from "@/assets/images/product-2.jpg";
import product3 from "@/assets/images/product-3.jpg";
import product4 from "@/assets/images/product-4.jpg";
import product5 from "@/assets/images/product-5.jpg";
import product6 from "@/assets/images/product-6.jpg";
import product7 from "@/assets/images/product-7.jpg";
import product8 from "@/assets/images/product-1.jpg";
import logo from "@/assets/images/logo.jpg";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const whatsappNumber = "+234 803 564 9771";

  const products = [
    {
      id: 1,
      name: "Lemon Grass Ginger & Lemon Tea",
      category: "Teas",
      price: "₦1,500",
      description:
        "Boost your energy with this refreshing blend of lemon grass, ginger, and lemon.",
      longDescription:
        "Our premium Lemon Grass Ginger & Lemon Tea is a perfect blend of natural ingredients designed to energize and refresh. Rich in antioxidants and natural vitamins, this tea supports immune health and digestive wellness. Perfect for morning energy or afternoon refreshment.",
      benefits: [
        "Energy Boost",
        "Immune Support",
        "Digestive Health",
        "Natural Antioxidants",
      ],
      ingredients: ["Lemon Grass", "Ginger", "Lemon", "Natural Herbs"],
      image: product1,
      color: "from-yellow-50 to-orange-50",
    },
    {
      id: 2,
      name: "Achalina Fonio Flour",
      category: "Grains & Flours",
      price: "₦1,500",
      description:
        "A unique blend combining fonio flour and Achalina leaf for a unique taste.",
      longDescription:
        "A unique blend combining fonio flour and Achalina leaf for a unique taste.",
      benefits: [
        "Energy",
        "Antioxidants",
        "Freshness",
        "Calming Effect",
      ],
      ingredients: ["Fonio Flour", "Achalina Leaf"],
      image: product2,
      color: "from-green-50 to-emerald-50",
    },
    {
      id: 3,
      name: "Sweet Potato Flour",
      category: "Grains & Flours",
      price: "₦1,500",
      description:
        "A unique blend combining beetroot and coffee for a unique taste.",
      longDescription:
        "Experience the unique fusion of beetroot and coffee in our Cobeet Tea. This innovative blend combines the earthy richness of coffee with the nutritional benefits of beetroot. Perfect for those seeking a unique flavor profile with health benefits.",
      benefits: ["Energy", "Heart Health", "Antioxidants", "Unique Flavor"],
      ingredients: ["Beetroot", "Coffee", "Natural Spices"],
      image: product3,
      color: "from-red-50 to-rose-50",
    },
    {
      id: 4,
      name: "Tamba Mix Flour",
      category: "Grains & Flours",
      price: "₦1,500",
      description:
        "Experience the nutritional power of moringa leaf in every cup.",
      longDescription:
        "Moringa Tea is a nutritional powerhouse, packed with vitamins, minerals, and amino acids. Known as the 'miracle tree', moringa leaves have been used in traditional medicine for centuries. Our Moringa Tea provides a convenient way to access these incredible health benefits.",
      benefits: ["Nutrition", "Energy", "Wellness", "Detox Support"],
      ingredients: ["Moringa Leaf", "Natural Herbs"],
      image: product4,
      color: "from-green-50 to-lime-50",
    },
    {
      id: 5,
      name: "Tiger Powder Milk",
      category: "Powders",
      price: "₦2,500",
      description:
        "Premium processed tiger powder milk for healthy baking and cooking.",
      longDescription:
        "Our Tiger Powder Milk is a versatile, nutrient-rich ingredient perfect for baking, cooking, and smoothies. Made from premium sweet potatoes processed to perfection, it's gluten-free and packed with natural sweetness. Ideal for health-conscious families.",
      benefits: [
        "Gluten-Free",
        "Nutrient-Rich",
        "Versatile",
        "Natural Sweetness",
      ],
      ingredients: ["Tiger Powder Milk"],
      image: product5,
      color: "from-orange-50 to-amber-50",
    },
    {
      id: 6,
      name: "Date Powder",
      category: "Powders",
      price: "₦2,000",
      description:
        "Premium processed date powder for healthy baking and cooking.",
      longDescription:
        "Our Date Powder is a versatile, nutrient-rich ingredient perfect for baking, cooking, and smoothies. Made from premium sweet potatoes processed to perfection, it's gluten-free and packed with natural sweetness. Ideal for health-conscious families.",
      benefits: [
        "Gluten-Free",
        "High Fiber",
        "Traditional",
        "Ancient Superfood",
      ],
      ingredients: ["Date Powder"],
      image: product6,
      color: "from-yellow-50 to-orange-50",
    },
    {
      id: 7,
      name: "Acha Grain Fonio",
      category: "Grains & Flours",
      price: "₦4,400",
      description:
        "Rich in vitamin C and minerals - perfect for smoothies and beverages.",
      longDescription:
        "Acha Grain Fonio is a premium blend combining the nutritional benefits of baobab fruit with creamy milk powder. Rich in vitamin C, calcium, and antioxidants, it's perfect for smoothies, beverages, and recipes. A delicious way to boost your nutrition.",
      benefits: ["Vitamin C", "Immune Boost", "Natural", "Calcium-Rich"],
      ingredients: ["Acha Grain Fonio"],
      image: product7,
      color: "from-amber-50 to-orange-50",
    },
    {
      id: 8,
      name: "Acha Grain Fonio",
      category: "Grains & Flours",
      price: "₦2,400",
      description: "Nutritious tigernut powder for healthy drinks and recipes.",
      longDescription:
        "Acha Grain Fonio is a nutrient-dense superfood made from dried tigernuts. Rich in fiber, resistant starch, and beneficial compounds, it's perfect for smoothies, drinks, and recipes. Supports digestive health and provides sustained energy.",
      benefits: ["Digestive Health", "Energy", "Natural", "Nutrient-Dense"],
      ingredients: ["Acha Grain Fonio"],
      image: product8,
      color: "from-amber-50 to-yellow-50",
    },
  ];

  const categories = ["All", "Teas", "Grains & Flours", "Powders"];

  const filteredProducts = products.filter(p => {
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All" ||
      p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              className="text-orange-600 hover:text-orange-700 font-medium border-b-2 border-orange-600"
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
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="container py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          Explore our complete range of premium Nigerian superfoods. Each
          product is carefully selected and processed to ensure maximum
          nutrition and quality.
        </p>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-8 border-y border-orange-100">
        <div className="container">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search
                className="absolute left-4 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-orange-600" />
                <h3 className="font-semibold text-gray-900">
                  Filter by Category
                </h3>
              </div>
              <div className="flex gap-3 flex-wrap">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() =>
                      setSelectedCategory(cat === "All" ? null : cat)
                    }
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
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container py-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No products found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory(null);
              }}
              className="mt-4 text-orange-600 hover:text-orange-700 font-medium underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
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
                    <CardTitle className="text-lg mb-1">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {product.category}
                    </CardDescription>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 mb-2">
                      Benefits:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.slice(0, 2).map((benefit, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white bg-opacity-60 px-2 py-1 rounded-full text-gray-700"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white border-opacity-40 mt-auto">
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
        )}
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
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Phone: +234 803 564 9771</li>
                <li>Email: info@zamarifoods.com</li>
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
