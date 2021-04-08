import React, { useRef } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export function PopUpContainer({
  opened = false,
  children,
  childrenToOpen,
  onOutsideClick,
}: {
  opened: boolean;
  children: React.ReactNode;
  childrenToOpen: React.ReactNode;
  onOutsideClick?: () => void;
}) {
  const ref = useRef();
  useOutsideClick(ref, onOutsideClick);

  return (
    <div className="sm:relative">
      {children}
      {opened && (
        <div
          ref={ref}
          className="flex absolute left-0 bottom-4 z-10 justify-center w-full px-4 sm:block sm:top-14 sm:px-0"
        >
          {childrenToOpen}
        </div>
      )}
    </div>
  );
}
