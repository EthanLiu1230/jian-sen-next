import cn from "classnames";
import React from "react";

export function CarouselIndicator(
  props: {
    active?: boolean;
    className?: string;
  } = { active: false }
) {
  return (
    <svg
      className={cn(props.className, "w-4 lg:w-5")}
      {...props}
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ring */}
      <circle
        opacity={props.active ? "0.7" : "0"}
        cx="13.5"
        cy="13.6572"
        r="13"
        stroke="#E4AB81"
      />
      {/* core */}
      <circle
        cx="13.5"
        cy="13.6572"
        r="5"
        fill={props.active ? "#E4AB81" : "#D8D8D8"}
        stroke={props.active ? "#E4AB81" : "#D8D8D8"}
      />
    </svg>
  );
}

export function CarouselIndicatorGroup(
  props: {
    children?: React.ReactNode;
    vertical?: boolean;
    className?: string;
  } = { children: "CarouselIndicatorGroup", vertical: false }
) {
  return (
    <div>
      <div
        className={cn(props.className, "flex", {
          "flex-col": props.vertical,
        })}
      >
        {props.children}
      </div>
    </div>
  );
}
