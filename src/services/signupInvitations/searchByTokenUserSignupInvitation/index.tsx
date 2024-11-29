import { environment } from "@config/environment";
import { mapSearchByTokenUsersUseCaseApiToEntity } from "./mappers";
import { ISearchByTokenUserSignupInvitationResponse } from "./types";

const getSearchByToken = async (
  token: string
): Promise<ISearchByTokenUserSignupInvitationResponse> => {
  try {
    const queryParams = new URLSearchParams({
      "X-Token-Process": token,
    });
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "SearchByTokenUserSignupInvitation",
        "X-Token-Process": token,
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const requestUrl = `${
      environment.IROLE_LINIX_USER_SIGNUP_INVITATION_QUERY_PROCESS_SERVICE
    }/users-signup-invitations?${queryParams.toString()}`;

    const res = await fetch(requestUrl, options);

    if (res.status === 204) {
      return {} as ISearchByTokenUserSignupInvitationResponse;
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error al obtener los datos: ${res.status}`);
    }

    return mapSearchByTokenUsersUseCaseApiToEntity(data);
  } catch (error) {
    console.error(error);
  }

  return {} as ISearchByTokenUserSignupInvitationResponse;
};

export { getSearchByToken };
