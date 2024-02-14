import { inube } from "@inube/design-system";
import localforage from "localforage";
import { tokensWithReference } from "@mocks/design/tokensWithReference";

function getTokenColor(tokenName: string, palette?: typeof inube) {
  for (const category in palette) {
    if (Object.hasOwnProperty.call(palette[category], tokenName)) {
      return palette[category!]?.[tokenName];
    }
  }
}

function tokenCalculator(tokenWithReference: typeof inube) {
  let tokens = JSON.parse(JSON.stringify({ ...tokenWithReference }));

  Object.entries(tokenWithReference.color).forEach(([domain, domainValue]) => {
    if (domain !== "palette") {
      Object.entries(domainValue).forEach(([block, blockValue]) => {
        Object.entries(blockValue).forEach(([modifier, modifierValue]) => {
          tokens.color[domain][block][modifier] = getTokenColor(
            modifierValue,
            tokenWithReference.color.palette
          );
        });
      });
    }
  });
  return tokens;
}

async function intializedTokenData() {
  localforage.clear();
  // let id = Math.random().toString(36).substring(2, 9);
  let id = "presente";
  let presenteTokens = {
    id,
    createdAt: Date.now(),
    tokens: { ...tokensWithReference[id] },
  };
  let tokens = [presenteTokens];
  await localforage.setItem("tokens", tokens);
}
async function getTokens(id: String) {
  let tokens: typeof inube = await localforage.getItem("tokens");
  let idTokens: typeof inube = tokens.find(
    (idTokens: typeof inube) => idTokens.id === id
  );

  return idTokens;
}

async function updateIdTokens(id: String, updates: typeof inube) {
  let tokens: typeof inube = await localforage.getItem("tokens");
  let idTokens: typeof inube = tokens.find(
    (idTokens: typeof inube) => idTokens.id === id
  );
  if (!idTokens) throw new Error("No tokens found");
  Object.assign(idTokens, {
    id: id,
    createdAt: idTokens.createdAt,
    tokens: updates,
  });
  await localforage.setItem("tokens", tokens);
  return idTokens;
}

export { getTokens, intializedTokenData, updateIdTokens, tokenCalculator };
