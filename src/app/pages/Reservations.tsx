import { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Reservations() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    requests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send the data to a server
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        occasion: "",
        requests: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758648207365-df458d3e83f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGluaW5nfGVufDF8fHx8MTc3NTEwOTczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif italic mb-4">Make a Reservation</h1>
          <p className="text-xl text-gray-200">
            Secure your table for an unforgettable dining experience
          </p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-serif italic text-gray-900 mb-8">
                Book Your Table
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 p-8 text-center">
                  <h3 className="text-2xl text-green-800 mb-4">Thank You!</h3>
                  <p className="text-green-700">
                    Your reservation request has been received. We'll contact you shortly
                    to confirm your booking.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm text-gray-700 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm text-gray-700 mb-2">
                        Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-600"
                      >
                        <option value="">Select time</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="11:30">11:30 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guests" className="block text-sm text-gray-700 mb-2">
                        Number of Guests *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-600"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="7">7+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="occasion" className="block text-sm text-gray-700 mb-2">
                        Special Occasion
                      </label>
                      <select
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-600"
                      >
                        <option value="">None</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="engagement">Engagement</option>
                        <option value="business">Business Dinner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requests" className="block text-sm text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      id="requests"
                      name="requests"
                      rows={4}
                      value={formData.requests}
                      onChange={handleChange}
                      placeholder="Dietary restrictions, seating preferences, etc."
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 uppercase tracking-wider transition-colors"
                  >
                    Reserve Table
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields. Reservations are subject to availability.
                  </p>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-amber-50 p-8">
                <h3 className="text-2xl font-serif italic text-gray-900 mb-6">
                  Reservation Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">Advance Booking</h4>
                      <p className="text-sm text-gray-600">
                        We recommend booking at least 24-48 hours in advance, especially
                        for weekends and special occasions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">Dining Time</h4>
                      <p className="text-sm text-gray-600">
                        Tables are reserved for 2 hours. For larger parties or special
                        events, please call us directly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">Large Parties</h4>
                      <p className="text-sm text-gray-600">
                        For parties of 7 or more, please contact us at (555) 123-4567 for
                        special arrangements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-8">
                <h3 className="text-xl mb-4">Cancellation Policy</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We understand plans change. Please notify us at least 4 hours before your
                  reservation time if you need to cancel or modify your booking.
                </p>
              </div>

              <div className="border-2 border-amber-600 p-8">
                <h3 className="text-xl text-gray-900 mb-4">Need Help?</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Call us directly for immediate assistance or special requests.
                </p>
                <p className="text-2xl text-amber-700">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
