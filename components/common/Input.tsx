import React, { DOMAttributes } from "react";

type Props = {
  placeholder?: string;
  required?: boolean;
  label?: string;
  id?: string;
  type?: string;
  readOnly?: boolean;
  register?: any;
  defaultValue?: any;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  checked?: boolean;
  value?: string | number | readonly string[] | undefined;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  size?: string;
};

const Input = ({
  placeholder,
  required,
  label,
  id,
  type,
  readOnly,
  register,
  defaultValue,
  className,
  onChange,
  checked,
  value,
  onKeyUp,
  size = "sm",
}: Props) => {
  const sizeClassName = (size: string) => {
    if (size === "sm") {
      return "px-2 py-1";
    }
    if (size === "lg") {
      return "px-4 py-2";
    }
  };
  return (
    <div className="relative w-full">
      <label
        className="font-medium absolute -top-6 left-0 w-full max-w-[480px]"
        htmlFor={id}
      >
        {label}
        {required && <span className="text-red-500">(*)</span>}
      </label>
      {register ? (
        <input
          type={type}
          id={id}
          checked={checked}
          placeholder={placeholder}
          readOnly={readOnly}
          onKeyUp={onKeyUp}
          {...register}
          defaultValue={defaultValue}
          className={`border-2 border-gray-400 ${className} ${sizeClassName(
            size
          )} ${
            readOnly && "bg-orange-200"
          } w-full rounded-md outline-orange--e45b28`}
        />
      ) : (
        <input
          type={type}
          id={id}
          checked={checked}
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={onChange}
          value={value}
          onKeyUp={onKeyUp}
          defaultValue={defaultValue}
          className={`border-2 border-gray-400 ${className} ${sizeClassName(
            size
          )} ${
            readOnly && "bg-orange-200"
          } w-full rounded-md outline-orange--e45b28`}
        />
      )}
    </div>
  );
};

export default Input;
