import { presente, inube } from "@inube/design-system";
import localforage from "localforage";

async function intializedTokenData() {
  localforage.clear();
  // let id = Math.random().toString(36).substring(2, 9);
  let id = "presente";
  let presenteTokens = { id, createdAt: Date.now(), tokens: { ...presente } };
  let tokens = [presenteTokens];
  await localforage.setItem("tokens", tokens);
}
async function getTokens(id: String) {
  let tokens: typeof inube = await localforage.getItem("tokens");
  let idTokens: typeof inube = tokens.find(
    (idTokens: typeof inube) => idTokens.id === id
  );
  return idTokens ?? inube;
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

export { getTokens, intializedTokenData, updateIdTokens };
