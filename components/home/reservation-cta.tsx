"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
  "1:00 PM", "1:30 PM", "5:00 PM", "5:30 PM", 
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", 
  "8:00 PM", "8:30 PM", "9:00 PM"
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ReservationCTA() {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [guests, setGuests] = useState<number>(2);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    // For now, we'll just show a success message
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      // Reset form
      setDate("");
      setTime("");
      setGuests(2);
      setName("");
      setEmail("");
      setPhone("");
      setSpecialRequests("");
    }, 5000);
  };

  return (
    <section className="section bg-restaurant-cream relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-restaurant-primary font-medium mb-2 inline-block">
              Reserve Your Table
            </span>
            <h2 className="mb-6">A Delightful Dining Experience Awaits</h2>
            <p className="mb-8">
              Whether you're planning a romantic dinner, family gathering, or business meeting, 
              we're ready to serve you. Reserve your table now to ensure availability and let 
              us prepare a memorable dining experience for you and your guests.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-restaurant-primary/10 p-2 rounded-full mr-4">
                  <Clock size={20} className="text-restaurant-primary" />
                </div>
                <span>Open 7 days a week, breakfast, lunch and dinner service</span>
              </li>
              <li className="flex items-center">
                <div className="bg-restaurant-primary/10 p-2 rounded-full mr-4">
                  <Users size={20} className="text-restaurant-primary" />
                </div>
                <span>Accommodations for parties of all sizes</span>
              </li>
              <li className="flex items-center">
                <div className="bg-restaurant-primary/10 p-2 rounded-full mr-4">
                  <Calendar size={20} className="text-restaurant-primary" />
                </div>
                <span>Special events and private dining available</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-medium mb-6 text-center">Make a Reservation</h3>
            
            {success ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 text-center">
                <p className="font-medium">Thank you for your reservation!</p>
                <p className="text-sm mt-1">We will confirm your booking shortly.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-restaurant-dark mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-restaurant-dark mb-1">
                    Time
                  </label>
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                    required
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="guests" className="block text-sm font-medium text-restaurant-dark mb-1">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                  required
                >
                  {guestOptions.map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="11">More than 10 (We'll contact you)</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-restaurant-dark mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-restaurant-dark mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-restaurant-dark mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="requests" className="block text-sm font-medium text-restaurant-dark mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="requests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={cn(
                  "w-full py-3 rounded-md font-medium transition-all duration-300",
                  "bg-restaurant-primary text-white hover:bg-restaurant-primary/90"
                )}
              >
                Confirm Reservation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}