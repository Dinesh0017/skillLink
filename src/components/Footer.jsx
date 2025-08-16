import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa6";
import logo from "../assets/SkillLink logo.png"; // use your logo

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#196C64] text-white">
      {/* ---------- TOP SECTION (keep as in your design) ---------- */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 py-12 px-6">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold">
            <span className="text-white">Skill</span>
            <span className="text-[#C7F5E1]">Link</span> – Connecting skills with
            people.
          </h3>
          <p className="mt-4 text-sm leading-6 text-white/90">
            A local skill-sharing marketplace where individuals can offer, learn,
            and trade skills effortlessly. From baking to coding, repair work to
            tutoring, find the right person or share your expertise with your
            community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="ml-42">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/90">
            {[
              "Home",
              "Explore",
              "For Businesses",
              "Become a Pro",
              "Contact Us",
              "About",
              "FAQs",
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="ml-42">
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-white/90">
            {["How It Works", "Terms & Conditions", "Privacy Policy", "Help Center"].map(
              (item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* ---------- BOTTOM SECTION (as per screenshot) ---------- */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        {/* Desktop / Tablet layout */}
        <div className="hidden md:grid grid-cols-[auto_1fr_auto] auto-rows-auto items-center gap-y-3">
          {/* Left: Logo (spans all rows) */}
          <div className="row-span-3">
            <img src={logo} alt="SkillLink" className="h-16 w-auto drop-shadow" />
          </div>

          {/* Row 1, Right: Socials */}
          <div className="col-start-3 justify-self-end flex items-center gap-3">
            <a className="w-9 h-9 grid place-items-center rounded-md bg-black/25 hover:bg-black/35 transition">
              <FaXTwitter className="text-black" />
            </a>
            <a className="w-9 h-9 grid place-items-center rounded-md bg-black/25 hover:bg-black/35 transition">
              <FaInstagram className="text-black" />
            </a>
            <a className="w-9 h-9 grid place-items-center rounded-md bg-black/25 hover:bg-black/35 transition">
              <FaFacebookF className="text-black" />
            </a>
            <a className="w-9 h-9 grid place-items-center rounded-md bg-black/25 hover:bg-black/35 transition">
              <FaLinkedinIn className="text-black" />
            </a>
          </div>

          {/* Row 2: Divider line from after logo to right edge */}
          <div className="col-start-2 col-end-4 h-0.5 bg-white/80 ml-8" />

          {/* Row 3, Middle: Copyright centered in the free area */}
          <div className="col-start-2 text-left text-sm text-white ml-8">
            © {year} <span className="font-semibold">SkillLink</span>
            <span className="px-3">|</span>
            All rights reserved.
          </div>

          {/* Row 3, Right: Language + Currency */}
          <div className="col-start-3 justify-self-end flex items-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <FaGlobe /> English
            </span>
            <span className="font-semibold">$ USD</span>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center gap-4">
          <img src={logo} alt="SkillLink" className="h-10 w-auto" />
          <div className="flex items-center gap-3">
            <a className="w-8 h-8 grid place-items-center rounded-md bg-black/25">
              <FaXTwitter className="text-black" />
            </a>
            <a className="w-8 h-8 grid place-items-center rounded-md bg-black/25">
              <FaInstagram className="text-black" />
            </a>
            <a className="w-8 h-8 grid place-items-center rounded-md bg-black/25">
              <FaFacebookF className="text-black" />
            </a>
            <a className="w-8 h-8 grid place-items-center rounded-md bg-black/25">
              <FaLinkedinIn className="text-black" />
            </a>
          </div>
          <div className="w-full h-px bg-white/80" />
          <p className="text-sm">© {year} SkillLink | All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm">
            <FaGlobe /> <span>English</span> <span className="font-semibold">$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
