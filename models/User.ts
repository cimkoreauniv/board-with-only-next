export interface User {
  id: number;
  username: string;
  nickname: string;
}

export interface SignupInfo {
  username: string;
  nickname: string;
  password: string;
}

export interface LoginInfo {
  username: string;
  password: string;
}
