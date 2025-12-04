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
import product8 from "@/assets/images/product-5.jpg";
import product9 from "@/assets/images/product-11.jpg";
import product10 from "@/assets/images/product-18.jpg";
import product11 from "@/assets/images/product-13.jpg";
import product12 from "@/assets/images/product-15.jpg";
import product13 from "@/assets/images/product-9.jpg";
import product14 from "@/assets/images/product-17.jpg";
import product20 from "@/assets/images/product-16.jpg";
import product21 from "@/assets/images/product-10.jpg";
import product22 from "@/assets/images/product-19.jpg";
import product23 from "@/assets/images/product-14.jpg";
import product24 from "@/assets/images/product-12.jpg";
import logo from "@/assets/images/logo.jpg";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const whatsappNumber = "+234 803 564 9771";

  const products = [
  {
    id: 1,
    name: "Lemon Grass Tea",
    category: "Teas",
    price: "₦2,500",
    description:
      "Boost your energy with this refreshing blend of lemon grass tea.",
    longDescription:
      "Our premium Lemon Grass Tea is a perfect blend of natural ingredients designed to energize and refresh. Rich in antioxidants and natural vitamins, this tea supports immune health and digestive wellness. Perfect for morning energy or afternoon refreshment.",
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
      "A nutritious blend of fonio flour and Achalina leaf for enhanced flavor and wellness.",
    longDescription:
      "Achalina Fonio Flour combines finely milled fonio grain with the natural benefits of Achalina leaf. This blend supports digestion, provides natural energy, and offers a mild herbal flavor. Perfect for porridge, swallow, and light baking.",
    benefits: ["Energy", "Digestive Support", "Antioxidants", "Natural Wellness"],
    ingredients: ["Fonio Flour", "Achalina Leaf"],
    image: product2,
    color: "from-green-50 to-emerald-50",
  },

  {
    id: 3,
    name: "Sweet Potato Flour 1kg",
    category: "Grains & Flours",
    price: "₦4000",
    description:
      "Premium processed sweet potato flour for healthy baking and cooking.",
    longDescription:
      "Our Sweet Potato Flour is made from 100% carefully selected sweet potatoes, finely milled to produce a naturally sweet, gluten-free, nutrient-rich flour. Ideal for baking, thickening soups, swallow, baby food, and healthy recipes.",
    benefits: ["Gluten-Free", "Energy", "Nutrient-Rich", "Natural Sweetness"],
    ingredients: ["Sweet Potato"],
    image: product3,
    color: "from-red-50 to-rose-50",
  },

  {
    id: 4,
    name: "Tamba Mix Flour 1kg",
    category: "Grains & Flours",
    price: "₦4000",
    description:
      "Premium processed tamba mix flour for healthy baking and cooking.",
    longDescription:
      "Tamba flour is a nutrient-dense traditional grain rich in fiber, minerals, and natural energy. It is easy to digest and ideal for preparing healthy meals such as swallow, porridge, and baked recipes. Known for its sustained energy release, Tamba is excellent for both children and adults seeking a wholesome, natural food source.",
    benefits: ["Fiber", "Energy", "Wellness", "Minerals"],
    ingredients: ["Tamba Mix Flour"],
    image: product4,
    color: "from-green-50 to-lime-50",
  },

  {
    id: 5,
    name: "Tigernut Powder 500g",
    category: "Powders",
    price: "₦3,500",
    description:
      "Premium processed tigernut milk powder for healthy drinks and cooking.",
    longDescription:
      "Our Tigernut Powder Milk is a creamy, nutrient-rich superfood made from finely processed tigernuts. It is naturally sweet, gluten-free, and perfect for smoothies, beverages, cereals, and healthy baking. A great plant-based milk alternative for the whole family.",
    benefits: [
      "Gluten-Free",
      "Nutrient-Rich",
      "Natural Sweetness",
      "Plant-Based Milk",
    ],
    ingredients: ["Tigernut Milk Powder"],
    image: product5,
    color: "from-orange-50 to-amber-50",
  },

  {
    id: 6,
    name: "Date Powder 500g",
    category: "Powders",
    price: "₦3,500",
    description:
      "Premium processed date powder for healthy sweetening, baking, and cooking.",
    longDescription:
      "Our Date Powder is a natural sweetener made from 100% dried dates. Rich in fiber, minerals, and antioxidants, it is perfect for smoothies, pap, baking, tea, and general cooking. It provides natural sweetness without additives and supports digestive health.",
    benefits: [
      "Natural Sweetener",
      "High Fiber",
      "Antioxidants",
      "Gluten-Free",
    ],
    ingredients: ["Date Powder"],
    image: product6,
    color: "from-yellow-50 to-orange-50",
  },

  {
    id: 7,
    name: "Acha Grain Fonio 1kg",
    category: "Grains & Flours",
    price: "₦4,000",
    description:
      "Premium processed acha grain rich in fiber, minerals, and natural energy.",
    longDescription:
      "Acha Grain, also known as Fonio, is one of Africa’s oldest and most nutritious ancient grains. Naturally gluten-free and rich in fiber, iron, and essential amino acids, it provides clean, sustained energy and supports healthy digestion. Acha cooks quickly and is perfect for porridge, swallow, cereals, and a variety of healthy recipes.",
    benefits: ["High Fiber", "Energy", "Gluten-Free", "Easy to Digest"],
    ingredients: ["Acha Grain (Fonio)"],
    image: product7,
    color: "from-amber-50 to-orange-50",
  },

  {
    id: 8,
    name: "Tigernut Powder 250g",
    category: "Powders",
    price: "₦1,800",
    description: "Nutritious tigernut powder for healthy drinks and recipes.",
    longDescription:
      "Tigernut Powder is a nutrient-dense superfood made from dried tigernuts. Rich in fiber, resistant starch, and natural sugars, it's perfect for smoothies, drinks, pap, baking, and general recipes. Supports digestive health and provides sustained natural energy.",
    benefits: [
      "Digestive Health",
      "Energy",
      "Natural",
      "Nutrient-Dense"
    ],
    ingredients: ["Tigernut Powder"],
    image: product8,
    color: "from-amber-50 to-yellow-50",
  },
  {
  id: 9,
  name: "Zobeet Pure Tea",
  category: "Teas",
  price: "₦2,500",
  description: "A refreshing pure zobo herbal tea rich in antioxidants.",
  longDescription:
    "Zobeet Pure Tea is made from natural hibiscus (zobo) leaves, known for their vibrant flavor and high antioxidant content. It supports heart health, hydration, and overall wellness. Perfect hot or cold.",
  benefits: ["Antioxidants", "Heart Health", "Hydration", "Immune Support"],
  ingredients: ["Hibiscus (Zobo) Leaves"],
  image: product9,
  color: "from-red-50 to-rose-50",
},
{
  id: 10,
  name: "Cobeet Tea",
  category: "Teas",
  price: "₦3,000",
  description: "A blend of beetroot and spices for natural energy and vitality.",
  longDescription:
    "Cobeet Tea is a nutritious herbal blend made from beetroot, known for improving stamina, supporting heart health, and providing natural antioxidants. Ideal for boosting vitality naturally.",
  benefits: ["Energy", "Heart Health", "Antioxidants", "Stamina"],
  ingredients: ["Beetroot", "Natural Herbs"],
  image: product10,
  color: "from-red-50 to-pink-50",
},
{
  id: 11,
  name: "Cinnamon Plus Tea",
  category: "Teas",
  price: "₦3,000",
  description: "A healthy cinnamon-based tea for metabolism and wellness.",
  longDescription:
    "Cinnamon Plus Tea combines pure cinnamon and natural herbs to support metabolism, blood sugar balance, and digestion. A warm, soothing tea perfect for daily wellness.",
  benefits: ["Metabolism Support", "Blood Sugar Balance", "Digestive Health", "Antioxidants"],
  ingredients: ["Cinnamon", "Herbal Spices"],
  image: product11,
  color: "from-orange-50 to-amber-50",
},
{
  id: 12,
  name: "Ginseng Plus Tea",
  category: "Teas",
  price: "₦3,000",
  description: "A revitalizing tea blend that boosts energy and focus.",
  longDescription:
    "Ginseng Plus Tea is formulated to increase vitality, mental clarity, and natural energy. Made from pure ginseng root extracts and herbs, it supports immunity and overall wellness.",
  benefits: ["Energy", "Focus", "Immune Support", "Vitality"],
  ingredients: ["Ginseng Root", "Herbs"],
  image: product12,
  color: "from-yellow-50 to-orange-50",
},
{
  id: 13,
  name: "Black Seed Tea",
  category: "Teas",
  price: "₦3,000",
  description: "A herbal tea infused with black seed for immunity and wellness.",
  longDescription:
    "Black Seed Tea is made from the powerful black cumin seed, known for boosting immunity, supporting respiratory health, and offering strong antioxidant properties.",
  benefits: ["Immune Support", "Respiratory Health", "Antioxidants", "Wellness"],
  ingredients: ["Black Seed (Nigella Sativa)"],
  image: product13,
  color: "from-gray-50 to-slate-50",
},
{
  id: 14,
  name: "Green Vervain Tea",
  category: "Teas",
  price: "₦3,000",
  description: "A calming herbal tea ideal for stress relief and relaxation.",
  longDescription:
    "Green Vervain Tea is traditionally used for calming the nerves, improving sleep, and relieving stress. A soothing herbal infusion perfect for evening relaxation.",
  benefits: ["Stress Relief", "Relaxation", "Sleep Support", "Mental Calm"],
  ingredients: ["Green Vervain Leaves"],
  image: product14,
  color: "from-green-50 to-emerald-50",
},
// {
//   id: 15,
//   name: "Rich B Tea",
//   category: "Teas",
//   price: "₦4,000",
//   description: "A premium herbal blend for vitality, wellness, and strength.",
//   longDescription:
//     "Rich B Tea is a fortified herbal drink crafted to enhance vitality, energy, and immune strength. Made from natural roots and herbs traditionally used for wellness and stamina.",
//   benefits: ["Energy", "Vitality", "Immune Support", "Wellness"],
//   ingredients: ["Herbal Roots", "Spices"],
//   // image: product16,
//   color: "from-blue-50 to-indigo-50",
// },
{
    id: 16,
    name: "Tamba Mix Flour 500g",
    category: "Grains & Flours",
    price: "₦2000",
    description:
      "Premium processed tamba mix flour for healthy baking and cooking.",
    longDescription:
      "Tamba flour is a nutrient-dense traditional grain rich in fiber, minerals, and natural energy. It is easy to digest and ideal for preparing healthy meals such as swallow, porridge, and baked recipes. Known for its sustained energy release, Tamba is excellent for both children and adults seeking a wholesome, natural food source.",
    benefits: ["Fiber", "Energy", "Wellness", "Minerals"],
    ingredients: ["Tamba Mix Flour"],
    image: product4,
    color: "from-green-50 to-lime-50",
  },
  {
    id: 17,
    name: "Acha Grain Fonio 1kg",
    category: "Grains & Flours",
    price: "₦4,500",
    description:
      "Premium processed acha grain rich in fiber, minerals, and natural energy.",
    longDescription:
      "Acha Grain, also known as Fonio, is one of Africa’s oldest and most nutritious ancient grains. Naturally gluten-free and rich in fiber, iron, and essential amino acids, it provides clean, sustained energy and supports healthy digestion. Acha cooks quickly and is perfect for porridge, swallow, cereals, and a variety of healthy recipes.",
    benefits: ["High Fiber", "Energy", "Gluten-Free", "Easy to Digest"],
    ingredients: ["Acha Grain (Fonio)"],
    image: product7,
    color: "from-amber-50 to-orange-50",
  },
//   {
//   id: 18,
//   name: "Ginger Powder 75g",
//   category: "Powders",
//   price: "₦2,000",
//   description: "Pure ginger powder for tea, cooking, and natural remedies.",
//   longDescription:
//     "Ginger Powder 75g offers a strong, aromatic spice ideal for boosting digestion, immunity, and flavor. Perfect for tea, seasoning, and healthy home remedies.",
//   benefits: ["Digestive Health", "Anti-inflammatory", "Immune Support", "Natural Flavor"],
//   ingredients: ["Pure Ginger Root"],
//   // image: product19,
//   color: "from-yellow-50 to-orange-50",
// },
// {
//   id: 19,
//   name: "Ginger Powder 200g",
//   category: "Powders",
//   price: "₦4,000",
//   description: "A larger pack of pure ginger powder for daily use.",
//   longDescription:
//     "Ginger Powder 200g provides more value for families and regular users. Excellent for cooking, herbal tea, digestion, immunity, and overall wellness.",
//   benefits: ["Anti-inflammatory", "Digestion", "Immune Support", "Natural Wellness"],
//   ingredients: ["Pure Ginger Root"],
//   // image: product20,
//   color: "from-yellow-50 to-orange-50",
// },
{
    id: 20,
    name: "Lemon Grass Ginger & Lemon Tea",
    category: "Teas",
    price: "₦2,500",
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
    image: product20,
    color: "from-yellow-50 to-orange-50",
  },
   {
    id: 21,
    name: "Turmeric Tea",
    category: "Teas",
    price: "₦2,800",
    description:
      "A soothing blend of turmeric and spices that supports overall wellness and inflammation relief.",
    longDescription:
      "Our Turmeric Tea combines premium turmeric with natural spices to create a flavorful and health-boosting beverage. Known for its anti-inflammatory properties, this tea aids digestion, enhances immunity, and promotes overall wellness. Enjoy it hot or cold for daily vitality.",
    benefits: ["Anti-Inflammatory", "Boosts Immunity", "Supports Digestion", "Rich in Antioxidants"],
    ingredients: ["Turmeric", "Ginger", "Cinnamon", "Natural Herbs"],
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
    longDescription:
      "Our Moringa Tea is crafted from carefully selected moringa leaves, packed with vitamins and minerals. It helps boost energy, support metabolism, and strengthen immunity. Perfect for a refreshing drink any time of the day.",
    benefits: ["Rich in Antioxidants", "Energy Boost", "Supports Metabolism", "Immune Support"],
    ingredients: ["Moringa Leaves", "Lemon Grass", "Natural Herbs"],
    image: product22,
    color: "from-green-100 to-green-300",
  },
  {
    id: 23,
    name: "Dandelion Tea",
    category: "Teas",
    price: "₦2,600",
    description:
      "A herbal tea with a slightly earthy flavor that supports liver detoxification and digestive health.",
    longDescription:
      "Our Dandelion Tea is made from premium dandelion roots and leaves, known to aid liver detox, support digestion, and promote overall health. Enjoy this calming herbal tea for a natural wellness boost.",
    benefits: ["Liver Detox", "Digestive Aid", "Supports Weight Management", "Rich in Antioxidants"],
    ingredients: ["Dandelion Roots", "Dandelion Leaves", "Natural Herbs"],
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
    longDescription:
      "Our Noni Tea is prepared from ripe noni fruits, offering a unique flavor and powerful health benefits. This tea supports immunity, reduces inflammation, and promotes overall wellness. Ideal for daily consumption to stay healthy and energized.",
    benefits: ["Immune Support", "Anti-Inflammatory", "Overall Wellness", "Rich in Nutrients"],
    ingredients: ["Noni Fruit", "Natural Herbs"],
    image: product24,
    color: "from-green-200 to-green-400",
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
