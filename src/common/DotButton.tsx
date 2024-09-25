import React from "react";

type DotButtonProps = {
  selected: boolean; // Indicates if this dot is the currently selected one
  onClick: () => void; // Function to handle click events
};

const DotButton: React.FC<DotButtonProps> = ({ selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-3 w-3 mx-1 rounded-full transition-colors ${
        selected ? "bg-[#E40046]" : "bg-gray-300"
      }`}
      aria-label="Slide navigation button"
    />
  );
};

export default DotButton;
