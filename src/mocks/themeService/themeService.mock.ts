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

  Object.entries(tokenWithReference.color).forEach(
    ([domain, domainValue]: [string, typeof inube]) => {
      if (domain !== "palette") {
        Object.entries(domainValue).forEach(
          ([block, blockValue]: [string, typeof inube]) => {
            Object.entries(blockValue).forEach(
              ([modifier, modifierValue]: [string, typeof inube]) => {
                tokens.color[domain][block][modifier] = getTokenColor(
                  modifierValue,
                  tokenWithReference.color.palette
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

async function intializedTokenData() {
  localforage.clear();
  let tokens: typeof inube[] = [];
  Object.entries(tokensWithReference).forEach(([clientName, clientTokens]) => {
    let id = Math.random().toString(36).substring(2, 9);
    tokens.push({
      id,
      clientName,
      createdAt: Date.now(),
      tokens: { ...clientTokens },
    });
  });
  await localforage.setItem("tokens", tokens);
}
async function getTokens(clientName: String) {
  let tokens: typeof inube = await localforage.getItem("tokens");
  let idTokens: typeof inube = tokens.find(
    (idTokens: typeof inube) => idTokens.clientName === clientName
  );

  return idTokens;
}

async function updateIdTokens(clientName: String, updates: typeof inube) {
  let tokens: typeof inube = await localforage.getItem("tokens");
  let idTokens: typeof inube = tokens.find(
    (idTokens: typeof inube) => idTokens.clientName === clientName
  );
  if (!idTokens) throw new Error("No tokens found");
  Object.assign(idTokens, {
    id: idTokens.id,
    clientName: clientName,
    createdAt: idTokens.createdAt,
    tokens: updates,
  });
  await localforage.setItem("tokens", tokens);
  return idTokens;
}

export { getTokens, intializedTokenData, updateIdTokens, tokenCalculator };
