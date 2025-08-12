import { tablesLeftDec, tablesRightDec } from "../assets";

export default function PackagesSection() {
  const packages = [
    {
      title: "Basic Development",
      oldPrice: "₹5,000",
      name: "Landing Page",
      features: [
        "Responsive Website Design",
        "Up to 20 Custom Pages",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "1 Month Support",
      ],
      buttonText: "Start Project",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Mobile App Package",
      oldPrice: "₹25,000",
      name: "Android/iOS App",
      features: [
        "Cross-Platform Development",
        "UI/UX Design",
        "Backend API Integration",
        "Basic Features Set",
        "3 Months Support",
      ],
      buttonText: "Build Your App",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Enterprise Solution",
      oldPrice: "₹50,000",
      name: "Custom CRM/ERP",
      features: [
        "Custom Business Software",
        "Multi-user Dashboard",
        "Database Integration",
        "Advanced Security",
        "6 Months Support",
      ],
      buttonText: "Get Consultation",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  return (
    <section className="bg-white py-20 relative">

      <img src={tablesLeftDec} alt="" className="absolute left-0" />
      <img src={tablesRightDec} alt="" className="absolute right-0" />

      <div className="w-full md:w-[70%] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent">
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-blue-400 bg-clip-text">
              Choose The Perfect
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text">
              Solution For Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text">
              Digital
            </span>{" "}
            <span className="text-red-400 text-4xl">Transformation</span>
          </h2>
          <p className="text-pink-100 uppercase text-3xl font-extrabold">
            Our Packages
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-4xl shadow-2xl p-10 text-center border border-gray-100 relative z-10"
            >
              <h3 className="font-bold text-xl text-gray-700 mb-6">{pkg.title}</h3>
              <p className="line-through text-orange-400">{pkg.oldPrice}</p>
              <h2 className="text-5xl font-bold text-red-400 mb-8 w-70 mx-auto text-center">
                {pkg.name}
              </h2>
              <ul className="space-y-4 text-gray-500 text-base mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button
                className={`text-white bg-blue-400 hover:bg-orange-400 font-semibold px-8 py-2.5 rounded-full shadow-lg transition`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
