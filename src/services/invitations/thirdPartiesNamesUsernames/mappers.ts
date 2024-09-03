const mapthirdPartyUsersFormatsApiToEntity = (
  thirdPartyUsersFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildthirdPartyUsersFormat: Record<string, unknown> = {
    userIdentification: String(thirdPartyUsersFormat.a_Numnit),
    userName: String(thirdPartyUsersFormat.n_Nombr1),
  };
  return buildthirdPartyUsersFormat;
};

const mapthirdPartyUsersFormatsApiToEntities = (
  thirdPartyUsersFormat: Record<string, string | number | object>[]
): Record<string, unknown>[] => {
  return thirdPartyUsersFormat.map(mapthirdPartyUsersFormatsApiToEntity);
};
export {
  mapthirdPartyUsersFormatsApiToEntities,
  mapthirdPartyUsersFormatsApiToEntity,
};
