import { Item } from "./index";

export function yieldItems(options: string[]): Item[] {
  return options.map((option) => ({
    option,
    selected: false,
  }));
}

export function yieldSelectedOptions(items: Item[]): string[] {
  return items.filter((item) => item.selected).map((item) => item.option);
}

export function countSelectedItems(items: Item[]): number {
  return items.reduce((a, c) => a + (c.selected ? 1 : 0), 0);
}
