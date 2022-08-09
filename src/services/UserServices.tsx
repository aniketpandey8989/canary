import { LOGOUT } from "../redux/actions";

export const logout = (
  dispatch: (arg0: { type: string }) => void,
  redirect = true
) => {
  localStorage.removeItem("canary_user");
  dispatch({
    type: LOGOUT,
  });
  if (redirect) {
    location.href = "/login";
  }
};