import React, { useEffect, useState } from "react";
import { capitalize } from "lodash";
import { countSelectedItems } from "./model";
import { Box } from "../styles/Box";
import { Item } from "./index";

export function OptionsPanel({
  label = "OptionsPanel",
  appliedItems = [],
  onApply,
  loadAppliedItems,
}: {
  label?: string;
  appliedItems?: Item[];
  loadAppliedItems: boolean;
  onApply?: (items: Item[]) => void;
}) {
  // local items
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    setItems(appliedItems);
  }, [appliedItems, loadAppliedItems]);

  function updateItem(newItem: Item) {
    setItems(
      items.map((item) => (item.option === newItem.option ? newItem : item))
    );
  }

  return (
    <div className="px-4 w-full bg-white rounded shadow-spread sm:w-96">
      <div className="divide-y">
        <div className="flex justify-between items-end py-4 w-full">
          <p className="text-sm text-warmGray-500">{label}</p>
          <p className="text-xs text-warmGray-500">
            {countSelectedItems(items)} selected
          </p>
        </div>
        <div className="overflow-y-auto max-h-48 no-scrollbar">
          <div className="grid grid-cols-2 gap-4 pt-4">
            {items.map(({ option, selected }) => (
              <button
                className="focus:outline-none"
                key={option}
                onClick={() => updateItem({ option, selected: !selected })}
              >
                <Box variant={selected ? "outlined" : "outline"}>
                  <p className="text-xs p-box">{capitalize(option)}</p>
                </Box>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="py-4">
        <button
          className="w-full focus:outline-none"
          onClick={() => onApply(items)}
        >
          <Box variant="filled">
            <p className="text-sm p-box">Apply Filter</p>
          </Box>
        </button>
      </div>
    </div>
  );
}
