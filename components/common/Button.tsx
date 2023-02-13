import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  onClick,
  className = "bg-blue-500 text-white after:bg-blue-500",
}: Props) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={`px-5 py-2 ${className} flex items-center gap-2 w-auto rounded-lg text-md font-medium z-10 transition-all duration-200 -translate-x-[2px] -translate-y-[2px] hover:translate-y-0 after:duration-200 hover:translate-x-0 hover:after:top-0 hover:after:left-0 after:transition-all after:absolute after:rounded-lg after:w-full after:-z-10 after:opacity-50 after:top-[4px] after:left-[4px]  after:h-full`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
