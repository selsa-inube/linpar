import { inube } from "@inube/design-system";
import { getTokenColor } from "./getTokenColor";
function tokenCalculator(tokenWithReference: typeof inube) {
  let tokens = JSON.parse(JSON.stringify({ ...tokenWithReference }));

  Object.entries(tokenWithReference.color).forEach(
    ([domain, domainValue]: [string, typeof inube]) => {
      if (domain !== "palette") {
        Object.entries(domainValue).forEach(
          ([block, blockValue]: [string, typeof inube]) => {
            Object.entries(blockValue).forEach(
              ([modifier, modifierValue]: [string, typeof inube]) => {
                tokens.color[domain][block][modifier] = getTokenColor(
                  modifierValue,
                  tokenWithReference
                );
              }
            );
          }
        );
      }
    }
  );
  return tokens;
}

export { tokenCalculator };
