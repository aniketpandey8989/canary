import { LOGOUT } from "../redux/actions";

export const logout = (
  dispatch: (arg0: { type: string }) => void,
  redirect = true
) => {
  localStorage.removeItem("canary_user");
  localStorage.removeItem("canary_user_auth_token");
  localStorage.removeItem("canary_user_auth_token.e");
  dispatch({
    type: LOGOUT,
  });
  if (redirect) {
    location.href = "/login";
  }
};