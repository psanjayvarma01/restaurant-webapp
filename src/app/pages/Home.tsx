import { Link } from "react-router";
import { ChefHat, Clock, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Our team of world-class chefs brings years of culinary expertise to every dish.",
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "We source the freshest ingredients daily from local farms and markets.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized by top culinary critics and food enthusiasts worldwide.",
    },
  ];

  const featured = [
    {
      name: "Grilled Ribeye Steak",
      description: "Prime beef with roasted vegetables",
      image: "https://images.unsplash.com/photo-1758157835950-ceeda86f4693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaW5uZXIlMjBwbGF0ZXxlbnwxfHx8fDE3NzUwOTk1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$45",
    },
    {
      name: "Fresh Pasta Carbonara",
      description: "Homemade pasta with traditional sauce",
      image: "https://images.unsplash.com/photo-1760390952710-b0e010ec4e50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RhJTIwZGlzaCUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzc1MTQxMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$28",
    },
    {
      name: "Grilled Salmon",
      description: "Wild-caught salmon with seasonal vegetables",
      image: "https://images.unsplash.com/photo-1598515213345-d710d121c709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwc2VhZm9vZCUyMHBsYXRlfGVufDF8fHx8MTc3NTA5ODc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$38",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758648207365-df458d3e83f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGluaW5nfGVufDF8fHx8MTc3NTEwOTczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">
            Welcome to Kridhani's Kitchen
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Where Every Meal is a Masterpiece
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 uppercase tracking-wider transition-colors"
            >
              View Menu
            </Link>
            <Link
              to="/reservations"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 uppercase tracking-wider transition-colors"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic text-gray-900 mb-4">
              Why Choose Kridhani's Kitchen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine passion, expertise, and the finest ingredients to create
              unforgettable dining experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-700 rounded-full mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic text-gray-900 mb-4">
              Signature Dishes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our chef's carefully crafted selection of premium dishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((dish, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl text-gray-900">{dish.name}</h3>
                    <span className="text-amber-700 font-semibold">{dish.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 uppercase tracking-wider transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif italic text-gray-900 mb-12">
            What Our Guests Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-md">
              <p className="text-gray-700 italic mb-4">
                "Absolutely phenomenal! The attention to detail in every dish is remarkable.
                This is fine dining at its best."
              </p>
              <p className="text-amber-700">— Sarah Johnson</p>
            </div>

            <div className="bg-white p-8 shadow-md">
              <p className="text-gray-700 italic mb-4">
                "An unforgettable experience. From the ambiance to the exquisite flavors,
                everything was perfect."
              </p>
              <p className="text-amber-700">— Michael Chen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif italic mb-6">
            Ready for an Exceptional Dining Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Reserve your table today and discover why Kridhani's Kitchen is the talk of the town.
          </p>
          <Link
            to="/reservations"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 uppercase tracking-wider transition-colors"
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  );
}