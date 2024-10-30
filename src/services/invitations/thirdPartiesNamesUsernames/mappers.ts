const mapthirdPartyUsersFormatsApiToEntity = (
  thirdPartyUsersFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildthirdPartyUsersFormat: Record<string, unknown> = {
    userIdentification: String(thirdPartyUsersFormat.a_Numnit),
    userName: `${thirdPartyUsersFormat.n_Nombr1 || ""} ${
      thirdPartyUsersFormat.n_Nombr2 || ""
    } ${thirdPartyUsersFormat.n_Apell1 || ""} ${
      thirdPartyUsersFormat.n_Apell2 || ""
    }`.trim(),
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
