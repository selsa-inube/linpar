import { inube } from "@inube/design-system";
function getTokenColor(tokenName: string, theme?: typeof inube) {
  const palette = theme?.color?.palette || inube.color.palette;
  for (const category in palette) {
    if (Object.hasOwnProperty.call(palette[category], tokenName)) {
      return palette[category!]?.[tokenName];
    }
  }
}

export { getTokenColor };
