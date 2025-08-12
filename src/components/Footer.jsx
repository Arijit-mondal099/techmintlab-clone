import {
  Facebook,
  Linkedin,
  Github,
  Instagram,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { footerDec, logo } from "../assets";

export default function Footer() {
  return (
    <footer className="bg-white border-gray-100 pt-12 pb-6">
      <img src={footerDec} alt="" className="w-full -mb-14" />

      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Logo & Contact */}
        <div>
          <img src={logo} alt="TechMint Logo" className="h-12 mb-4" />
          <p className="text-gray-500 mb-4">info@techmintlab.com</p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-bold text-lg mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-500">
            <li>Mobile App Development</li>
            <li>Web Application Development</li>
            <li>Custom Software Solutions</li>
            <li>UI/UX Design Services</li>
            <li>Cloud & DevOps</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-500">
            <li>Case Studies</li>
            <li>Our Technologies</li>
            <li>Development Process</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-lg mb-4">Get Tech Insights</h4>
          <p className="text-gray-500 mb-4">
            Subscribe to our newsletter for tech trends and updates
          </p>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 rounded-l-full text-white bg-sky-500 focus:outline-none"
            />
            <button className="bg-sky-500 text-white py-2 px-2 rounded-r-full">
              <Send />
            </button>
          </div>
          <p className="flex items-center text-gray-500 text-sm mb-1">
            <Phone className="mr-2" size={16} /> +91-7027944324
          </p>
          <p className="flex items-center text-gray-500 text-sm">
            <MapPin className="mr-2" size={16} /> Karnal, Haryana, India
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 mt-8 pt-4 text-center text-sm text-gray-500">
        <p>
          Copyright © 2023 <span className="font-semibold">TechMintLab</span>.
          All Rights Reserved.
        </p>
        <p className="mt-1">
          <a href="#" className="text-red-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-red-400 hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
