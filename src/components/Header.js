import React from "react";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}

          <div className="flex flex-col items-start">
            <span className="text-gradient text-[32px] font-bold">IFEANYI</span>
            <span className="text-[32px] font-bold">OSI</span>
          </div>

          {/* button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
        {/* logo */}
      </div>
    </header>
  );
};

export default Header;
