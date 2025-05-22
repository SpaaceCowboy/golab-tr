"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { location } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    // For demo purposes, we'll just show a success message
    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <main>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Contact Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-white mb-4">Contact Us</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Have a question or want to make a reservation? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-restaurant-primary font-medium mb-2 inline-block">
                Get in Touch
              </span>
              <h2 className="mb-6">Contact Information</h2>
              <p className="mb-8">
                We're here to assist you with any questions, concerns, or feedback you may have.
                Reach out to us through any of the following methods, and we'll respond promptly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-restaurant-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="text-restaurant-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Address</h3>
                    <p className="text-restaurant-dark/80">
                      {location.address}, {location.city}, {location.state} {location.zip}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-restaurant-primary/10 p-3 rounded-full mr-4">
                    <Phone className="text-restaurant-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-restaurant-dark/80">
                      <a href={`tel:${location.phone}`} className="hover:text-restaurant-primary">
                        {location.phone}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-restaurant-primary/10 p-3 rounded-full mr-4">
                    <Mail className="text-restaurant-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-restaurant-dark/80">
                      <a href={`mailto:${location.email}`} className="hover:text-restaurant-primary">
                        {location.email}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-restaurant-primary/10 p-3 rounded-full mr-4">
                    <Clock className="text-restaurant-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Hours</h3>
                    <ul className="text-restaurant-dark/80 space-y-1">
                      {location.hours.map((hour, index) => (
                        <li key={index} className="flex justify-between">
                          <span className="font-medium mr-8">{hour.day}:</span>
                          <span>{hour.open} - {hour.close}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-restaurant-light p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-medium mb-6">Send Us a Message</h2>
              
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm mt-1">We will get back to you as soon as possible.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-restaurant-dark mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-restaurant-dark mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-restaurant-dark mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-restaurant-dark mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering Services</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-restaurant-dark mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-restaurant-primary text-white px-6 py-3 rounded-md flex items-center justify-center font-medium hover:bg-restaurant-primary/90 transition-colors duration-300"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[500px] relative">
        <iframe 
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043791!2d${location.longitude}!3d${location.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2s123%20Cuisine%20St%2C%20Los%20Angeles%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1616000000000!5m2!1sen!2sus`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="GoLab Restaurant Location"
        ></iframe>
      </section>
      
      <Footer />
    </main>
  );
}