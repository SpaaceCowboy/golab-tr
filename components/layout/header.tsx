"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md py-3 dark:bg-restaurant-dark"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-restaurant-dark dark:text-white">
                GoLab
              </span>
              <span className="text-2xl font-light text-restaurant-primary">
                Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-restaurant-dark hover:text-restaurant-primary dark:text-white dark:hover:text-restaurant-primary text-sm font-medium relative gold-underline transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="flex items-center text-restaurant-dark hover:text-restaurant-primary dark:text-white dark:hover:text-restaurant-primary text-sm transition-colors duration-300"
            >
              <PhoneCall size={16} className="mr-2" />
              <span>05354124005</span>
            </Link>
            <Link href="https://tgoyemek.com/restoranlar/195621" className="btn-primary">
              Order Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-restaurant-dark dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-restaurant-dark shadow-lg"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-restaurant-dark hover:text-restaurant-primary dark:text-white dark:hover:text-restaurant-primary text-lg font-medium py-2 border-b border-gray-100 dark:border-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center text-restaurant-dark hover:text-restaurant-primary dark:text-white dark:hover:text-restaurant-primary text-lg py-2 border-b border-gray-100 dark:border-gray-800"
                >
                  <PhoneCall size={18} className="mr-2" />
                  <span>(555) 123-4567</span>
                </Link>
                <Link
                  href="/order"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary text-center"
                >
                  Order Online
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}