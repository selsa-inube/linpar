import localforage from "localforage";
import { intializedData } from "@mocks/privileges/documents/documents.service";
import { intializedTokenData } from "@mocks/themeService/themeService.mock";
import { DocumentsServiceMock } from "@src/mocks/privileges/documents/DocumentsServiceMock.mpck";

export function initializeDataDB() {
  localforage.clear();

  intializedTokenData();
  intializedData<typeof DocumentsServiceMock[number]>(
    "documents",
    DocumentsServiceMock
  );
}
