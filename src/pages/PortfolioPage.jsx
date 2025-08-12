import { useState, useEffect } from "react";
import { portfolioLeftDec, profileImages } from "../assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ManualCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < profileImages.length - slidesToShow) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(profileImages.length - slidesToShow);
    }
  };

  return (
    <main id="portfolio" className="relative bg-white pt-24 pb-16">
      <img src={portfolioLeftDec} alt="" className="absolute left-10" />

      <section className="mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              <span className="text-pink-500">Our</span>{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text">
                Technology
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-blue-500 bg-clip-text">
                Solutions & Success
              </span>
            </span>
          </h2>
          <p className="text-red-400 mt-2 text-3xl font-bold">Stories</p>
          <p className="text-pink-100 uppercase text-3xl font-extrabold">
            Our Work
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  (100 / slidesToShow) * currentIndex
                }%)`,
              }}
            >
              {profileImages.map((src, idx) => (
                <div
                  key={idx}
                  className={`${
                    slidesToShow === 1 ? "w-full" : "w-1/4"
                  } flex-shrink-0 px-2 relative group`} // relative so absolute inside works
                >
                  {/* Image */}
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="rounded-2xl shadow-lg object-cover w-full h-[600px] group-hover:opacity-20 transition-all duration-300"
                  />

                  {/* Overlay text */}
                  <div className="absolute -bottom-50 right-10 group-hover:bottom-10 bg-gradient-to-t from-pink-400 to-orange-400 h-50 w-50 z-10 rounded-tl-2xl rounded-br-2xl flex justify-center gap-2 flex-col text-white text-right p-4 transition-all duration-300">
                    <p className="font-bold text-lg">ShopEasy Mobile</p>
                    <p className="text-sm font-medium">React Native E-Commerce Mobile App</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-5 -translate-y-1/2 bg-green-400/60 text-white shadow-lg w-14 h-14 rounded-full flex items-center justify-center hover:bg-green-500 transition cursor-pointer"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-5 -translate-y-1/2 bg-green-400/60 text-white shadow-lg w-14 h-14 rounded-full flex items-center justify-center hover:bg-green-500 transition cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
}
