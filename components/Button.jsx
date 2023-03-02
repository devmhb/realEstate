import React from "react";

const Button = ({ children, clr, bgcolor, onClick }) => {
  return (
    <div
      className={`${clr} ${bgcolor} w-fit cursor-pointer rounded-tl-0 rounded-tr-18 rounded-br-0 rounded-bl-0 px-3 py-2 font-semibold text-[.8rem]`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
