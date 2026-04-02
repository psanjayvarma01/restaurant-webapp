import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Heart, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Every dish is prepared with love and dedication to culinary excellence.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We source only the finest ingredients from trusted local suppliers.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in creating memorable experiences that bring people together.",
    },
  ];

  const team = [
    {
      name: "Shashidhar Poloju",
      role: "Executive Chef",
      description: "With over 20 years of experience in Michelin-starred restaurants across Europe.",
    },
    {
      name: "Narsimhaa Redddy",
      role: "Pastry Chef",
      description: "Award-winning pastry chef specializing in contemporary dessert artistry.",
    },
    {
      name: "Sai Nithin",
      role: "Sous Chef",
      description: "Trained in classical French cuisine with a modern innovative approach.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2hlZiUyMGNvb2tpbmclMjBraXRjaGVufGVufDF8fHx8MTc3NTE0MTI5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Chef cooking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif italic mb-4">Our Story</h1>
          <p className="text-xl text-gray-200">
            A passion for food, a commitment to excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif italic text-gray-900 mb-6">
              Welcome to Kridhani's Kitchen
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Founded in 2015, Kridhani's Kitchen began with a simple vision: to create a dining
                experience that celebrates the art of fine cuisine while honoring the
                traditions of culinary excellence. Our journey started in a small kitchen
                with big dreams and an unwavering commitment to quality.
              </p>
              <p>
                Today, we're proud to be recognized as one of the premier dining destinations
                in the city. Our team of talented chefs combines classical techniques with
                innovative approaches, creating dishes that tell a story with every bite.
              </p>
              <p>
                We believe that great food brings people together. Whether you're celebrating
                a special occasion or simply enjoying an evening out, we're honored to be
                part of your memorable moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-700 rounded-full mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The culinary artists behind your unforgettable dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-amber-200 mx-auto mb-6"></div>
                <h3 className="text-xl text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-700 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif italic text-gray-900 mb-12">
            Awards & Recognition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-md">
              <div className="text-amber-600 mb-4">
                <Award size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Best Fine Dining 2025</h3>
              <p className="text-gray-600">Food & Wine Magazine</p>
            </div>

            <div className="bg-white p-8 shadow-md">
              <div className="text-amber-600 mb-4">
                <Award size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Chef's Choice Award 2024</h3>
              <p className="text-gray-600">Culinary Excellence Foundation</p>
            </div>

            <div className="bg-white p-8 shadow-md">
              <div className="text-amber-600 mb-4">
                <Award size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Top 50 Restaurants 2024</h3>
              <p className="text-gray-600">National Restaurant Guide</p>
            </div>

            <div className="bg-white p-8 shadow-md">
              <div className="text-amber-600 mb-4">
                <Award size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Wine Spectator Award</h3>
              <p className="text-gray-600">Excellence in Wine Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif italic mb-6">
            Our Commitment to Sustainability
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're dedicated to sustainable practices, from sourcing local and organic
            ingredients to minimizing waste and supporting our community. Every decision
            we make considers our impact on the environment and future generations.
          </p>
        </div>
      </section>
    </div>
  );
}