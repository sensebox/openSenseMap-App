import { AuthActionKind } from "../actions";

interface AuthAction {
  type: AuthActionKind,
  token: string | null
}

interface AuthState {
  isLoading: boolean,
  isSignout: boolean,
  userToken: string | null
}

export default function authReducer(state: AuthState, action: AuthAction) {
  const { type, token } = action;
  switch (type) {
    case AuthActionKind.RESTORE_TOKEN:
      return {
        ...state,
        userToken: token,
        isLoading: false
      };
    case AuthActionKind.SIGN_IN:
      return {
        ...state,
        isSignout: false,
        userToken: token
      };
    case AuthActionKind.SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        userToken: null
      }
    default:
      return state;
  }
}