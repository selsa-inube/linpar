import { ISearchByTokenUserSignupInvitationResponse } from "./types";

const mapSearchByTokenUsersUseCaseApiToEntity = (
  searchByTokenUsers: Record<string, string | number | object>
): ISearchByTokenUserSignupInvitationResponse => {
  const buildSearchByTokenUsersUseCase: ISearchByTokenUserSignupInvitationResponse =
    {
      invitationId: String(searchByTokenUsers.invitationId),
      businessUnit: String(searchByTokenUsers.businessUnit),
      email: String(searchByTokenUsers.email),
      phoneNumber: String(searchByTokenUsers.phoneNumber),
      userAccountId: String(searchByTokenUsers.userAccountId),
      dateStart: String(searchByTokenUsers.dateStart),
      dateEnd: String(searchByTokenUsers.dateEnd),
      requestingUser: String(searchByTokenUsers.requestingUser),
      status: String(searchByTokenUsers.status),
      userIdentification: String(searchByTokenUsers.userIdentification),
      userName: String(searchByTokenUsers.userName),
    };
  return buildSearchByTokenUsersUseCase;
};

const mapSearchByTokenUsersUseCaseApiToEntities = (
  users: Record<string, string | number | object>[]
): ISearchByTokenUserSignupInvitationResponse[] => {
  return users.map(mapSearchByTokenUsersUseCaseApiToEntity);
};
export {
  mapSearchByTokenUsersUseCaseApiToEntities,
  mapSearchByTokenUsersUseCaseApiToEntity,
};
