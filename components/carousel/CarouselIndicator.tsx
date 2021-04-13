import cn from "classnames";
import React, { ReactNode } from "react";

export function CarouselIndicator({
  active = false,
  className,
}: {
  active?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={cn(className, "w-4 lg:w-5")}
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ring */}
      <circle
        opacity={active ? "0.7" : "0"}
        cx="13.5"
        cy="13.6572"
        r="13"
        stroke="#E4AB81"
      />
      {/* circle */}
      <circle
        cx="13.5"
        cy="13.6572"
        r="5"
        fill={active ? "#E4AB81" : "#D8D8D8"}
        stroke={active ? "#E4AB81" : "#D8D8D8"}
      />
    </svg>
  );
}

export function CarouselIndicatorGroup(
  // props: {
  //   children?: React.ReactNode;
  //   vertical?: boolean;
  //   className?: string;
  // } = { children: "CarouselIndicatorGroup", vertical: false }
  {
    children,
    vertical = false,
    className,
  }: { children?: ReactNode; vertical?: boolean; className?: string }
) {
  return (
    <div>
      <div
        className={cn(className, "flex", {
          "flex-col": vertical,
        })}
      >
        {children}
      </div>
    </div>
  );
}
