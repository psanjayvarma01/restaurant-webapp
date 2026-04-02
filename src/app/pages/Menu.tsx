import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Menu() {
  const menuCategories = [
    {
      name: "Starters",
      items: [
        {
          name: "Paneer Tikka",
          description: "Spiced and grilled cottage cheese cubes served with mint chutney.",
          price: "$12",
          image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc1MTUxNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Samosa Chaat",
          description: "Crushed samosas topped with yogurt, tamarind chutney, and spices.",
          price: "$10",
          image: "https://images.unsplash.com/photo-1732519970445-8f2d6998961f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBjaGFhdCUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc1MTUxNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Chicken Reshmi Kebab",
          description: "Minced chicken skewers flavored with herbs and grilled.",
          price: "$14",
          image: "https://images.unsplash.com/photo-1705359573325-f2006d5e459f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwa2ViYWIlMjBpbmRpYW58ZW58MXx8fHwxNzc1MTUxNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Butter Chicken",
          description: "Tender chicken pieces simmered in a rich tomato and butter gravy.",
          price: "$18",
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VuJTIwY3Vycnl8ZW58MXx8fHwxNzc1MTUxNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Lamb Rogan Josh",
          description: "Slow-cooked lamb curry with aromatic spices and herbs.",
          price: "$22",
          image: "https://images.unsplash.com/photo-1545247181-516773cae754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1iJTIwcm9nYW4lMjBqb3NoJTIwY3Vycnl8ZW58MXx8fHwxNzc1MTUxNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Palak Paneer",
          description: "Cottage cheese cubes in a creamy spinach sauce.",
          price: "$16",
          image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhayUyMHBhbmVlciUyMHNwaW5hY2h8ZW58MXx8fHwxNzc1MTUxNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Dal Makhani",
          description: "Black lentils slow-cooked with butter and cream.",
          price: "$14",
          image: "https://images.unsplash.com/photo-1659345509394-a724b290380c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWwlMjBtYWtoYW5pJTIwbGVudGlsc3xlbnwxfHx8fDE3NzUxMzY3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Gulab Jamun",
          description: "Deep-fried milk dumplings soaked in a sugar syrup.",
          price: "$6",
          image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwaW5kaWFuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzUxNTE0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Rasmalai",
          description: "Soft cheese patties immersed in sweetened and thickened milk.",
          price: "$8",
          image: "https://images.unsplash.com/photo-1647363556532-d3c4cf734fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNtYWxhaSUyMGluZGlhbiUyMGRlc3NlcnR8ZW58MXx8fHwxNzc1MTUxNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Mango Lassi",
          description: "A refreshing yogurt-based drink with ripe mangoes.",
          price: "$5",
          image: "https://images.unsplash.com/photo-1719239948819-0afeced16184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpJTIwZHJpbmt8ZW58MXx8fHwxNzc1MTEwMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1753729349067-f317d8a80b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwYW1iaWFuY2UlMjBuaWdodHxlbnwxfHx8fDE3NzUxNDEyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif italic mb-4">Our Menu</h1>
          <p className="text-xl text-gray-200">
            Crafted with passion, served with excellence
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <h2 className="text-4xl font-serif italic text-center text-gray-900 mb-12 pb-4 border-b-2 border-amber-600">
                {category.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex gap-4 p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl text-gray-900">{item.name}</h3>
                          <span className="text-amber-700 font-semibold ml-4">{item.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wine Pairing Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif italic text-gray-900 mb-6">
            Wine Pairings Available
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our sommelier has curated an extensive wine list to complement every dish.
            Ask your server for recommendations to enhance your dining experience.
          </p>
          <div className="inline-block bg-white px-6 py-3 shadow-md">
            <p className="text-gray-600">
              Wine list available upon request • Gluten-free options available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
