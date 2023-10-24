import { themeClientsMock } from "@mocks/respondInvitation/themeClients.mock";
// import { RespondInvitation } from "@pages/respondInvitation";
// import { ConfirmationRegisterComplete } from "@pages/respondInvitation/cases/ConfirmationRegisterComplete";
// import { ErrorNotAvailable } from "@pages/respondInvitation/cases/ErrorNotAvailable";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function getClientTheme(clientId?: string) {
  if (!clientId) {
    return {};
  }

  const theme = themeClientsMock.find(
    (theme) => theme.clientId === parseInt(clientId)
  );

  if (!theme) {
    return {};
  }

  return theme;
}

function RespondInvitationRoutes() {
  const { client_id } = useParams();
  const navigate = useNavigate();
  const clientTheme = getClientTheme(client_id);

  if (!client_id || !clientTheme) {
    navigate("/respond-invitation");
    return null;
  }

  return (
    <ThemeProvider theme={clientTheme}>
      {/* <Routes>
        <Route path="/" element={<RespondInvitation />} />
        <Route
          path="confirmation-register-complete/"
          element={<ConfirmationRegisterComplete />}
        />
        <Route path="/*" element={<ErrorNotAvailable />} />
      </Routes> */}
    </ThemeProvider>
  );
}

export { RespondInvitationRoutes };
