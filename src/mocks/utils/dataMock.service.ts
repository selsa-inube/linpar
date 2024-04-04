import localforage from "localforage";

function buildData<T>(data: T[]) {
  const dataMock = data.map((optionData) => {
    const newObj = Object.assign({ id: crypto.randomUUID() }, optionData);
    return newObj;
  });

  return dataMock;
}

export async function intializedData<T>(option: string, data: T[]) {
  try {
    const dataMock = buildData(data);
    await localforage.setItem(option, dataMock);
  } catch (error) {
    return error;
  }
}

export async function getData(option: string) {
  await fakeNetwork();
  try {
    const optionsData = await localforage.getItem(option);

    if (!optionsData) throw new Error("No found");

    return optionsData;
  } catch (error) {
    return error;
  }
}

export async function getSpecificData(
  key: string,
  option: string,
  identifier: number | string
) {
  try {
    const optionsData = await getData(option);

    if (Array.isArray(optionsData)) {
      const foundData = optionsData.find((data) => data[key] === identifier);
      if (!foundData) throw new Error(`No find identifier ${identifier}`);
      return foundData;
    }
    throw new Error("data structure not valid, must be an object list");
  } catch (error) {
    return error;
  }
}

export async function deleteItemData(nameDB: string, k_Rol: string) {
  try {
    const data = await getData(nameDB);
    if (Array.isArray(data)) {
      const indexData = data.findIndex((item) => item.k_Rol === k_Rol);
      data.splice(indexData, 1);
      await localforage.setItem(nameDB, data);
      return data;
    }
    throw new Error("data structure not valid, must be an object list");
  } catch (error) {
    return error;
  }
}

async function fakeNetwork() {
  return new Promise((res) => {
    setTimeout(res, Math.random() * 1000);
  });
}
