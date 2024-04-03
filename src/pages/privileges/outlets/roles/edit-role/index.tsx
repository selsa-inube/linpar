import { useParams } from "react-router-dom";
import { EditRoleUI } from "./interface";

export const pruebaData = (data: any) => {
  return data;
};

export const EditRole = () => {
  const { rol_id } = useParams();

  console.log(rol_id);

  return (
    <EditRoleUI
    /*       selectedTab={selectedTab}
      handleTabChange={handleTabChange}
      editData={editData}
      handleSubmit={handleSubmit}
      controlModal={controlModal}
      handleDataChange={handleDataChange}
      handleCloseModal={handleCloseModal}
      handleContinueTab={handleContinueTab} */
    />
  );
};
