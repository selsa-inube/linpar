export const editOptionsUseCases = async () => {
  // const newoptionsUseCase: UseCase = {
  //   k_Usecase: "0",
  //   //i_Tipusec: formSelectLabel(linixUseCaseData.i_Tipusec) || "",
  //   // modifyJustification: "edit",
  //   // opcionesCsPorCasoDeUso: linixUseCaseData,
  //   //   opcionesPortalWebPorCasoDeUso?
  //   //   reportesCsPorCasoDeUso?:
  //   //   reportesWebPorCasoDeUso?:
  //   //   tiposDeDocumentoPorCasoDeUso?:
  // };
  let confirmationType = true;

  try {
    // await editLinixUseCase(newoptionsUseCase);
  } catch (error) {
    confirmationType = false;

    throw error;
  }

  return confirmationType;
};
