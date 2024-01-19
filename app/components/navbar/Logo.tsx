"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logo.png";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src={logo}
      alt="logo-image"
      className="hidden md:block cursor-pointer"
      width="100"
      height="100"
    />
  );
};

export default Logo;
