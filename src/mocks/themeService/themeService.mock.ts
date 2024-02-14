import { inube } from "@inube/design-system";
import localforage from "localforage";
import { tokensWithReference } from "@mocks/design/tokensWithReference";

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

export { getTokens, intializedTokenData, updateIdTokens };
