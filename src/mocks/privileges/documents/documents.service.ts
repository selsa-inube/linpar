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
  try {
    const optionsData = await localforage.getItem(option);

    if (Array.isArray(optionsData)) {
      if (!optionsData || optionsData.length === 0) throw new Error("No found");
      return optionsData;
    }
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
      if (!optionsData || optionsData.length === 0)
        throw new Error("missing or empty information");

      const foundData = optionsData.find((data) => data[key] === identifier);
      if (!foundData) throw new Error(`No find identifier ${identifier}`);
      return foundData;
    }
    throw new Error("data structure not valid, must be an object list");
  } catch (error) {
    return error;
  }
}
