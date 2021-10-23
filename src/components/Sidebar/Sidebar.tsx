import { Logout } from "../Logout/Logout";
import { StyledSidebar } from "./Sidebar.style";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <h1>Sidebar</h1>
      <Logout />
    </StyledSidebar>
  );
};
