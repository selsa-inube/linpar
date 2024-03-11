import { useState } from "react";
import { Icon } from "@inube/design-system";
import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { linixUseCases } from "@src/mocks/privileges/linixUseCases/LinixUseCases.mock";

interface UseCase {
  id: string;
  k_usecase: string;
  n_usecase: string;
  i_tipusec: string;
  n_descrip: string;
  n_camprv: string;
}

interface IDetailsModalProps {
  infoDataModal: {
    id: string;
  };
  icon: JSX.Element;
  closeModal: (param: boolean) => void;
  linixUseCases: UseCase[];
}

function InicialiceModalDetails(props: IDetailsModalProps) {
  const { infoDataModal, closeModal, linixUseCases } = props;

  const handleClick = () => {
    closeModal(false);
  };

  const useCase = linixUseCases.find(
    (useCase) => useCase.id === infoDataModal.id
  );

  return (
    <InteractiveModal
      portalId="portal"
      title="Detalles Caso de Uso"
      infoData={{
        Codigo: useCase?.k_usecase || "",
        Nombre: useCase?.n_usecase || "",
        Tipo: useCase?.i_tipusec || "",
        Descripicion: useCase?.n_descrip || "",
        OpcionClienteServidor: useCase?.n_camprv || "",
      }}
      infoTitle="Información"
      closeModal={handleClick}
    />
  );
}

export function DetailsModal(props: IDetailsModalProps) {
  const { infoDataModal, icon } = props;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Icon
        icon={icon}
        size="16px"
        appearance="dark"
        onClick={() => setShowModal(true)}
        cursorHover
      />
      {showModal && (
        <InicialiceModalDetails
          infoDataModal={infoDataModal}
          closeModal={setShowModal}
          icon={icon}
          linixUseCases={linixUseCases}
        />
      )}
    </>
  );
}
