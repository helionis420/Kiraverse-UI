export enum ERole {
  USER = 'USER',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
}

export type Nullable<T> = T | null;

export interface ITRPCResponse<T = unknown> {
  result: {
    data: T;
  };
}

export type NftCollection = {
  address: string;
  id: string;
  img_url: string;
  name: string;
  type: string;
};

export type NftItem = {
  id: string;
  image: string;
  address: string;
  name: string;
  owner?: string;
  price: {
    value: number;
    type: string;
  };
  collection: string;
  url: string;
};

export type NftCollectionsResponse = NftCollection[];

export type NftListResponse = NftItem[];

export interface IPublicProfile {
  id: string;
  email: string;
  roles: ERole[];
  active: boolean;
  picture: string;
  lastname: string;
  firstname: string;
  createdAt: string;
  eos_pu_id?: string;
  updatedAt: string;
  wallet_address: string;
  name: string;
  sid: string;
}

export interface LoginResponse extends IPublicProfile {
  token: string;
}

export type RegisterResponse = boolean;
export type ResendCodeResponse = boolean;
export type VerifyCodeResponse = boolean;
export type ChangePasswordResponse = boolean;
export type LogoutResponse = boolean;
export type ValidateNonceResponse = boolean;
export type GenerateNonceResponse = {
  id: string;
  nonce: string;
};
