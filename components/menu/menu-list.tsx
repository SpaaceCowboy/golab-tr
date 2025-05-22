"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { menuItems } from "@/lib/data";

export default function MenuList() {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [...new Set(menuItems.map(item => item.category))];
  
  const filteredItems = searchTerm
    ? menuItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.ingredients && item.ingredients.some(ing => 
          ing.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      )
    : menuItems;
    
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search menu items, ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-12 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
        
        {/* Display search results if searching */}
        {searchTerm && (
          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-8">Search Results</h2>
            
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No items found matching "{searchTerm}"</p>
                <button 
                  onClick={() => setSearchTerm("")}
                  className="mt-4 text-restaurant-primary font-medium hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredItems.map((menuItem) => (
                  <motion.div 
                    key={menuItem.id}
                    variants={item}
                    className="flex bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-1/3 relative">
                      <Image
                        src={menuItem.image}
                        alt={menuItem.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium">{menuItem.name}</h3>
                        <span className="text-restaurant-primary font-medium">{menuItem.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 mb-2">{menuItem.description}</p>
                      {menuItem.ingredients && (
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">Ingredients: </span>
                          {menuItem.ingredients.join(', ')}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        )}
        
        {/* Menu by Category */}
        {!searchTerm && categories.map((category) => {
          const categoryItems = menuItems.filter(item => item.category === category);
          
          return (
            <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-medium mb-8 pb-2 border-b border-restaurant-primary/30">{category}</h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {categoryItems.map((menuItem) => (
                  <motion.div 
                    key={menuItem.id}
                    variants={item}
                    className="flex bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-1/3 relative">
                      <Image
                        src={menuItem.image}
                        alt={menuItem.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium">{menuItem.name}</h3>
                        <span className="text-restaurant-primary font-medium">{menuItem.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 mb-2">{menuItem.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {menuItem.dietaryInfo && menuItem.dietaryInfo.map((info, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-restaurant-primary/10 text-restaurant-primary rounded-full">
                            {info}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}