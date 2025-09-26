import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Left - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Ragul Prasanth</h2>
          <p className="mt-2 text-gray-400">
            Software Developer 🚀 | Building web apps & solving problems with code.
          </p>
        </div>
        {/* Middle - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Contact</h3>
          <p className="text-gray-400">
            <span className="font-semibold text-yellow-400">Email: </span>
            <a href="mailto:ragulprasanthwork@gmail.com" className="hover:underline">
              ragulprasanthwork@gmail.com
            </a>
          </p>
          <p className="text-gray-400 mt-2">
            <span className="font-semibold text-yellow-400">Phone: </span>
            <a href="tel:+919025820446" className="hover:underline">
              +91 90258 20446
            </a>
          </p>
        </div>



        {/* Right - Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://github.com/ragulprasanth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
              title="GitHub"
            >
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ragul-prasanth-a-151893321/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
              title="LinkedIn"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              href="https://www.instagram.com/ragul_crick26"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
              title="Instagram"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/15xNLRkeDE/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
              title="Facebook"
            >
              <AiOutlineFacebook />
            </a>
          </div>
        </div>
      </div>


      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Ragul Prasanth. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
