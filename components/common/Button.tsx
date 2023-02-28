import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  disabled,
  children,
  onClick,
  type = "submit",
  size = "sm",
  className = "bg-blue-500 text-white after:bg-blue-500",
}: Props) => {
  const sizeClassName = (size: string) => {
    if (size === "sm") {
      return "py-2 px-6";
    }
    if (size === "md") {
      return "py-2 px-10";
    }
    if (size === "lg") {
      return "py-3 px-14 text-lg";
    }
  };
  return (
    <div className="relative">
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`${sizeClassName(
          size
        )} ${className} flex items-center gap-2 w-auto rounded-lg text-md font-medium z-10 transition-all duration-200 -translate-x-[2px] -translate-y-[2px] hover:translate-y-0 after:duration-200 hover:translate-x-0 hover:after:top-0 hover:after:left-0 after:transition-all after:absolute after:rounded-lg after:w-full after:-z-10 after:opacity-50 after:top-[4px] after:left-[4px]  after:h-full`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
