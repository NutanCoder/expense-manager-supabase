import clsx from "clsx";
import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
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
  const variant = props.variant ?? "secondary";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2",
        "rounded select-none transition-colors duration-200",
        "rounded cursor-pointer select-none",
        variant === "primary"
          ? "bg-yellow-400 text-black hover:bg-yellow-700"
          : "bg-gray-700 text-white hover:bg-gray-900",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
