import { parseNumberToCssUnit } from "./parseNumberToCssUnit";

export function parseValueToCssUnit(value?: any) {
  const valueIsNumber = typeof value === "number";

  return valueIsNumber ? parseNumberToCssUnit(value, "px") : value;
}
