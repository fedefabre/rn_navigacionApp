import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'changeFavIcon', payload: string }
  | { type: 'changeUsername', payload: string };


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'not logged in yet'
      }

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }

      case 'changeUsername':
      return {
        ...state,
        username: action.payload
      }

    case 'logout':
      return {
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined
      }

    default:
      return state
  }

}