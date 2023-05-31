import { CompleteInvitation } from "./index";
import { MemoryRouter, Routes, Route } from "react-router";

const story = {
  components: [CompleteInvitation],
  title: "layouts/privileges/outlets/users/complete-invitation",
  parameters: {
    layout: "fullscreen",
  },
};

const Default = () => (
  <MemoryRouter initialEntries={["/path/10"]}>
    <Routes>
      <Route path="/path/:invitation_id" element={<CompleteInvitation />} />
    </Routes>
  </MemoryRouter>
);

const InvitationNotFound = () => <CompleteInvitation />;

export default story;

export { Default, InvitationNotFound };
