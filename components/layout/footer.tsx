import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { location } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-restaurant-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <Link href="/">
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-white">GoLab</span>
                <span className="text-2xl font-light text-restaurant-primary">
                  Restaurant
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Experience the finest dining with authentic flavors, warm ambiance, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/golabrestaurant/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-restaurant-primary transition-colors duration-300"
              >
                <Instagram size={18} />
              </Link>
              {/* <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-restaurant-primary transition-colors duration-300"
              >
                <Facebook size={18} />
              </Link> */}
              <Link 
                href="https://www.youtube.com/@golabrestaurant"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-restaurant-primary transition-colors duration-300"
              >
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-restaurant-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-restaurant-primary transition-colors duration-300">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-restaurant-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-restaurant-primary transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-restaurant-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-300 hover:text-restaurant-primary transition-colors duration-300">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-restaurant-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {location.address}, {location.city}, {location.state} {location.zip}
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-restaurant-primary flex-shrink-0" />
                <Link href={`tel:${location.phone}`} className="text-gray-300 hover:text-restaurant-primary transition-colors duration-300">
                  {location.phone}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-restaurant-primary flex-shrink-0" />
                <Link href={`mailto:${location.email}`} className="text-gray-300 hover:text-restaurant-primary transition-colors duration-300">
                  {location.email}
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Opening Hours</h3>
            <ul className="space-y-3">
              
                <li  className="flex items-start">
                  <Clock size={18} className="mr-3 text-restaurant-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium"></span>
                    <div className="text-gray-300">
                    Every Day
                    10:00AM - 00:30PM
                    </div>
                  </div>
                </li>
            
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GoLab Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 text-sm hover:text-restaurant-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 text-sm hover:text-restaurant-primary transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}