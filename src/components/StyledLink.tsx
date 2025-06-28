import { Link } from "react-router-dom";
import clsx from "clsx";

interface StyledLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "neutral";
}

function StyledLink(props: StyledLinkProps) {
  const to = props.to;
  const children = props.children;
  const className = props.className;
  const variant = props.variant ?? "primary";

  return (
    <Link
      to={to}
      className={clsx(
        "rounded select-none transition-colors duration-200",
        variant === "primary" &&
          "px-4 py-2 bg-yellow-400 text-black hover:bg-yellow-500",
        variant === "secondary" &&
          "px-4 py-2 bg-gray-700 text-white hover:bg-gray-600",
        variant === "neutral" &&
          "text-blue-600 hover:underline hover:text-blue-800",
        className
      )}
    >
      {children}
    </Link>
  );
}

export default StyledLink;
