import React from "react";

const IconImage = ({ src, padding, widthClass, cursor, heightClass, isActive }) => {
  const imgClasses = `p-${padding || "0"} ${isActive ? "brightness-50" : ""} ${cursor || "cursor-pointer"}`;

  return (
    <img
      src={src}
      alt="Icon"
      className={`${widthClass || "w-auto"} ${heightClass || "h-auto"} ${imgClasses} float-right ml-auto`}
    />
  );
};

export default IconImage;


