import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { staff } from "@/lib/data";

export const metadata = {
  title: 'About Us | GoLab Restaurant',
  description: 'Learn about our story, our team, and our commitment to exceptional dining experiences.',
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-white mb-4">About Us</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Our journey, our passion, and our commitment to culinary excellence
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-restaurant-primary font-medium mb-2 inline-block">
                Our Story
              </span>
              <h2 className="mb-6">A Tradition of Excellence Since 2022</h2>
              <p className="mb-4">
              The Story Of Golab Restaurant begins with the fusion of two culinary cultures, Iran and Turkey.
              </p>
              <p className="mb-4">
              Golab is more than just a restaurant, it is a memorable experience.
              </p>
              <p className="mb-4">
              In the Bakırköy district of Istanbul, on the seashore, there is a restaurant with a unique view. This restaurant is called Golab. Golab is a restaurant with a rich menu inspired by Turkish, Iranian, and modern international cuisines. The founders of this restaurant decided to open Golab to promote the richness of Iranian and Turkish culinary culture and to offer an unforgettable experience to their guests.
              </p>
              <p className="mb-4">
              Golab’s menu includes flavors from international cuisines as well as traditional Turkish and Iranian dishes. Golab’s renowned and professional chef uses the highest quality ingredients and modern magical techniques when preparing his dishes.
              </p>
              <p className="mb-4">
              Golab is popular with both local and foreign guests. The restaurant’s atmosphere is warm and inviting. The restaurant staff is friendly and professional.
              </p>
              <p>
              Golab is one of the most popular Iranian restaurants in Istanbul with its full menu that appeals to all tastes.
              </p>
            </div>
            <div className="relative fancy-border p-4">
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="GoLab Restaurant Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section bg-restaurant-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-restaurant-primary font-medium mb-2 inline-block">
              Our Philosophy
            </span>
            <h2 className="mb-4">Guided by Our Values</h2>
            <p className="max-w-2xl mx-auto">
              At GoLab Restaurant, our approach to dining is shaped by core principles that 
              influence everything from our menu to our service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-restaurant-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-restaurant-primary">
                  <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                  <path d="m7 16.5-4.74-2.85"></path>
                  <path d="m7 16.5 5-3"></path>
                  <path d="M7 16.5v5.17"></path>
                  <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                  <path d="m17 16.5-5-3"></path>
                  <path d="m17 16.5 4.74-2.85"></path>
                  <path d="M17 16.5v5.17"></path>
                  <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                  <path d="M12 8 7.26 5.15"></path>
                  <path d="m12 8 4.74-2.85"></path>
                  <path d="M12 13.5V8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Quality Ingredients</h3>
              <p className="text-center">
                We source the finest local and imported ingredients, working directly with 
                farmers and suppliers who share our commitment to quality and sustainability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-restaurant-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-restaurant-primary">
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M12 2v2"></path>
                  <path d="M12 22v-2"></path>
                  <path d="m17 20.66-1-1.73"></path>
                  <path d="M11 10.27 7 3.34"></path>
                  <path d="m20.66 17-1.73-1"></path>
                  <path d="m3.34 7 1.73 1"></path>
                  <path d="M14 12h8"></path>
                  <path d="M2 12h2"></path>
                  <path d="m20.66 7-1.73 1"></path>
                  <path d="m3.34 17 1.73-1"></path>
                  <path d="m17 3.34-1 1.73"></path>
                  <path d="m7 20.66 1-1.73"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Culinary Artistry</h3>
              <p className="text-center">
                Our team of talented chefs combines traditional techniques with innovative 
                approaches to create dishes that are as visually stunning as they are delicious.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-restaurant-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-restaurant-primary">
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Exceptional Service</h3>
              <p className="text-center">
                We believe dining is about more than just food—it's an experience. Our attentive 
                staff ensures every guest feels welcomed, valued, and completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team 
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-restaurant-primary font-medium mb-2 inline-block">
              The Faces Behind the Flavors
            </span>
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="max-w-2xl mx-auto">
              Our dedicated team of culinary professionals brings passion, creativity, and 
              expertise to every aspect of your dining experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staff.map((member) => (
              <div key={member.id} className="bg-restaurant-light rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-restaurant-primary font-medium mb-4">{member.role}</p>
                  <p className="text-restaurant-dark/80">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
      
      {/* Awards & Recognition 
      <section className="section bg-restaurant-secondary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-restaurant-primary font-medium mb-2 inline-block">
              Excellence Recognized
            </span>
            <h2 className="text-white mb-4">Awards & Achievements</h2>
            <p className="max-w-2xl mx-auto text-white/80">
              We're honored to have received recognition for our commitment to culinary excellence 
              and outstanding dining experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-restaurant-primary text-4xl font-serif mb-4">★★★★★</div>
              <h3 className="text-xl font-medium text-white mb-2">Culinary Excellence Award</h3>
              <p className="text-white/70 text-sm">Regional Food Critics Association, 2024</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-restaurant-primary text-4xl font-serif mb-4">🏆</div>
              <h3 className="text-xl font-medium text-white mb-2">Best Fine Dining Experience</h3>
              <p className="text-white/70 text-sm">City Lifestyle Magazine, 2023</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-restaurant-primary text-4xl font-serif mb-4">🌟</div>
              <h3 className="text-xl font-medium text-white mb-2">Chef of the Year</h3>
              <p className="text-white/70 text-sm">Culinary Institute Recognition, 2022</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-restaurant-primary text-4xl font-serif mb-4">👨‍🍳</div>
              <h3 className="text-xl font-medium text-white mb-2">Innovative Menu Design</h3>
              <p className="text-white/70 text-sm">International Food & Beverage Forum, 2021</p>
            </div>
          </div>
        </div>
      </section>
      */}
      
      <Footer />
    </main>
  );
}