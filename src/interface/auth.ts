export type User = {
  name: string
  email: string
}

export type UserSignupCredentials = {
  name: string
  email: string
  password: string
}

export type SignupResponse = {
  user: User | null
  token: string | null
}

export type UserLoginCredentials = {
  email: string
  password: string
}

export type LoginResponse = {
  token: string | null
  user: User | null
}
