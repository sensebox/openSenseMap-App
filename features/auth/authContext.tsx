import * as React from 'react'

export interface AuthContextInterface {
  signIn: (data: any) => void,
  signOut: () => void,
  signUp: (data: any) => void,
}

const AuthContext = React.createContext<AuthContextInterface | null>(null);

export default AuthContext;