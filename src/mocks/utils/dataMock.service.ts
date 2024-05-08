import localforage from "localforage";
import { IGeneralInformation } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/types";

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

export async function getAll(option: string) {
  await fakeNetwork();
  try {
    const optionsData = await localforage.getItem(option);

    if (!optionsData) throw new Error("No found");

    return optionsData;
  } catch (error) {
    return error;
  }
}

interface functionById {
  key: string;
  nameDB: string;
  identifier: number | string;
  editData?: IGeneralInformation | { i_Activo: string };
  toggleI_Active?: boolean;
}

interface functionActiveById {
  key: string;
  nameDB: string;
  identifier: number | string;
  editData: { i_Activo: string };
}

export async function getById(props: functionById) {
  const { key, nameDB, identifier } = props;
  try {
    const optionsData = await getAll(nameDB);

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

export async function deleteItemData(props: functionById) {
  const { key, nameDB, identifier } = props;
  try {
    const data = await getAll(nameDB);
    if (Array.isArray(data)) {
      const indexData = data.findIndex((item) => item[key] === identifier);
      data.splice(indexData, 1);
      await localforage.setItem(nameDB, data);
      return data;
    }
    throw new Error("data structure not valid, must be an object list");
  } catch (error) {
    return error;
  }
}

export async function updateItemData(props: functionById) {
  const { key, nameDB, identifier, editData, toggleI_Active = false } = props;

  try {
    const data = await getAll(nameDB);
    if (Array.isArray(data)) {
      const indexData = data.findIndex((item) => item[key] === identifier);
      if (toggleI_Active && editData) {
        data[indexData].i_Activo = editData.i_Activo;
      } else {
        data[indexData] = editData;
      }
      await localforage.setItem(nameDB, data);
    }
    throw new Error("data structure not valid, must be an object list");
  } catch (error) {
    return error;
  }
}

export async function updateActive(props: functionActiveById) {
  const { key, nameDB, identifier, editData } = props;

  try {
    const data = await getAll(nameDB);
    if (Array.isArray(data)) {
      const indexData = data.findIndex((item) => item[key] === identifier);

      data[indexData].i_Activo = editData.i_Activo;

      await localforage.setItem(nameDB, data);
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

export type { functionById };
