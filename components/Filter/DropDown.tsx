import cn from "classnames";
import React from "react";

function IconCross() {
  return (
    <svg
      className="w-4.5 h-4.5 stroke-current"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9375 5.0625L5.0625 12.9375M12.9375 12.9375L5.0625 5.0625L12.9375 12.9375Z"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDown() {
  return (
    <svg
      className="w-4.5 h-4.5 stroke-current"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.9375 6.46875L9 11.5312L14.0625 6.46875"
        strokeWidth="1.6875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DropDown({
  opened = false,
  filled = false,
  label = "label",
  onClick,
  onCancel,
}: {
  opened?: boolean;
  filled?: boolean;
  label?: string;
  onClick?: () => void;
  onCancel?: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded w-full",
        {
          "bg-primary text-white": filled,
          "bg-white text-warmGray-400": !filled,
        },
        {
          "shadow-spread": opened,
          "border border-warmGray-300": !opened && !filled,
        }
      )}
    >
      <div className="flex justify-between">
        <label
          className="text-sm w-full px-4 py-2.5 cursor-pointer"
          onClick={onClick}
        >
          {label}
        </label>

        {filled && (
          <button className="focus:outline-none px-4 py-2.5" onClick={onCancel}>
            <IconCross />
          </button>
        )}

        {!filled && (
          <button className="focus:outline-none px-4 py-2.5" onClick={onClick}>
            <IconDown />
          </button>
        )}
      </div>
    </div>
  );
}
