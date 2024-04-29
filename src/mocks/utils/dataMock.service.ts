import localforage from "localforage";

import { IGeneralInformation } from "@src/pages/privileges/outlets/linixUseCase/adding-linix-use-case/types";
import { IGeneralInformationEntry } from "@src/pages/privileges/outlets/positions/add-position/forms/GeneralInformationForm";

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
  property?: string;
  editData?:
    | IGeneralInformation
    | IGeneralInformationEntry
    | { i_Activo: string };
  toggleI_Activo?: boolean;
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
  const {
    key,
    nameDB,
    identifier,
    editData,
    property,
    toggleI_Activo = false,
  } = props;

  try {
    const data = await getAll(nameDB);
    if (Array.isArray(data)) {
      const indexData = data.findIndex((item) => item[key] === identifier);
      if (toggleI_Activo && editData) {
        data[indexData].i_Activo = editData.i_Activo;
      } else if (property) {
        const dataItem = data.filter(
          (item) => item[key] === identifier && item
        );
        const editDataInitializer = dataItem.map((optionData: string[]) => {
          return (
            property && Object.assign({ [property]: editData }, optionData)
          );
        });
        data[indexData] = editDataInitializer;
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

async function fakeNetwork() {
  return new Promise((res) => {
    setTimeout(res, Math.random() * 1000);
  });
}

export type { functionById };
