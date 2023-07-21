import { LoadingAppUI } from "./interface";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoadingApp() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return <LoadingAppUI />;
}

export { LoadingApp };
