import { banerDecLeft, bannerRightImage, servicesLeftDec } from "../assets";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="h-screen mt-26 md:32 bg-white relative overflow-hidden">
      <div className="mx-auto flex flex-row items-center gap-10">
        <img src={banerDecLeft} alt="" className="absolute inset-0 md:static" />

        {/* Left Side */}
        <div className="flex-1 text-left mt-10 md:mt-0 p-2">
          <p className="text-red-400 font-semibold uppercase tracking-wide text-xl">
            Custom Software Development
          </p>
          <h1 className="text-6xl text-gray-700 font-extrabold leading-tight mt-2">
            Transform <span className="text-blue-500">your ideas</span> into{" "}
            <span className="text-red-400">powerful software</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto md:mx-0 text-lg">
            We develop premium, scalable software solutions tailored to your
            business needs using React, Angular, Node.js, Python, and other
            modern frameworks.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#services"
              className="bg-blue-500 w-70 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-600 transition-colors"
            >
              Explore Our Services
            </a>
            <a
              href="tel:+917027944324"
              className="flex items-center gap-2 text-red-400 font-semibold hover:underline"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>{" "}
              +91-7027944324
            </a>
          </div>

          <div className="flex items-center gap-4 font-semibold mt-15 text-xl">
            <p className="underline text-orange-500">1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:block flex-1 relative">
          <div className="relative overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full z-0"
              viewBox="0 0 500 500"
              preserveAspectRatio="none"
            >
              <path d="M0,0 L500,0 L500,400 Q400,480 0,500 Z" fill="white" />
            </svg>
            <img
              src={bannerRightImage}
              alt="Office"
              className="relative z-10 w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <img src={servicesLeftDec} alt="" className="hidden md:block absolute -bottom-70 left-40" />
    </section>
  );
};

export default HeroSection;
