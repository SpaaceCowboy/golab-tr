"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { StarIcon } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section bg-restaurant-secondary text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-restaurant-primary font-medium mb-2 inline-block">
            Guest Experiences
          </span>
          <h2 className="text-white mb-4">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto text-white/80">
            We take pride in creating memorable dining experiences for our guests.
            Here's what some of them have to say about their time at GoLab Restaurant.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-restaurant-primary">
                {testimonials[currentIndex].image && (
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              
              <div className="flex mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <StarIcon key={i} size={20} fill="#C8A97E" color="#C8A97E" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div>
                <h4 className="text-lg font-medium text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-white/70">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-restaurant-primary w-8"
                    : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}