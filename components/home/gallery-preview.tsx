"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { gallery } from "@/lib/data";

export default function GalleryPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Only show 6 images for the preview
  const previewImages = gallery.slice(0, 6);
  
  return (
    <section className="section bg-restaurant-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-restaurant-primary font-medium mb-2 inline-block">
            Visual Journey
          </span>
          <h2 className="mb-4">Gallery</h2>
          <p className="max-w-2xl mx-auto">
            Take a visual tour of our restaurant, signature dishes, and special events. Each 
            image captures the essence of the GoLab dining experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewImages.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg h-64 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-60' : 'opacity-0'
              }`}></div>
              
              <div className={`absolute inset-0 flex flex-col justify-center items-center text-white p-6 transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <span className="text-sm text-white/80">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/gallery" className="btn-outline inline-flex items-center">
            <span>View Full Gallery</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}