
import React from "react";
import logo from "../images/logo.jpg";

const Header = () => {
  return (
  <header className="w-full bg-[#781a13] border-b-4 border-yellow-400 px-4 py-0 flex items-center justify-between">

      {/* Left: Logo and College Info */}
      <div className="flex items-center space-x-4">
  <img src={logo} alt="Logo" className="w-20 h-20 rounded-full object-cover" />
  <div className="flex flex-col mt-1 mb-2">
          <span className="text-6xl font-bold font-[Old English Text MT,serif] text-white leading-tight mb-1">St.John's College</span>
          <span className="text-lg font-semibold text-yellow-300 ">Palayamkottai, Tirunelveli.</span>
          <span className="text-base text-white mb-2">Re- Accredited by NAAC with 'A' Grade</span>
        </div>
      </div>
  
    </header>
  );
};

export default Header;
