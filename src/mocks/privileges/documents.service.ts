import localforage from "localforage";

interface Document {
  readonly id: number;
  codigo: number;
  nombre: string;
}

const DocumentsServiceMock = [
  {
    CODIGO: 1000,
    NOMBRE:
      "Certificacion de paz y salvo para creditos cancelados en los ultimos",
  },
  {
    CODIGO: 1001,
    NOMBRE: "Certificación saldos de Créditos",
  },
  {
    CODIGO: 1004,
    NOMBRE: "Certificado de créditos al día",
  },
  {
    CODIGO: 1005,
    NOMBRE: "Certificado saldos de aportes y ahorros",
  },
  {
    CODIGO: 2003,
    NOMBRE: "GR - CERTIFICADOS DE SALDOS Y PAGOS PARA EFECTOS TRIBUTARIOS",
  },
];

export async function intializedDocumentsData() {
  localforage.clear();

  const documents = DocumentsServiceMock.map((document) => {
    return {
      id: document.CODIGO,
      codigo: document.CODIGO,
      nombre: document.NOMBRE,
    };
  });
  await localforage.setItem("documents", documents);
}

export async function getDocuments(code: number): Promise<Document | void> {
  const document: Document[] | null = await localforage.getItem("documents");
  if (!document) return console.warn("No documents found");
  return document.find((doc) => doc.codigo === code);
}

export async function updateDocument(
  document: Document
): Promise<Document | void> {
  let documents: Document[] | null = await localforage.getItem("documents");
  if (!documents) return console.warn("No documents found");
  const index = documents.findIndex((doc) => doc.codigo === document.codigo);
  documents[index] = document;
  await localforage.setItem("documents", documents);
  return document;
}
