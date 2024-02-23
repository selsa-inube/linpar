import localforage from "localforage";
import { intializedData } from "@mocks/utils/dataMuck.service";
import { intializedTokenData } from "@mocks/themeService/themeService.mock";
import { DocumentsServiceMock } from "@mocks/privileges/documents/DocumentsServiceMock.mock";

export function initializeDataDB() {
  localforage.clear();

  intializedTokenData();
  intializedData<typeof DocumentsServiceMock[number]>(
    "documents",
    DocumentsServiceMock
  );
}
