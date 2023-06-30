import { ErrorNotAvailable } from "@pages/login/errors/ErrorNotAvailable";
import { clientsDataMock } from "@src/mocks/login/clients.mock";
import { themeClientsMock } from "@src/mocks/respondInvitation/themeClients.mock";
import { RespondInvitation } from "@src/pages/respondInvitation";
import { ConfirmationRegisterComplete } from "@src/pages/respondInvitation/cases/ConfirmationRegisterComplete";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function RespondInvitationRoutes() {
  const { client_id, invitation_id } = useParams();
  const navigate = useNavigate();

  const handleGetClientData = () => {
    if (!client_id) return;
    return clientsDataMock.find(
      (clientMock) => clientMock.id === parseInt(client_id)
    );
  };

  const clientData = handleGetClientData();

  const handleGetClientTheme = () => {
    if (!client_id) return;
    return themeClientsMock.find(
      (theme) => theme.clientId === parseInt(client_id)
    );
  };

  const theme = handleGetClientTheme();

  if (!theme || !client_id || !clientData) {
    navigate("/*");
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={<RespondInvitation clientData={clientData} />}
        />
        <Route
          path="confirmation-register-complete/"
          element={<ConfirmationRegisterComplete clientData={clientData} />}
        />
        <Route path="/*" element={<ErrorNotAvailable />} />
      </Routes>
    </ThemeProvider>
  );
}

export { RespondInvitationRoutes };
