import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MenuList from "@/components/menu/menu-list";
import { categories } from "@/lib/data";

export const metadata = {
  title: 'Menu | GoLab Restaurant',
  description: 'Explore our diverse menu featuring authentic cuisine prepared with the finest ingredients.',
};

export default function MenuPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Menu Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-white mb-4">Our Menu</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Discover our chef-crafted selections featuring the finest seasonal ingredients 
            and authentic flavors for an unforgettable dining experience.
          </p>
        </div>
      </section>
      
      {/* Categories */}
      <section className="section bg-restaurant-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-restaurant-primary font-medium mb-2 inline-block">
              Culinary Selections
            </span>
            <h2>Explore Our Categories</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                key={category.id}
                className="group"
              >
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu List by Categories */}
      <MenuList />
      
      {/* Dietary Information */}

      
      <Footer />
    </main>
  );
}