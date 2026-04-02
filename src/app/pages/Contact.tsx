import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 py-20 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif italic mb-4">Get in Touch</h1>
          <p className="text-xl text-amber-100">
            We'd love to hear from you. Reach out with any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Address</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                123 Culinary Street<br />
                Gourmet City, GC 12345
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Phone</h3>
              <p className="text-sm text-gray-600">
                Main: (555) 123-4567<br />
                Reservations: (555) 123-4568
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600">
                info@kridhanskitchen.com<br />
                reservations@kridhanskitchen.com
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Hours</h3>
              <p className="text-sm text-gray-600">
                Mon-Thu: 11am-10pm<br />
                Fri-Sat: 11am-11pm<br />
                Sun: 10am-9pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif italic text-gray-900 mb-8">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 p-8 text-center">
                  <h3 className="text-2xl text-green-800 mb-4">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      Name *
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
                    <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-600"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Reservation Question</option>
                      <option value="private">Private Events</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 uppercase tracking-wider transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gray-300 h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-600">Map Location</p>
                  <p className="text-sm text-gray-500">123 Culinary Street, Gourmet City</p>
                </div>
              </div>

              {/* Private Events */}
              <div className="bg-white p-8 shadow-md">
                <h3 className="text-2xl font-serif italic text-gray-900 mb-4">
                  Private Events & Catering
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Looking to host a special event? Our private dining rooms and catering
                  services are perfect for weddings, corporate events, and celebrations of
                  all kinds.
                </p>
                <p className="text-gray-600 text-sm">
                  For inquiries, call us at <span className="text-amber-700">(555) 123-4569</span> or
                  email <span className="text-amber-700">events@kridhanskitchen.com</span>
                </p>
              </div>

              {/* Directions */}
              <div className="bg-amber-50 p-8">
                <h3 className="text-xl text-gray-900 mb-4">Directions & Parking</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  We're conveniently located in the heart of Gourmet City, easily accessible
                  by public transportation.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Parking:</strong> Complimentary valet parking available.
                  Street parking also available nearby.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif italic text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg text-gray-900 mb-2">Do you accept walk-ins?</h3>
              <p className="text-gray-600">
                Yes, we welcome walk-ins based on availability. However, we recommend making
                a reservation to ensure we can accommodate you.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg text-gray-900 mb-2">What is your dress code?</h3>
              <p className="text-gray-600">
                We encourage smart casual attire. While we don't have a strict dress code,
                we kindly ask guests to avoid athletic wear and flip-flops.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg text-gray-900 mb-2">Do you accommodate dietary restrictions?</h3>
              <p className="text-gray-600">
                Absolutely! Please inform us of any dietary restrictions or allergies when
                making your reservation, and our chefs will be happy to accommodate.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg text-gray-900 mb-2">Do you offer gift cards?</h3>
              <p className="text-gray-600">
                Yes, gift cards are available for purchase. Contact us directly or visit
                the restaurant to purchase.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg text-gray-900 mb-2">Is the restaurant wheelchair accessible?</h3>
              <p className="text-gray-600">
                Yes, our restaurant is fully wheelchair accessible with accessible restrooms
                and seating options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}