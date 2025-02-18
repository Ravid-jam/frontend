import clsx from "clsx";
import React from "react";

type HeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export default function Heading({
  title,
  description,
  className,
}: HeadingProps) {
  return (
    <div className={clsx("my-5", className)}>
      <h2 className="text-2xl font-bold font-serif leading-[1.1] md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-[46.875rem] text-sm leading-normal text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
