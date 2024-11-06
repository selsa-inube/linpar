import { IUser } from "@services/users/invitation.types";

const mapInvitationEntityToApi = (
  invitation: IUser
): Record<string, string | number | object> => {
  return {
    invitationId: String(invitation.invitationId),
    modifyJustification: "Porque es una prueba",
    userData: {
      a_Numnit: String(invitation.a_Numnit),
      k_Grupo: String(invitation.k_Grupo),
      k_Usuari: String(invitation.k_Usuari),
      n_Usuari: String(invitation.n_Usuari),
      o_Clave: String(invitation.o_Clave),
      sucursales: Object(invitation.sucursales),
      proyectosOEventos: Object(invitation.proyectosOEventos),
      unidadesPresupuestalesDeAuxilios: Object(
        invitation.unidadesPresupuestalesDeAuxilios
      ),
      tiposDeNomina: Object(invitation.tiposDeNomina),
      pagadoresDeNomina: Object(invitation.pagadoresDeNomina),
    },
  };
};

export { mapInvitationEntityToApi };
