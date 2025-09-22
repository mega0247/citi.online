import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="px-12 bg-white">
      <div className="flex-between">
        <div className="flex gap-3">
          <Image
            src={"/images/citi-logo.svg"}
            alt="Citi"
            width={80}
            height={70}
            className="object-contain"
          />
          <Image
            src={"/images/fdic-insured.jpg"}
            alt="Citi"
            width={450}
            height={50}
            className="object-contain"
            quality={100}
          />
        </div>
        <div>
          <Image
            src={"/images/atm.jpg"}
            alt="Citi"
            width={180}
            height={70}
            className="object-contain"
            quality={100}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
