export const NODE_MODE = process.env.NEXT_PUBLIC_ENV_MODE;

export const environment = {
  production: false,
  appIndex: 1,
  appVersion: "",
  sessionName: "LoggedInUser",
  sessionBusiness: "SelectedBusiness",
  sessionRevokeName: "revokeSession",
  sessionNameKYC: "kycSess",
  sessionEmailName: "StarWalletSessEmail",
  useStorage: false,
  precision: 6,
  cryptr: "tShgendBX76vMmadQ1sv2Ubgf93WgWYx",
  apiKey: "aeei9wxvkqrfvbidshqlgj5bvismvk5ybpo8rxxqtpki3iro",
};

// -- Address -----------------------------------------------------------------
export const ADDR_DEV = {
  BLOG_RENT: 'http://127.0.0.1:3000/api/v1',
  SOCKET_RENT: 'ws://127.0.0.1:3000/api/v1',
};

export const ADDR_STAGING = {
  BLOG_RENT: 'http://127.0.0.1:3000/api/v1',
  SOCKET_RENT: 'ws://127.0.0.1:3000/api/v1',
};

export const ADDR_PROD = {
  BLOG_RENT: 'http://127.0.0.1:3000/api/v1',
  SOCKET_RENT: 'ws://127.0.0.1:3000/api/v1',
};

export const ADDR = ["development", "local"].includes(NODE_MODE as string)
  ? ADDR_DEV
  : NODE_MODE === "staging"
  ? ADDR_STAGING
  : ADDR_PROD;

// -- Env ---------------------------------------------------------------------
export const ENV_DEV = {};
export const ENV_STAGING = {};
export const ENV_PROD = {};
export const ENV = ["development", "local"].includes(NODE_MODE as string)
  ? ENV_DEV
  : NODE_MODE === "staging"
  ? ENV_STAGING
  : ENV_PROD;
