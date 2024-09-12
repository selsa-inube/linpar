const mapResendEntityToApi = (
  invitationId: string
): Record<string, string | number | object> => {
  return {
    invitationId: String(invitationId),
  };
};

export { mapResendEntityToApi };
