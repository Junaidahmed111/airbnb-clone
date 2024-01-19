"use-client";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.jpg";
import React from "react";

const Avatar = () => {
  return (
    <Image
      src={placeholder}
      className="rounded-full"
      alt="Avatar"
      height={30}
      width={30}
    />
  );
};

export default Avatar;
