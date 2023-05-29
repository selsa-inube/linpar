import { EditUser } from "./index";
import { MemoryRouter, Routes, Route } from "react-router";

const story = {
  components: [EditUser],
  title: "layouts/privileges/outlets/users/edit-user",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/path/14"]}>
        <Routes>
          <Route path="/path/:user_id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

const Default = () => <EditUser />;

export default story;

export { Default };
