import { LoadingAppUI } from "./interface";
import { useNavigate } from "react-router-dom";

function LoadingApp() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 2000);
  return <LoadingAppUI />;
}

export { LoadingApp };
