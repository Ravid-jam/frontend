import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
}

const buttonVariants = {
  default:
    "bg-[#004AAC] text-white hover:bg-[#00388D] focus:ring-2 focus:ring-[#004AAC]/50",
  outline:
    "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400",
  ghost: "text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800",
  link: "text-blue-600 hover:underline",
};

const buttonSizes = {
  default: "px-4 py-2 text-sm",
  sm: "px-3 py-1 text-xs",
  lg: "px-6 py-3 text-base",
  icon: "p-2",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded-md font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
