export function parseNumberToCssUnit(
  value: number = 0,
  unit: "px" | "rem" | "em" = "px"
) {
  return `${value}${unit}`;
}
