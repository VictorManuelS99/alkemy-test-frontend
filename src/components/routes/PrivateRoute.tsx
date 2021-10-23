import { ComponentType } from "react";
import { Redirect, Route } from "react-router-dom";

import { selectAuth } from "../../app/features/authSlice";
import { useAppSelector } from "../../app/hooks";

export interface PrivateRouteProps {
  component: ComponentType;
  path: string;
  exact?: boolean;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { isLoggedIn } = useAppSelector(selectAuth);

  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
};
