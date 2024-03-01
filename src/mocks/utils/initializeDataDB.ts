import localforage from "localforage";
import { intializedData } from "@mocks/utils/dataMuck.service";
import { intializedTokenData } from "@mocks/themeService/themeService.mock";
import { DocumentsServiceMock } from "@mocks/privileges/documents/DocumentsServiceMock.mock";
import { clientServerMock } from "@mocks/privileges/client-server/client-serverServiceMock.mock";
import { buttonOptionsMock } from "@mocks/privileges/button/buttonOptionsMock.mock";

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

  intializedData<typeof buttonOptionsMock[number]>(
    "button-options",
    buttonOptionsMock
  );
}
