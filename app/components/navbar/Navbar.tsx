import React from "react";
import Container from "../Container";
const Navbar = () => {
  return (
    <div className="fixed z-10 w-full bg-green-200 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0"></div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
