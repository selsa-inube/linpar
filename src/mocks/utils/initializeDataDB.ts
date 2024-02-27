import localforage from "localforage";
import { intializedData } from "@mocks/utils/dataMuck.service";
import { intializedTokenData } from "@mocks/themeService/themeService.mock";
import { DocumentsServiceMock } from "@mocks/privileges/documents/DocumentsServiceMock.mock";
import { clientServerMock } from "@mocks/privileges/client-server/client-serverServiceMock.mock";
import { optionsWebMock } from "@mocks/privileges/options/optionsWebMock.mock";

export function initializeDataDB() {
  localforage.clear();

  intializedTokenData();
  intializedData<typeof DocumentsServiceMock[number]>(
    "documents",
    DocumentsServiceMock
  );

  intializedData<typeof clientServerMock[number]>(
    "clients-server",
    clientServerMock
  );

  intializedData<typeof optionsWebMock[number]>("options-web", optionsWebMock);
}
