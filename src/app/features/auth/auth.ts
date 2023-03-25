export interface SignupCredentials {
  email: string;
  displayName: string;
  password: string;
}

export interface SigninCredentials extends Omit<SignupCredentials, 'displayName'> {}
