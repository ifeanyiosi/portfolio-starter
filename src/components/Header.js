import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <div className="flex flex-col items-start">
              <span className="text-gradient text-[32px] font-bold">
                IFEANYI
              </span>
              <span className="text-[32px] font-bold">OSI</span>
            </div>
          </a>

          {/* button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
        {/* logo */}
      </div>
    </header>
  );
};

export default Header;
