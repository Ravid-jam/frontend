"use client";

type Props = {
  rating: number | undefined;
};

export default function Rating({ rating }: Props) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          className={`w-5 h-5 ${
            star <= Math.ceil(rating || 2.5)
              ? "fill-primary"
              : "fill-muted stroke-muted-foreground"
          }`}
          key={star}
        />
      ))}
      <span className="text-sm text-muted-foreground">{rating}</span>
    </div>
  );
}

// Define props type for StarIcon
type StarIconProps = React.SVGProps<SVGSVGElement>;

function StarIcon(props: StarIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
