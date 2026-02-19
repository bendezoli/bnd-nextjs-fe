export function getDarkColor(): string {
  return "#1a263a";
}

export function getLightColor(): string {
  return "#ffffff";
}

export function colorFromType(colorType?: string) {
  return colorType === "blue" ? getLightColor() : getDarkColor();
}

export function isThemeLight(colorType?: string) {
  return colorType === "blue" ? "light" : "dark";
}
