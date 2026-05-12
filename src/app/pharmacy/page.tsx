// app/pharmacy/page.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Plus,
  Minus,
  X,
  Trash2,
  Home,
  Info,
  Phone,
  Pill,
  Star,
  TrendingUp,
  Clock,
  Heart,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Package,
  Truck,
  ShieldCheck,
  Percent,
  AlertCircle,
  Menu,
} from "lucide-react";
import {
  products,
  categories,
  sortOptions,
  availabilityOptions,
  priceRanges,
  type Product,
} from "../pharmacy/pharmadata";

interface CartItem extends Product {
  quantity: number;
}

const whatsappNumber = "919123456789";



// ---------------------------------------------------------------------------
// FloatingActionCard – fixed bottom-right with Cart + Wishlist buttons
// ---------------------------------------------------------------------------
function FloatingActionCard({
  cartCount,
  wishlistCount,
  onCartClick,
  onWishlistClick,
}: {
  cartCount: number;
  wishlistCount: number;
  onCartClick: () => void;
  onWishlistClick: () => void;
}) {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-5 z-30 flex flex-col gap-3">
      {/* Wishlist Button */}
      <div className="relative group">
        <button
          onClick={onWishlistClick}
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl border border-rose-100 text-rose-500 transition-all duration-200 hover:bg-rose-500 hover:text-white hover:scale-110 hover:shadow-rose-500/30 hover:shadow-2xl"
          aria-label="Open wishlist"
        >
          <Heart className="h-6 w-6" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-xs font-bold text-white shadow-md">
              {wishlistCount > 9 ? "9+" : wishlistCount}
            </span>
          )}
        </button>
        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-zinc-800 px-2.5 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Wishlist
        </span>
      </div>

      {/* Cart Button */}
      <div className="relative group">
        <button
          onClick={onCartClick}
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 shadow-xl shadow-teal-500/30 text-white transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:shadow-teal-500/40"
          aria-label="Open cart"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-teal-600 shadow-md border border-teal-100">
              {cartCount > 9 ? "9+" : cartCount}
            </span>
          )}
        </button>
        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-zinc-800 px-2.5 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Cart
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Product Card Component
// ---------------------------------------------------------------------------
function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
  isInCart,
  cartQuantity,
}: {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: boolean;
  isInCart: boolean;
  cartQuantity: number;
}) {
  const discountPercentage =
    product.discount ||
    Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-teal-400/0 via-teal-400/0 to-blue-400/0 opacity-0 blur transition-all duration-300 group-hover:from-teal-400/20 group-hover:via-teal-400/10 group-hover:to-blue-400/20 group-hover:opacity-100" />

      <div className="relative h-full overflow-hidden rounded-2xl border border-zinc-200/60 bg-white p-4 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        {/* Badges */}
        <div className="absolute left-4 top-4 z-10 flex flex-col gap-1.5">
          {product.popular && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-1 text-xs font-bold text-white shadow-md">
              <TrendingUp className="h-3 w-3" />
              Popular
            </span>
          )}
          {product.prescription && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-red-500 to-rose-500 px-2.5 py-1 text-xs font-bold text-white shadow-md">
              <AlertCircle className="h-3 w-3" />
              Rx Only
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => onToggleWishlist(product)}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md transition-all hover:scale-110"
        >
          <Heart
            className={`h-4 w-4 transition-all ${isInWishlist ? "fill-rose-500 text-rose-500" : "text-zinc-400"
              }`}
          />
        </button>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute right-4 top-14 z-10">
            <span className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-0.5 text-xs font-bold text-white shadow-md">
              {discountPercentage}% OFF
            </span>
          </div>
        )}

        {/* Product Image */}
        <div className="relative mb-4 flex justify-center">
          <div className="relative h-36 w-36 overflow-hidden rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 p-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 150px"
            />
            {!product.inStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-700">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold text-zinc-800 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs text-zinc-500">{product.manufacturer}</p>
          </div>
          <p className="text-xs text-zinc-500 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="ml-0.5 text-xs font-medium text-zinc-600">
                  {product.rating}
                </span>
              </div>
              <span className="text-xs text-zinc-400">({product.reviews})</span>
            </div>
          )}

          {/* Price and Add to Cart */}
          <div className="flex items-end justify-between pt-2">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-teal-600">
                  ₹{product.price}
                </span>
                <span className="text-xs text-zinc-400 line-through">
                  ₹{product.mrp}
                </span>
              </div>
              <span className="text-xs text-zinc-400">{product.packSize}</span>
            </div>

            {product.inStock ? (
              <div className="flex items-center gap-1">
                {isInCart && (
                  <span className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-teal-50 text-sm font-semibold text-teal-600">
                    {cartQuantity}
                  </span>
                )}
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-teal-500/25 transition-all hover:shadow-lg hover:shadow-teal-500/35 hover:scale-105"
                >
                  <Plus className="h-4 w-4" />
                  Add
                </button>
              </div>
            ) : (
              <button
                disabled
                className="flex items-center gap-1.5 rounded-full bg-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-500 cursor-not-allowed"
              >
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Bottom Checkout Bar
// ---------------------------------------------------------------------------
function BottomCheckoutBar({
  cartItems,
  total,
  onCheckout,
}: {
  cartItems: CartItem[];
  total: number;
  onCheckout: () => void;
}) {
  if (cartItems.length === 0) return null;

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-xl border-t border-teal-100 shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500">{itemCount} item(s) in cart</p>
            <p className="text-2xl font-bold text-teal-600">₹{total}</p>
          </div>
          <button
            onClick={onCheckout}
            className="flex items-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/35 hover:scale-105"
          >
            <span>Proceed to Checkout</span>
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Cart Drawer – activeTab is now passed as a prop
// ---------------------------------------------------------------------------
function CartDrawer({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  cartItems,
  wishlistItems,
  onUpdateQuantity,
  onRemoveItem,
  onMoveToWishlist,
  onAddToCart,
  onToggleWishlist,
  onCheckout,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "cart" | "wishlist";
  setActiveTab: (tab: "cart" | "wishlist") => void;
  cartItems: CartItem[];
  wishlistItems: Product[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onMoveToWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onCheckout: () => void;
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryCharge = total > 500 ? 0 : 50;
  const grandTotal = total + deliveryCharge;

  const generateWhatsAppMessage = () => {
    const itemsList = cartItems
      .map(
        (item) =>
          `- ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
      )
      .join("\n");

    const message = `🛒 *CrossMedi Order*\n\n${itemsList}\n\n💰 Subtotal: ₹${total}\n🚚 Delivery: ${deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`
      }\n📦 *Total: ₹${grandTotal}*\n\n👤 Name:\n📍 Address:\n📞 Phone:\n\nPlease confirm my order. Thank you!`;

    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    onCheckout();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col">
          {/* Header with Tabs */}
          <div className="border-b border-zinc-100">
            <div className="flex items-center justify-between p-5 pb-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600">
                  {activeTab === "cart" ? (
                    <ShoppingCart className="h-5 w-5 text-white" />
                  ) : (
                    <Heart className="h-5 w-5 text-white" />
                  )}
                </div>
                <h2 className="text-lg font-bold text-zinc-800">Your Items</h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-5">
              <button
                onClick={() => setActiveTab("cart")}
                className={`relative px-4 py-2 text-sm font-medium transition-all ${activeTab === "cart"
                    ? "text-teal-600"
                    : "text-zinc-500 hover:text-zinc-700"
                  }`}
              >
                Cart ({cartItems.length})
                {activeTab === "cart" && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-teal-500 to-blue-500" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("wishlist")}
                className={`relative px-4 py-2 text-sm font-medium transition-all ${activeTab === "wishlist"
                    ? "text-rose-600"
                    : "text-zinc-500 hover:text-zinc-700"
                  }`}
              >
                Wishlist ({wishlistItems.length})
                {activeTab === "wishlist" && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-rose-500 to-pink-500" />
                )}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {activeTab === "cart" ? (
              cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-teal-50">
                    <ShoppingCart className="h-10 w-10 text-teal-400" />
                  </div>
                  <p className="text-lg font-medium text-zinc-600">
                    Your cart is empty
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Add items to get started
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 rounded-xl border border-zinc-100 bg-white p-3 shadow-sm"
                    >
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-teal-50">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-sm font-semibold text-zinc-800">
                              {item.name}
                            </h4>
                            <p className="text-xs text-zinc-500">
                              {item.packSize}
                            </p>
                            <p className="text-xs font-medium text-teal-600">
                              ₹{item.price}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => onMoveToWishlist(item)}
                              className="rounded-full p-1 text-zinc-400 transition-colors hover:bg-rose-50 hover:text-rose-500"
                            >
                              <Heart className="h-3.5 w-3.5" />
                            </button>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="rounded-full p-1 text-zinc-400 transition-colors hover:bg-red-50 hover:text-red-500"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-teal-200 text-teal-600 transition-colors hover:bg-teal-50"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-teal-200 text-teal-600 transition-colors hover:bg-teal-50"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <span className="ml-auto text-sm font-semibold text-teal-600">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : wishlistItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-rose-50">
                  <Heart className="h-10 w-10 text-rose-400" />
                </div>
                <p className="text-lg font-medium text-zinc-600">
                  Your wishlist is empty
                </p>
                <p className="mt-1 text-sm text-zinc-400">Save items you love</p>
              </div>
            ) : (
              <div className="space-y-3">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 rounded-xl border border-zinc-100 bg-white p-3 shadow-sm"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-teal-50">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-800">
                            {item.name}
                          </h4>
                          <p className="text-xs text-zinc-500">{item.packSize}</p>
                          <p className="text-sm font-bold text-teal-600">
                            ₹{item.price}
                          </p>
                        </div>
                        <button
                          onClick={() => onToggleWishlist(item)}
                          className="rounded-full p-1 text-rose-500 transition-colors hover:bg-rose-50"
                        >
                          <Heart className="h-4 w-4 fill-rose-500" />
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          onAddToCart(item);
                          onToggleWishlist(item);
                        }}
                        className="mt-2 w-full rounded-full bg-gradient-to-r from-teal-500 to-blue-600 py-1.5 text-xs font-semibold text-white"
                      >
                        Move to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer – only show on Cart tab with items */}
          {activeTab === "cart" && cartItems.length > 0 && (
            <div className="border-t border-zinc-100 bg-zinc-50/50 p-5">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-600">Subtotal</span>
                  <span className="font-medium">₹{total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-600">Delivery</span>
                  <span
                    className={deliveryCharge === 0 ? "text-green-600" : "font-medium"}
                  >
                    {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                  </span>
                </div>
                {total < 500 && (
                  <p className="text-xs text-amber-600">
                    Add ₹{500 - total} more for free delivery
                  </p>
                )}
                <div className="flex justify-between border-t border-zinc-200 pt-2 text-base font-bold">
                  <span className="text-zinc-800">Total</span>
                  <span className="text-teal-600">₹{grandTotal}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:shadow-xl hover:shadow-green-500/35 hover:scale-[1.02]"
              >
                <span className="text-lg">💬</span>
                Checkout via WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Main Pharmacy Page
// ---------------------------------------------------------------------------
export default function PharmacyPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"cart" | "wishlist">("cart");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [availability, setAvailability] = useState("all");
  const [priceRange, setPriceRange] = useState<{
    min: number;
    max: number | null;
  }>({ min: 0, max: null });
  const [showPrescriptionOnly, setShowPrescriptionOnly] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("crossmedi-cart");
    const savedWishlist = localStorage.getItem("crossmedi-wishlist");
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedWishlist) setWishlistItems(JSON.parse(savedWishlist));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("crossmedi-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("crossmedi-wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  };

  const moveToWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
    removeItem(product.id);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.genericName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (availability === "in-stock") {
      filtered = filtered.filter((p) => p.inStock);
    } else if (availability === "prescription") {
      filtered = filtered.filter((p) => p.prescription);
    } else if (availability === "otc") {
      filtered = filtered.filter((p) => !p.prescription);
    }

    filtered = filtered.filter((p) => {
      if (priceRange.max === null) return p.price >= priceRange.min;
      return p.price >= priceRange.min && p.price <= priceRange.max!;
    });

    if (showPrescriptionOnly) {
      filtered = filtered.filter((p) => p.prescription);
    }

    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "discount":
        filtered = [...filtered].sort(
          (a, b) => (b.discount || 0) - (a.discount || 0)
        );
        break;
      case "rating":
        filtered = [...filtered].sort(
          (a, b) => (b.rating || 0) - (a.rating || 0)
        );
        break;
      default:
        filtered = [...filtered].sort(
          (a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
        );
    }

    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    availability,
    priceRange,
    showPrescriptionOnly,
    sortBy,
  ]);

  const openCart = () => {
    setActiveTab("cart");
    setIsCartOpen(true);
  };

  const openWishlist = () => {
    setActiveTab("wishlist");
    setIsCartOpen(true);
  };

  return (
    <>

      {/* ── Main content ── */}
      <main className="min-h-screen bg-gradient-to-b from-teal-50/30 via-white to-blue-50/30 pt-16 lg:pt-20 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Hero Section */}
          <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-teal-500 via-teal-600 to-blue-600 p-8 lg:p-12">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white mb-4">
                <Truck className="h-3.5 w-3.5" />
                Free Delivery on orders above ₹500
              </div>
              <h1 className="text-3xl font-bold text-white lg:text-4xl">
                Online Pharmacy
              </h1>
              <p className="mt-2 max-w-lg text-teal-50">
                Order medicines and health products online. Fast delivery to
                your doorstep.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
                  <Clock className="h-3.5 w-3.5" />
                  Delivery in 2-4 hours
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  100% Genuine Medicines
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
                  <Percent className="h-3.5 w-3.5" />
                  Up to 28% OFF
                </span>
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 400 200">
                <circle cx="350" cy="50" r="80" fill="white" />
                <circle cx="300" cy="150" r="50" fill="white" />
                <circle cx="380" cy="120" r="30" fill="white" />
              </svg>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-6 space-y-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search medicines, generic names..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-zinc-200 bg-white py-3 pl-11 pr-4 text-sm shadow-sm transition-all focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-600"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-600 transition-all hover:bg-zinc-50"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {showFilters ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      Availability
                    </label>
                    <select
                      value={availability}
                      onChange={(e) => setAvailability(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                    >
                      {availabilityOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      Price Range
                    </label>
                    <select
                      value={`${priceRange.min}-${priceRange.max}`}
                      onChange={(e) => {
                        const [min, max] = e.target.value
                          .split("-")
                          .map(Number);
                        setPriceRange({ min, max: max || null });
                      }}
                      className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                    >
                      <option value="0-null">All Prices</option>
                      {priceRanges.map((range) => (
                        <option
                          key={range.label}
                          value={`${range.min}-${range.max}`}
                        >
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-end">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={showPrescriptionOnly}
                        onChange={(e) =>
                          setShowPrescriptionOnly(e.target.checked)
                        }
                        className="h-4 w-4 rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm text-zinc-700">
                        Prescription Required Only
                      </span>
                    </label>
                  </div>

                  <div className="flex items-end justify-end">
                    <button
                      onClick={() => {
                        setAvailability("all");
                        setPriceRange({ min: 0, max: null });
                        setShowPrescriptionOnly(false);
                        setSortBy("popular");
                      }}
                      className="text-sm text-teal-600 hover:underline"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Category Pills */}
          <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${selectedCategory === category.id
                    ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md"
                    : "bg-white text-zinc-600 hover:bg-teal-50 border border-zinc-200"
                  }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-zinc-500">
              Showing{" "}
              <span className="font-medium text-zinc-700">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>
            {selectedCategory !== "all" && (
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-sm text-teal-600 hover:underline"
              >
                Clear Category
              </button>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => {
                const cartItem = cartItems.find(
                  (item) => item.id === product.id
                );
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onToggleWishlist={toggleWishlist}
                    isInWishlist={wishlistItems.some(
                      (item) => item.id === product.id
                    )}
                    isInCart={!!cartItem}
                    cartQuantity={cartItem?.quantity || 0}
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <Package className="h-8 w-8 text-teal-400" />
              </div>
              <p className="text-lg font-medium text-zinc-600">
                No products found
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>

        {/* Bottom Checkout Bar */}
        <BottomCheckoutBar
          cartItems={cartItems}
          total={cartTotal}
          onCheckout={openCart}
        />
      </main>

      {/* ── Floating Action Card (Cart + Wishlist) ── */}
      <FloatingActionCard
        cartCount={cartCount}
        wishlistCount={wishlistItems.length}
        onCartClick={openCart}
        onWishlistClick={openWishlist}
      />

      {/* ── Cart & Wishlist Drawer ── */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onMoveToWishlist={moveToWishlist}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        onCheckout={() => setIsCartOpen(false)}
      />

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}