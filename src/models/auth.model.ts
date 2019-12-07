export interface LoginModel {
  email: string;
  password: string;
}

export interface SignUpModel extends LoginModel {
  name: string;
}