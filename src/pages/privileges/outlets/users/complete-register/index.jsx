import { CompleteRegisterUI } from "./interface";
import { useParams } from "react-router-dom";

function CompleteRegister() {
  const { id } = useParams();
  return <CompleteRegisterUI id={id} />;
}

export { CompleteRegister };
