import React from "react";
import classNames from "classnames";

interface Props {
  left?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const defaultProps: Props = {
  left: false,
};

export function CarouselButton(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={classNames(
        props.className,
        "w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12",
        "rounded-full shadow-spread bg-white",
        "flex justify-center items-center focus:outline-none"
      )}
    >
      <svg
        className="w-1/2 h-1/2"
        viewBox="0 0 27 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.left ? (
          <path
            d="M16.771 19L9.18766 12L16.771 5"
            stroke="#E4AB81"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M10.2712 5L17.8546 12L10.2712 19"
            stroke="#E4AB81"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

CarouselButton.defaultProps = defaultProps;
