import { Link } from "react-router-dom";
import clsx from "clsx";

interface StyledLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
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
        "px-4 py-2 rounded select-none transition-colors duration-200",
        variant === "primary"
          ? "bg-yellow-400 text-black hover:bg-yellow-500"
          : "bg-gray-700 text-white hover:bg-gray-600",
        className
      )}
    >
      {children}
    </Link>
  );
}

export default StyledLink;
