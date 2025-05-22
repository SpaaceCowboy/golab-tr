"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { gallery } from "@/lib/data";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const categories = Array.from(new Set(gallery.map(item => item.category)));
  
  const filteredGallery = selectedCategory
    ? gallery.filter(item => item.category === selectedCategory)
    : gallery;
    
  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const selectedItem = selectedImage !== null 
    ? gallery.find(item => item.id === selectedImage) 
    : null;

  return (
    <main>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Gallery Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-white mb-4">Our Gallery</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Take a visual journey through our restaurant, cuisine, and memorable moments
          </p>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="section bg-restaurant-light">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === null
                  ? "bg-restaurant-primary text-white"
                  : "bg-white text-restaurant-dark hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-restaurant-primary text-white"
                    : "bg-white text-restaurant-dark hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-lg h-64 cursor-pointer group"
                  onClick={() => openLightbox(item.id)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-medium">{item.title}</h3>
                    <span className="text-white/80 text-sm">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* No Results Message */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No images found in the selected category.</p>
              <button 
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-restaurant-primary font-medium hover:underline"
              >
                View all images
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black transition-colors duration-300"
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>
              
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="text-center text-white mt-4">
                <h3 className="text-xl font-medium">{selectedItem.title}</h3>
                <p className="text-white/80">{selectedItem.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </main>
  );
}