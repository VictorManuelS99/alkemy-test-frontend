import { HiLogout } from "react-icons/hi";

import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../app/features/authSlice";
import { StyledLogout } from "./Logout.style";

export const Logout = () => {
  const dispatch = useAppDispatch();

  const closeSession = () => {
    localStorage.removeItem("token");
    dispatch(logout);
    window.location.reload();
  };

  return (
    <StyledLogout onClick={closeSession}>
      <HiLogout /> <p>Logout</p>
    </StyledLogout>
  );
};
