import { Sidebar } from "../Sidebar/Sidebar";
import { StyledHome } from "./Home.style";

export const Home = () => {
  return (
    <StyledHome>
      <Sidebar />
      <h1>Home</h1>
    </StyledHome>
  );
};
