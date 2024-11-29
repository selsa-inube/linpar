import { environment } from "@config/environment";
import { mapSignupInvitationEntityToApi } from "./mappers";
import { IUsersSignupInvitation } from "./types";

const editSignupInvitations = async (
  signupInvitation: IUsersSignupInvitation
): Promise<IUsersSignupInvitation | undefined> => {
  const requestUrl = `${environment.IROLE_LINIX_USER_SIGNUP_INVITATION_QUERY_PERSISTENCE_SERVICE}/users-signup-invitations`;

  try {
    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "X-Action": "AutoUserSignup",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapSignupInvitationEntityToApi(signupInvitation)),
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
      const errorMessage = `Error al Invitación de registro. Status: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to Invitación de registro:", error);
    throw error;
  }
};

export { editSignupInvitations };
