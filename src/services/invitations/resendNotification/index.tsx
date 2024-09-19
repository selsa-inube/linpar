import { environment } from "@config/environment";
import { mapResendEntityToApi } from "./mappers";

const resendNotification = async (
  linixResend: string
): Promise<string | undefined> => {
  const requestUrl = `${environment.IROLE_LINIX_USER_SIGNUP_INVITATION_QUERY_PERSISTENCE_SERVICE}/users-signup-invitations`;

  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "X-Action": "ResendNotification",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapResendEntityToApi(linixResend)),
    };

    const res = await fetch(requestUrl, options);

    if (res.status === 204) {
      return;
    }

    let data;
    try {
      data = await res.json();
    } catch (error) {
      throw new Error("Failed to parse response JSON");
    }

    if (!res.ok) {
      const errorMessage = `Error al reenviar . Status: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to add resend:", error);
    throw error;
  }
};

export { resendNotification };
