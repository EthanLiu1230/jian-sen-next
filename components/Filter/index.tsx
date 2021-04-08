import React, { useState } from "react";
import { DropDown } from "./DropDown";
import { countSelectedItems, yieldItems } from "./model";
import { OptionsPanel } from "./OptionsPanel";
import { PopUpContainer } from "../containers/PopupContainer";
import { filterProps } from "./data";

export interface Item {
  option: string;
  selected: boolean;
}

export function Filter({
  name = filterProps.name,
  options = filterProps.options,
}: {
  name?: string;
  options?: string[]; // unique elements as key
  onCancel?: () => void;
}) {
  const [opened, setOpened] = useState<boolean>(false);

  const [items, setItems] = useState<Item[]>(yieldItems(options)); // applied items

  const handleApply = (items: Item[]) => {
    setItems(items);
    setOpened(false);
  };

  const label = () => {
    const count = countSelectedItems(items);
    return count > 0
      ? `filter by ${count} ${name}${count > 1 ? "s" : ""}`
      : name;
  };

  return (
    <PopUpContainer
      opened={opened}
      onOutsideClick={() => setOpened(!opened)}
      childrenToOpen={
        <OptionsPanel
          loadAppliedItems={opened}
          appliedItems={items}
          onApply={handleApply}
        />
      }
    >
      <DropDown
        opened={opened}
        label={label()}
        onClick={() => setOpened(!opened)}
        onCancel={() => {
          setItems(yieldItems(options));
        }}
        filled={countSelectedItems(items) !== 0}
      />
    </PopUpContainer>
  );
}
