import { useNavigate, useParams } from "react-router-dom";
import { CheckingCredentialsUI } from "./interface";
import { useCallback, useEffect } from "react";
import { IUser } from "../../types";

const API_BASE_URL = import.meta.env.VITE_USERS_URI;

async function getUser(user_id: string): Promise<IUser | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/${user_id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const user: IUser = await response.json();
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function CheckingCredentials() {
  const navigate = useNavigate();
  const { user_id } = useParams();

  const checkCredentials = useCallback(async () => {
    try {
      if (!user_id) {
        return;
      }

      const user = await getUser(user_id);

      if (user) {
        if (!user.clients || user.clients.length === 0) {
          navigate("/login/error/not-related-clients");
        } else if (user.clients.length === 1) {
          navigate("/login/loading-app");
        } else {
          navigate(`/login/${user_id}/clients`);
        }
      } else {
        navigate("/login/error/not-available");
      }
    } catch (error) {
      navigate("/login/error/not-available");
    }
  }, [user_id, navigate]);

  useEffect(() => {
    const timer = setTimeout(checkCredentials, 2000);
    return () => clearTimeout(timer);
  }, [checkCredentials]);

  return <CheckingCredentialsUI />;
}

export { CheckingCredentials };
