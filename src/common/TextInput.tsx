import { Label } from "@/components/ui/label";
import { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export default function TextInput({
  id = "",
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  lableClassName = "",
  label,
  icon,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  error?: string;
  label?: string;
  lableClassName?: string;
}) {
  return (
    <div className="relative flex w-full flex-col justify-start gap-2">
      <div className="flex flex-col gap-2">
        {label && (
          <Label htmlFor={id} className={lableClassName}>
            {label}
          </Label>
        )}
        <div className="relative flex items-center">
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={cn(
              "relative flex h-11 w-full select-none rounded-md border-[1px] px-3 py-2 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-secondary-text autofill:!bg-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            {...props}
          />
          {icon}
        </div>
      </div>
      {error && <span className="ml-1 text-sm text-red-500">{error}</span>}
    </div>
  );
}
