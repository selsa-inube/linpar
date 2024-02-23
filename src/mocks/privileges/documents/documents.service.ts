import localforage from "localforage";

function buildData<T>(data: T[]) {
  const dataMock = data.map((optionData) => {
    const newObj = Object.assign({}, optionData, {
      id: crypto.randomUUID(),
    });

    return newObj;
  });

  return dataMock;
}

export async function intializedData<T>(option: string, data: T[]) {
  try {
    const dataMock = buildData(data);
    await localforage.setItem(option, dataMock);
  } catch (error) {
    console.error(error);
  }
}

export async function getDocuments(option: string, code: number) {
  try {
    const optionsData = await localforage.getItem(option);

    if (Array.isArray(optionsData)) {
      if (!optionsData || optionsData.length === 0)
        throw new Error("No documents found");

      const foundData = optionsData.find((data) => data.codigo === code);
      if (!foundData) throw new Error(`No document found with code ${code}`);
      return foundData;
    }
  } catch (error) {
    console.error(error);
  }
}
