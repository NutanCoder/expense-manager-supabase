import clsx from "clsx";
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  const type = props.type ?? "button";
  const onClick = props.onClick;
  const children = props.children;
  const className = props.className;
  const disabled = props.disabled ?? false;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2",
        "bg-gray-700 text-white",
        "hover:bg-gray-900 disabled:bg-gray-400",
        "rounded cursor-pointer select-none",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
