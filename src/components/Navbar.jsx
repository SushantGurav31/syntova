import React, { useState } from "react";
import { useModal } from "../context/ModalContext";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { openModal } = useModal();

    return (
        <nav className="bg-[#0a1a4e] text-white 
                        px-6 sm:px-10 lg:px-16 
                        py-6 flex items-center justify-between shadow-md">

            {/* LEFT: LOGO + TAGLINE */}
            <div className="text-center leading-tight">
                
                {/* SYNTOVA Logo using Chopsic font */}

                <div className="text-4xl sm:text-5xl font-extrabold tracking-wide">SYNTOVA</div>

                {/* TAGLINE */}

                <div 
                 className="text-lg tracking-widest text-white font-extrabold"
                 style={{ fontFamily: "CopperplateGothicLight" }}
                  >
                  The Data People
                </div>




            </div>

            {/* CENTER-RIGHT: MENU ITEMS */}
<div className="hidden md:flex gap-4 text-base lg:text-lg opacity-95 ml-auto mr-10">
  {[
    "Home",
    "About",
    "Products",
    "Training",
    "Case Studies",
    "Blog",
    "Careers",
  ].map((item) => (
    <a
      key={item}
      href={`#${item.toLowerCase().replace(" ", "")}`}
      className="
        px-3 py-2 rounded
        hover:bg-white hover:text-black 
        transition duration-300 ease-in-out
      "
    >
      {item}
    </a>
  ))}
</div>


            {/* RIGHT: CONTACT BUTTON */}
            <button
                onClick={() => openModal("contact")}
                className="hidden md:block bg-white text-[#0a1a4e] 
                           px-6 py-2 rounded font-semibold hover:bg-slate-200"
            >
                Contact
            </button>
        </nav>
    );
}